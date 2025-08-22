(function(){
  // Year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav){
    toggle.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // APORIA preview content
  const aporiaBox = document.getElementById('aporia-content');
  if (aporiaBox){
    fetch('/assets/data/aporia.json').then(r=>r.json()).then(d=>{
      aporiaBox.innerHTML = `
        <p class="muted">${d.subtitle}</p>
        <h3>${d.title}</h3>
        <p>${d.description}</p>
      `;
    }).catch(()=>{ /* ignore */ });
  }

  // Gallery population
  const grid = document.getElementById('gallery-grid');
  if (grid){
    fetch('/assets/data/works.json')
      .then(r=>r.json())
      .then(items=>{
        const seriesSel = document.getElementById('filter-series');
        const mediumSel = document.getElementById('filter-medium');
        const search = document.getElementById('search');

        function render(){
          const series = seriesSel.value;
          const medium = mediumSel.value;
          const q = (search.value||'').toLowerCase();
          const filtered = items.filter(it =>
            (series==='all'||it.series===series) &&
            (medium==='all'||it.medium===medium) &&
            it.title.toLowerCase().includes(q)
          );
          grid.innerHTML = filtered.map(it=>`
            <a class="card" href="${it.href}">
              <img src="${it.thumb}" alt="${it.title}" loading="lazy">
              <div class="card-meta">
                <h3>${it.title}</h3>
                <p>${it.series} · ${it.medium} · ${it.year}</p>
              </div>
            </a>
          `).join('');
        }
        seriesSel.addEventListener('change',render);
        mediumSel.addEventListener('change',render);
        search.addEventListener('input',render);
        render();
      });

    // Simple lightbox (thumb click)
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt="Artwork">';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');
    document.body.addEventListener('click', e=>{
      const t = e.target;
      if (grid.contains(t) && t.tagName === 'IMG'){
        lbImg.src = t.src.replace('_thumb','');
        lbImg.alt = t.alt;
        lb.classList.add('open');
      } else if (t === lb){
        lb.classList.remove('open');
      }
    });
  }
})();
