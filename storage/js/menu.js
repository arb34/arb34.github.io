// menu toggle behavior: open/close side menu, handle ESC and outside clicks
(function(){
  const toggle = document.getElementById('menuToggle');
  const side = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('menuClose');

  if(!toggle || !side) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'menu-backdrop';
  document.body.appendChild(backdrop);

  function openMenu(){
    side.setAttribute('aria-hidden','false');
    toggle.setAttribute('aria-expanded','true');
    side.classList.add('open');
    backdrop.classList.add('visible');
    const first = side.querySelector('.menu-link');
    if(first) first.focus();
  }

  function closeMenu(){
    side.setAttribute('aria-hidden','true');
    toggle.setAttribute('aria-expanded','false');
    side.classList.remove('open');
    backdrop.classList.remove('visible');
    toggle.focus();
  }

  // Respect initial markup: if side is already open, show backdrop and set toggle
  if(side.getAttribute('aria-hidden') === 'false' || side.classList.contains('open')){
    openMenu();
  }

  toggle.addEventListener('click', ()=>{
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if(open) closeMenu(); else openMenu();
  });

  closeBtn && closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeMenu();
  });
})();
