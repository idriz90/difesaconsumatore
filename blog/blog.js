(function(){
  const form=document.getElementById('blogSearch');
  if(!form)return;
  const input=document.getElementById('blogQuery');
  const cards=[...document.querySelectorAll('.article-card')];
  const categories=[...document.querySelectorAll('[data-category]')];
  const count=document.getElementById('resultCount');
  const empty=document.getElementById('blogEmpty');
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
  const params=new URLSearchParams(window.location.search);
  if(params.get('newsletter')==='grazie'){
    const success=document.getElementById('newsletterSuccess');
    if(success)success.hidden=false;
  }
})();
