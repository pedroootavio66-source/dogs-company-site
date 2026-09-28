const specialtyIcon = name => ({Dermatologia:'◌',Gastroenterologia:'◈',Oncologia:'✦',Ortopedia:'◇',Odontologia:'✧',Nefrologia:'⌁',Endocrinologia:'◉','Medicina de Felinos':'♧',Cardiologia:'♡',Oftalmologia:'⊙',Neurologia:'⌁',Hematologia:'✚',Nutrologia:'✦',Pneumologia:'◌',Fisioterapia:'↗',Anestesiologia:'✧',Cirurgia:'✣','Cuidados Paliativos':'♡'}[name] || '✦');
const grid=document.querySelector('#specialties-grid');
if(grid) specialties.forEach(item => { grid.insertAdjacentHTML('beforeend',`<a class="specialty-card card" href="especialidade.html?slug=${item.slug}"><i class="specialty-icon">${specialtyIcon(item.name)}</i><h2>${item.name}</h2><p>${item.description}</p><b>Saiba mais <span>→</span></b></a>`); });
if (window.applyIconSystem) window.applyIconSystem();
if (window.applyFlaticonSystem) window.applyFlaticonSystem();
