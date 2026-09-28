const logo = 'assets/dogs-company-logo-transparent.png';
const flaticonCss=document.createElement('link'); flaticonCss.rel='stylesheet'; flaticonCss.href='https://cdn-uicons.flaticon.com/4.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css'; document.head.appendChild(flaticonCss);
const flaticonThinCss=document.createElement('link'); flaticonThinCss.rel='stylesheet'; flaticonThinCss.href='https://cdn-uicons.flaticon.com/3.0.0/uicons-thin-rounded/css/uicons-thin-rounded.css'; document.head.appendChild(flaticonThinCss);
const WHATSAPP_NUMBER = '5531992954118';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de informações sobre atendimento na Dogs Company.';
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const links = [['index.html#inicio','Início'],['index.html#sobre','Sobre nós'],['index.html#servicos-lista','Serviços'],['especialidades.html','Especialidades'],['index.html#banho-tosa','Banho & Tosa'],['index.html#equipe','Equipe'],['index.html#contato','Contato']];
const nav = links.map(([url,label]) => `<a href="${url}">${label}</a>`).join('');
const quickWhatsApp=document.querySelector('.quick-actions a:first-child');
if (quickWhatsApp) { quickWhatsApp.href=whatsappLink; quickWhatsApp.setAttribute('aria-label','Falar com a Dog\'s Company pelo WhatsApp'); }
const heroTitle = document.querySelector('.hero-copy .title');
if (heroTitle) heroTitle.textContent = 'Atendimento veterinário completo para todas as fases da vida.';
const heroActions = document.querySelector('.hero-actions');
if (heroActions) heroActions.innerHTML = `<a class="btn primary" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta veterinária.')}" target="_blank" rel="noopener">Agendar consulta <span class="link-arrow">→</span></a><a class="btn outline" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar um banho e tosa para meu pet.')}" target="_blank" rel="noopener">Agendar Banho &amp; Tosa <span class="link-arrow">→</span></a>`;
const careBand = document.querySelector('#equipe');
if (careBand) careBand.innerHTML = `<div class="wrap"><header class="team-heading"><p class="eyebrow">Nossa forma de atender</p><h2>Como cuidamos.</h2></header><div class="experience"><article><div class="experience-top"><i class="experience-icon" aria-hidden="true">01</i></div><h3>Acolhimento</h3><p>Escutamos a família e acolhemos cada paciente com atenção desde a chegada.</p></article><article><div class="experience-top"><i class="experience-icon" aria-hidden="true">02</i></div><h3>Tecnologia</h3><p>Usamos a estrutura disponível para apoiar decisões cuidadosas.</p></article><article><div class="experience-top"><i class="experience-icon" aria-hidden="true">03</i></div><h3>Atenção individualizada</h3><p>Cada conduta considera a história e as necessidades do paciente.</p></article><article><div class="experience-top"><i class="experience-icon" aria-hidden="true">04</i></div><h3>Acompanhamento</h3><p>Orientamos a família ao longo das etapas do cuidado.</p></article></div></div>`;
const aboutIntro = document.querySelector('#sobre .intro');
if (aboutIntro) aboutIntro.textContent = 'Há 30 anos, a Dog’s Company integra atendimento veterinário, estrutura e tecnologia para acompanhar pets e suas famílias.';
const servicesTitle = document.querySelector('#servicos .title');
if (servicesTitle) servicesTitle.innerHTML = 'Estrutura e <strong>serviços.</strong>';
const servicesIntro = document.querySelector('#servicos .intro');
if (servicesIntro) servicesIntro.textContent = 'Consultas, exames e tratamentos para cuidar do seu pet em todas as fases da vida.';
document.querySelectorAll('#servicos-lista li').forEach(li => { if (li.textContent.trim() === 'Atendimento a Animais Silvestres') li.textContent = 'Crioterapia'; });
document.querySelectorAll('#servicos-lista .service-card .service-no').forEach((el,i) => { el.textContent = String(i + 1).padStart(2,'0'); });
const servicesGrid = document.querySelector('#servicos-lista .service-grid');
if (servicesGrid) { const style=document.createElement('style'); style.textContent='@media(min-width:1061px){#servicos-lista .service-grid{grid-template-columns:repeat(4,1fr)}}'; document.head.appendChild(style); }

