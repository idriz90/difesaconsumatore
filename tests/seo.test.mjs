import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git" || entry.name === "tests") return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name === "index.html" ? [path] : [];
  });
}

function value(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

const pages = htmlFiles(root).map((path) => ({
  path,
  name: relative(root, path).replaceAll("\\", "/"),
  html: readFileSync(path, "utf8"),
}));

test("ogni pagina indicizzabile ha metadati SEO e social completi", () => {
  const titles = new Set();
  const canonicals = new Set();

  for (const page of pages) {
    const noindex = /<meta name="robots" content="[^"]*noindex/i.test(page.html);
    if (noindex) continue;

    const title = value(page.html, /<title>(.*?)<\/title>/is);
    const description = value(page.html, /<meta name="description" content="([^"]+)"/i);
    const canonical = value(page.html, /<link rel="canonical" href="([^"]+)"/i);

    assert.ok(title, `${page.name}: title mancante`);
    assert.ok(description, `${page.name}: description mancante`);
    assert.match(canonical, /^https:\/\/www\.difesaconsumatore\.org\//, `${page.name}: canonical non valido`);
    assert.equal((page.html.match(/<h1\b/gi) ?? []).length, 1, `${page.name}: deve esserci un solo H1`);
    assert.match(page.html, /property="og:image"/, `${page.name}: og:image mancante`);
    assert.match(page.html, /name="twitter:card"/, `${page.name}: Twitter Card mancante`);
    assert.ok(!titles.has(title), `${page.name}: title duplicato`);
    assert.ok(!canonicals.has(canonical), `${page.name}: canonical duplicato`);
    titles.add(title);
    canonicals.add(canonical);
  }
});

test("i dati strutturati presenti sono JSON valido", () => {
  for (const page of pages) {
    for (const match of page.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `${page.name}: JSON-LD non valido`);
    }
  }
});

test("robots e sitemap usano il dominio canonico", () => {
  const robots = readFileSync(join(root, "robots.txt"), "utf8");
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.match(robots, /Sitemap: https:\/\/www\.difesaconsumatore\.org\/sitemap\.xml/);
  assert.ok(locations.length > 0, "La sitemap non contiene URL");
  assert.ok(locations.every((location) => location.startsWith("https://www.difesaconsumatore.org/")));
  assert.doesNotMatch(sitemap, /github\.io/);
});

test("il cluster debiti collega guide, servizio e sitemap", () => {
  const service = readFileSync(join(root, "servizi", "sovraindebitamento-esdebitazione", "index.html"), "utf8");
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  const guides = [
    "saldo-stralcio-o-sovraindebitamento",
    "piano-del-consumatore-pisa",
    "esdebitazione-debitore-incapiente",
    "debiti-pignoramento-cosa-fare",
  ];

  for (const guide of guides) {
    const path = `/guide/${guide}/`;
    assert.match(service, new RegExp(`href=["']${path}["']`), `${guide}: link dal servizio mancante`);
    assert.match(sitemap, new RegExp(`<loc>https://www\\.difesaconsumatore\\.org${path}</loc>`), `${guide}: URL in sitemap mancante`);
    const html = readFileSync(join(root, "guide", guide, "index.html"), "utf8");
    assert.match(html, /href="\/servizi\/sovraindebitamento-esdebitazione\/"/, `${guide}: link di ritorno al servizio mancante`);
  }
});

test("le pagine prioritarie usano titoli coerenti con le query Search Console", () => {
  const expectedTitles = new Map([
    ["servizi/rimborso-cessione-del-quinto/index.html", "Cessione del quinto a Pisa"],
    ["dove-siamo/index.html", "Difesa Consumatore Pisa: contatti"],
    ["servizi/rimborso-volo-cancellato-ritardo/index.html", "Volo cancellato o in ritardo"],
    ["servizi/cancellazione-segnalazione-crif/index.html", "Segnalazione CRIF a Pisa"],
  ]);

  for (const [file, phrase] of expectedTitles) {
    const html = readFileSync(join(root, ...file.split("/")), "utf8");
    const title = value(html, /<title>(.*?)<\/title>/is);
    const h1 = value(html, /<h1>(.*?)<\/h1>/is);
    assert.match(title, new RegExp(phrase, "i"), `${file}: frase target assente dal title`);
    assert.match(h1, new RegExp(phrase.split(":")[0], "i"), `${file}: tema principale assente dall'H1`);
  }
});

test("il cluster cessione del quinto collega guida, servizio, homepage e sitemap", () => {
  const guidePath = "/guide/rimborso-cessione-quinto-estinzione-anticipata/";
  const servicePath = "/servizi/rimborso-cessione-del-quinto/";
  const home = readFileSync(join(root, "index.html"), "utf8");
  const service = readFileSync(join(root, "servizi", "rimborso-cessione-del-quinto", "index.html"), "utf8");
  const guide = readFileSync(join(root, "guide", "rimborso-cessione-quinto-estinzione-anticipata", "index.html"), "utf8");
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");

  assert.match(home, new RegExp(`href=["']${servicePath}["']`), "homepage: link al servizio mancante");
  assert.match(service, new RegExp(`href=["']${guidePath}["']`), "servizio: link alla guida mancante");
  assert.match(guide, new RegExp(`href=["']${servicePath}["']`), "guida: link di ritorno al servizio mancante");
  assert.match(sitemap, new RegExp(`<loc>https://www\\.difesaconsumatore\\.org${guidePath}</loc>`), "guida: URL in sitemap mancante");
});
