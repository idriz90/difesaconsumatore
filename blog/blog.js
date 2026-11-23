(function(){
  const form=document.getElementById('blogSearch');
  if(!form)return;
  const input=document.getElementById('blogQuery');
  const grid=document.getElementById('articleGrid');
  const cards=[...document.querySelectorAll('.article-card')];
  cards.sort((a,b)=>{const dateA=a.querySelector('time')?.dateTime||'';const dateB=b.querySelector('time')?.dateTime||'';return dateB.localeCompare(dateA);}).forEach(card=>grid.appendChild(card));
  const categories=[...document.querySelectorAll('[data-category]')];
  const count=document.getElementById('resultCount');
  const empty=document.getElementById('blogEmpty');
  const viewButtons=[...document.querySelectorAll('[data-view]')];
  let activeCategory='all';
  const normalize=value=>value.toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  function filter(){
    const query=normalize(input.value);
    let visible=0;
    cards.forEach(card=>{const matchesCategory=activeCategory==='all'||card.dataset.category===activeCategory;const matchesQuery=!query||normalize(card.dataset.search+' '+card.textContent).includes(query);const show=matchesCategory&&matchesQuery;card.hidden=!show;if(show)visible++;});
    count.textContent=visible===1?'1 guida trovata':`${visible} guide trovate`;
    empty.hidden=visible!==0;
  }
  form.addEventListener('submit',event=>{event.preventDefault();filter();document.getElementById('guide').scrollIntoView({behavior:'smooth'});});
  input.addEventListener('input',filter);
  categories.forEach(button=>button.addEventListener('click',()=>{activeCategory=button.dataset.category;categories.forEach(item=>item.classList.toggle('is-active',item===button));filter();document.getElementById('guide').scrollIntoView({behavior:'smooth'});}));
  document.querySelectorAll('[data-search]').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.search;filter();}));
  document.getElementById('resetSearch').addEventListener('click',()=>{input.value='';activeCategory='all';categories.forEach(item=>item.classList.toggle('is-active',item.dataset.category==='all'));filter();input.focus();});
  function setView(view){
    const selected=view==='grid'?'grid':'list';
    grid.classList.toggle('is-grid-view',selected==='grid');
    viewButtons.forEach(button=>{const active=button.dataset.view===selected;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active));});
    try{localStorage.setItem('blogView',selected);}catch(error){}
  }
  viewButtons.forEach(button=>button.addEventListener('click',()=>setView(button.dataset.view)));
  let savedView='list';
  try{savedView=localStorage.getItem('blogView')||'list';}catch(error){}
  setView(savedView);
  const params=new URLSearchParams(window.location.search);
  if(params.get('newsletter')==='grazie'){
    const success=document.getElementById('newsletterSuccess');
    if(success)success.hidden=false;
  }
})();