if (location.pathname.endsWith('index.html') || location.pathname.endsWith('/')) {
  const banhoSection = document.querySelector('#banho-tosa');
  if (banhoSection) {
    const featured = [{slug:'dermatologia',name:'Dermatologia',description:'Pele, pelos, unhas e alterações recorrentes.'},{slug:'gastroenterologia',name:'Gastroenterologia',description:'Sistema digestório e alterações de apetite.'},{slug:'oncologia',name:'Oncologia',description:'Investigação e acompanhamento de tumores.'},{slug:'ortopedia',name:'Ortopedia',description:'Ossos, articulações e mobilidade.'},{slug:'odontologia',name:'Odontologia',description:'Saúde da boca, dentes e gengivas.'},{slug:'cardiologia',name:'Cardiologia',description:'Coração e sistema cardiovascular.'}];
    const section = document.createElement('section'); section.className='section specialties-home'; section.id='especialidades-home';
    section.innerHTML = `<div class="wrap"><header class="page-head"><p class="eyebrow">Cuidado especializado</p><h2 class="title">Nossas <strong>especialidades.</strong></h2><p class="intro">Áreas de atuação para investigar diferentes necessidades com atenção e cuidado.</p></header><div class="specialties-home-grid">${featured.map(s=>`<a class="specialty-card card" href="especialidade.html?slug=${s.slug}"><i class="specialty-icon">✦</i><h3>${s.name}</h3><p>${s.description}</p><b>Saiba mais →</b></a>`).join('')}</div><p class="specialties-home-cta"><a class="btn outline" href="especialidades.html">Ver todas as especialidades <span class="link-arrow">→</span></a></p></div>`;
    banhoSection.before(section);
  }
}

document.querySelectorAll('[data-header]').forEach(el => el.innerHTML = `<header class="site-header"><div class="nav-wrap"><a href="#inicio" aria-label="Dog's Company"><img class="brand" src="${logo}" alt="Dog's Company Clínica Veterinária"></a><nav class="nav" aria-label="Navegação principal">${nav}</nav><div class="header-actions"><a class="contact-quick" href="tel:+553132964416">Telefone <small>(31) 3296-4416</small></a><a class="contact-quick" href="${whatsappLink}" target="_blank" rel="noopener">WhatsApp <small>(31) 99295-4118</small></a></div><button class="menu-button" aria-expanded="false" aria-label="Abrir menu">☰</button></div></header><aside class="mobile-nav" aria-label="Menu móvel"><div class="mobile-nav-top"><img class="brand" src="${logo}" alt="Dog's Company"><button class="mobile-close" aria-label="Fechar menu">×</button></div>${nav}<a class="btn primary" href="${whatsappLink}" target="_blank" rel="noopener">Agendar Banho &amp; Tosa</a></aside>`);

document.querySelectorAll('[data-footer]').forEach(el => el.innerHTML = `<footer class="site-footer"><div class="wrap footer-grid"><div><a href="#inicio" aria-label="Dog's Company"><img class="footer-brand" src="${logo}" alt="Dog's Company Clínica Veterinária"></a><p class="footer-copy">Clínica veterinária preparada para cuidar de cada paciente com estrutura, atenção e acolhimento.</p></div><div><h2 class="footer-title">Navegação</h2><nav class="footer-links">${nav}</nav></div><div><h2 class="footer-title">Serviços</h2><div class="footer-links"><a href="#servicos-lista">Atendimento geral</a><a href="#servicos-lista">Diagnóstico</a><a href="#servicos-lista">Internação e cirurgia</a><a href="#banho-tosa">Banho &amp; Tosa</a></div></div><div><h2 class="footer-title">Contato</h2><div class="footer-links"><a href="tel:+553132964416">Telefone: (31) 3296-4416</a><a href="${whatsappLink}" target="_blank" rel="noopener">WhatsApp: (31) 99295-4118</a><a href="mailto:contato.dogscompanybh@gmail.com">contato.dogscompanybh@gmail.com</a><span>Rua Conde de Linhares, 809 - Cidade Jardim, Belo Horizonte - MG, CEP 30380-262</span></div></div></div><div class="wrap footer-bottom">© 2026 Dog's Company. Política de Privacidade · Termos de uso.</div></footer>`);
document.querySelectorAll('.site-footer').forEach(footer => { const credit=document.createElement('small'); credit.className='icon-credit'; credit.innerHTML='Ícones por <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener">Flaticon UIcons</a>'; footer.querySelector('.footer-bottom')?.append(' ',credit); });

document.querySelectorAll('.menu-button').forEach(btn => btn.addEventListener('click', () => { const panel=btn.closest('.site-header').nextElementSibling; panel.classList.add('open'); btn.setAttribute('aria-expanded','true'); }));
document.querySelectorAll('.mobile-close,.mobile-nav a').forEach(el => el.addEventListener('click', () => { document.querySelectorAll('.mobile-nav').forEach(nav => nav.classList.remove('open')); document.querySelectorAll('.menu-button').forEach(btn => btn.setAttribute('aria-expanded','false')); }));

document.querySelectorAll('[data-booking-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const species = form.querySelector('input[name="species"]:checked')?.value || '';
  const service = form.elements.atendimento.value;
  const message = `${WHATSAPP_MESSAGE}\n\nTutor: ${form.elements.tutor.value}\nWhatsApp: ${form.elements.whatsapp.value}\nPet: ${form.elements.pet.value}\nEspécie: ${species}\nServiço: ${service}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}));

const heroBooking = document.querySelector('.hero-actions .btn.primary');
if (heroBooking) { heroBooking.innerHTML = 'Agendar Consulta <span class="link-arrow">→</span>'; heroBooking.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na Dogs Company.')}`; }
const groomSection = document.querySelector('#banho-tosa .groom-grid');
if (groomSection) { const gallery = document.createElement('div'); gallery.className = 'groom-gallery'; ['WhatsApp Image 2026-07-29 at 16.00.21.jpeg','WhatsApp Image 2026-07-29 at 16.00.22.jpeg','WhatsApp Image 2026-07-29 at 16.00.23.jpeg','WhatsApp Image 2026-07-29 at 16.00.24.jpeg'].forEach((file,i) => { const img=document.createElement('img'); img.src=file; img.alt=`Banho e tosa ${i+1}`; gallery.appendChild(img); }); groomSection.after(gallery); }
const groomPhotos = document.querySelectorAll('.groom-gallery img');
['banho-tosa-01.jfif','banho-tosa-02.jpg'].forEach((file, i) => { if (groomPhotos[i]) groomPhotos[i].src = file; });
groomPhotos.forEach((img, i) => { if (i > 1) img.remove(); });
const groomSymbol = document.querySelector('#banho-tosa .groom-symbol');
const groomGallery = document.querySelector('#banho-tosa .groom-gallery');
if (groomSymbol && groomGallery) groomSymbol.replaceWith(groomGallery);
const catOption = document.querySelector('#agendamento input[value="Gato"]');
if (catOption) catOption.closest('label').remove();
const rating = document.querySelector('.rating-card.card strong');
if (rating) rating.textContent = '4,9';
const ratingNote = document.querySelector('.rating-card.card p');
if (ratingNote) ratingNote.remove();
const bookingAside = document.querySelector('#agendamento .booking-aside');
if (bookingAside) { const photo = document.createElement('img'); photo.className = 'booking-photo'; photo.src = 'banho-tosa-02.jpg'; photo.alt = 'Cachorro durante o banho'; bookingAside.prepend(photo); }

document.querySelectorAll('[data-reviews-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.reviews-track');
  const cards=[...track.querySelectorAll('.testimonial')];
  const gap=parseFloat(getComputedStyle(track).columnGap)||18;
  const pageWidth=()=>((cards[0]?.getBoundingClientRect().width||300)+gap)*3-gap;
  const move = direction => track.scrollBy({ left: direction * pageWidth(), behavior: 'smooth' });
  const prev=carousel.querySelector('.review-prev'), next=carousel.querySelector('.review-next');
  const update=()=>{ prev.disabled=track.scrollLeft<=2; next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2; };
  prev?.addEventListener('click', () => move(-1)); next?.addEventListener('click', () => move(1)); track.addEventListener('scroll',update,{passive:true}); update();
  const dots=document.createElement('div'); dots.className='review-dots'; for(let i=0;i<cards.length;i+=3){const dot=document.createElement('button');dot.type='button';dot.ariaLabel=`Ir para o grupo ${Math.floor(i/3)+1} de avaliações`;dot.addEventListener('click',()=>track.scrollTo({left:(i/3)*pageWidth(),behavior:'smooth'}));dots.appendChild(dot);} carousel.after(dots);
});

const outlineIcon = kind => {
  const paths = { heart:'<path d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z"/><path d="M12 8v5M9.5 10.5h5"/>', cross:'<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/>', hospital:'<path d="M4 21V7l8-4 8 4v14M8 21v-7h8v7M9 10h6M12 7v6"/>', people:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 21c0-4 3-7 6-7s6 3 6 7M15 15c3 0 5 2 5 5"/>', drop:'<path d="M12 3S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11-6-11Z"/>', scissors:'<circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="m8 8 11 9M8 16 19 7"/>', paw:'<circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/><circle cx="5.5" cy="12" r="2"/><path d="M8 18c0-3 1.8-5 4-5s4 2 4 5c0 2-8 2-8 0Z"/>', eye:'<circle cx="12" cy="12" r="3"/><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/>', bone:'<path d="M8 8a2.5 2.5 0 1 0-3.5-3.5A2.5 2.5 0 0 0 8 8l8 8a2.5 2.5 0 1 0 3.5 3.5A2.5 2.5 0 0 0 16 16L8 8Z"/>' };
  const extraPaths = { bath:'<path d="M5 12V6a2 2 0 0 1 4 0v1m-2 5V9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2h16M8 19v2m9-2v2"/><path d="M12 11v2m4-2v2"/>', hydration:'<path d="M12 3S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11-6-11Z"/><path d="m18 3 .7 1.5 1.5.5-1.5.7-.7 1.5-.6-1.5-1.5-.7 1.5-.5L18 3ZM5 4l.4 1 1 .4-1 .4L5 7l-.4-1.2-1-.4 1-.4L5 4Z"/>', humane:'<path d="M3 12h4l3 3h4l2-2h3l2 2-4 4h-7l-5-3H3z"/><path d="M12 12s-3-2-3-4a2 2 0 0 1 3-1 2 2 0 0 1 3 1c0 2-3 4-3 4Z"/>', climate:'<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4.8l3 2 3-2M9 19.2l3-2 3 2"/>', bottle:'<path d="M9 3h6m-5 0v4l-3 3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9l-3-3V3M8 13h8m-7 3h6"/>', shield:'<path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.3 2.3 4.8-5"/>', whatsapp:'<path d="M20.4 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4.1a8.2 8.2 0 1 1 15.3-4.2Z"/><path d="M8.2 7.8c.3-.5.7-.5 1-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.8-.9c.2-.2.4-.3.7-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.6.5-1.3.7-2.1.5-1-.2-2.3-.8-3.7-2.1-1.2-1.1-2-2.5-2.2-3.5-.2-.8 0-1.6.4-2.2Z"/>' };
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.innerHTML=paths[kind]||extraPaths[kind]||paths.paw; return svg;
};
const iconForText = text => { text=text.toLowerCase(); if(text.includes('banho')) return 'bath'; if(text.includes('tosa')) return 'scissors'; if(text.includes('hidrata')) return 'hydration'; if(text.includes('manejo')) return 'humane'; if(text.includes('climatizado')) return 'climate'; if(text.includes('premium')) return 'bottle'; if(text.includes('equipe')) return 'people'; if(text.includes('segurança')) return 'shield'; if(text.includes('cardio')) return 'heart'; if(text.includes('dermato')||text.includes('pele')) return 'drop'; if(text.includes('ortopedia')) return 'bone'; if(text.includes('oftalmo')) return 'eye'; if(text.includes('estrutura')) return 'hospital'; if(text.includes('atendimento')) return 'cross'; return 'paw'; };
window.applyIconSystem = () => {
  document.querySelectorAll('.specialty-icon').forEach(el => { const heading=el.parentElement?.querySelector('h2,h3'); el.textContent=''; el.appendChild(outlineIcon(iconForText(heading?.textContent||''))); });
  document.querySelectorAll('.groom-benefits .round-icon,.benefits-wide .round-icon').forEach(el => { const heading=el.parentElement?.querySelector('h3'); el.textContent=''; el.appendChild(outlineIcon(iconForText(heading?.textContent||''))); });
  document.querySelectorAll('.quick-actions b').forEach(el => { const whatsapp=!el.parentElement.textContent.includes('Banho'); el.textContent=''; if(whatsapp){ const svg=outlineIcon('whatsapp'); el.appendChild(svg); el.style.color='#25D366'; }else el.appendChild(outlineIcon('scissors')); });
  document.querySelectorAll('.reception-symbol,.groom-symbol').forEach(el => { el.textContent=''; el.appendChild(outlineIcon('paw')); });
};
window.applyIconSystem();
const specialtyFlaticon = { 'dermatologia':'custom-skin','gastroenterologia':'fi-rr-stomach','oncologia':'fi-rr-ribbon','ortopedia':'fi-rr-bone','odontologia':'fi-rr-tooth','nefrologia':'fi-rr-kidneys','endocrinologia':'fi-rr-test-tube','medicina de felinos':'fi-rr-sleeping-cat','cardiologia':'fi-rr-heart-rate','oftalmologia':'fi-rr-eye','neurologia':'fi-rr-brain','hematologia':'fi-rr-blood','nutrologia':'custom-apple','pneumologia':'fi-rr-lungs','fisioterapia':'custom-physiotherapy','anestesiologia':'fi-rr-syringe','cirurgia':'custom-operating-room','cuidados paliativos':'fi-rr-hand-holding-heart' };
const customSpecialtyIcons = {
  'custom-skin':'<path d="M4 8c2-1 3 1 5 0s3-1 5 0 4 1 6 0M4 12c2-1 3 1 5 0s3-1 5 0 4 1 6 0M4 16c2-1 3 1 5 0s3-1 5 0 4 1 6 0"/><path d="M12 8V4m0 0c-1.5-1.5-3-1.2-3.5-.5M12 4c1.5-1.5 3-1.2 3.5-.5M12 8v4"/>',
  'custom-apple':'<path d="M12 8c-2-3-1-5 1-6m-1 6c-2-2-5-2-7 0-3 3-1 9 2 12 2 2 4 1 5 0 1 1 3 2 5 0 3-3 5-9 2-12-2-2-5-2-7 0Z"/><path d="M12 7c1-3 4-4 6-3-1 2-3 3-6 3Z"/>',
  'custom-physiotherapy':'<circle cx="12" cy="13" r="8"/><path d="M4.7 9.8a8 8 0 0 1 14.6 0M4.7 16.2a8 8 0 0 0 14.6 0"/><ellipse cx="12" cy="13.5" rx="1.7" ry="2.1"/><circle cx="9.2" cy="10.6" r="1"/><circle cx="14.8" cy="10.6" r="1"/><circle cx="8.2" cy="13" r=".9"/><circle cx="15.8" cy="13" r=".9"/>' ,
  'custom-operating-room':'<path d="M8 3v3m0 0 4 3m-4-3-3 3m3-3h4m5-2v4m-2-2h4M5 12h14v3H5zM8 15v4m8-4v4M6 20h12"/><path d="M12 9v3"/>'
};
const specialtyNameFrom = el => (el.dataset.specialty || el.parentElement?.querySelector('h2,h3')?.textContent.trim() || '').toLowerCase();
const flaticonClass = text => { text=text.toLowerCase(); if(specialtyFlaticon[text]) return specialtyFlaticon[text]; if(text.includes('banho')) return 'fi-rr-bath'; if(text.includes('tosa')) return 'fi-rr-scissors'; if(text.includes('hidrata')) return 'fi-rr-droplet'; if(text.includes('equipe')) return 'fi-rr-users-alt'; if(text.includes('estrutura')) return 'fi-rr-hospital'; if(text.includes('diagn')) return 'fi-rr-microscope'; if(text.includes('atendimento')) return 'fi-rr-stethoscope'; if(text.includes('avalia')) return 'fi-rr-star'; return ''; };
window.applyFlaticonSystem = () => {
  document.querySelectorAll('.specialty-icon').forEach(el => { const name=specialtyNameFrom(el); const icon=specialtyFlaticon[name] || flaticonClass(name); if(customSpecialtyIcons[icon]){el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${customSpecialtyIcons[icon]}</svg>`;el.setAttribute('aria-hidden','true');}else{el.innerHTML=icon?`<i class="fi ${icon}" aria-hidden="true"></i>`:'';if(icon)el.setAttribute('aria-hidden','true');else el.remove();} });
  // General care and grooming icons use the site's own SVG set so a missing
  // Flaticon glyph can never erase an icon or leave an empty spot.
  document.querySelectorAll('.groom-benefits .round-icon,.benefits-wide .round-icon').forEach(el => { const heading=el.parentElement?.querySelector('h3'); el.textContent=''; el.appendChild(outlineIcon(iconForText(heading?.textContent||''))); });
  document.querySelectorAll('.quick-actions b').forEach(el => { const whatsapp=!el.parentElement.textContent.includes('Banho'); el.textContent=''; if(whatsapp){ const svg=outlineIcon('whatsapp'); el.appendChild(svg); el.style.color='#25D366'; }else el.appendChild(outlineIcon('scissors')); });
};
window.applyFlaticonSystem();
