const filters = document.querySelectorAll('.filter');
const cards = [...document.querySelectorAll('.place-card')];
const pins = document.querySelectorAll('.map-pin');
const toast = document.querySelector('#toast');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function updateCount(count) {
  document.querySelector('#result-count').textContent = count === cards.length ? '12' : count;
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', selected);
    });
    const category = button.dataset.filter;
    let visible = 0;
    cards.forEach((card) => {
      const show = category === 'Todos' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible++;
    });
    updateCount(visible);
    showToast(category === 'Todos' ? 'Mostrando todos os lugares' : `Filtro: ${button.textContent.trim()}`);
  });
});

pins.forEach((pin) => {
  pin.addEventListener('click', () => {
    pins.forEach((item) => item.classList.toggle('selected', item === pin));
    cards.forEach((card) => card.classList.toggle('is-selected', card.dataset.id === pin.dataset.id));
    const card = cards.find((item) => item.dataset.id === pin.dataset.id);
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      showToast(`${card.querySelector('h2').textContent} selecionada`);
    } else {
      showToast('VetCare 24h • 1,5 km de você');
    }
  });
});

document.querySelectorAll('.favorite').forEach((button) => {
  button.addEventListener('click', () => {
    const saved = button.getAttribute('aria-pressed') !== 'true';
    const name = button.closest('.place-card').querySelector('h2').textContent;
    button.setAttribute('aria-pressed', saved);
    button.classList.toggle('saved', saved);
    button.textContent = saved ? '♥' : '♡';
    button.setAttribute('aria-label', `${saved ? 'Remover' : 'Adicionar'} ${name} ${saved ? 'dos' : 'aos'} favoritos`);
    showToast(saved ? `${name} salvo nos favoritos` : `${name} removido dos favoritos`);
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const term = searchInput.value.trim().toLowerCase();
  if (!term) {
    searchInput.focus();
    showToast('Digite o que você procura');
    return;
  }
  let visible = 0;
  cards.forEach((card) => {
    const match = card.textContent.toLowerCase().includes(term);
    card.hidden = !match;
    if (match) visible++;
  });
  updateCount(visible);
  showToast(visible ? `${visible} resultado${visible > 1 ? 's' : ''} encontrado${visible > 1 ? 's' : ''}` : 'Nenhum lugar encontrado. Tente outro termo.');
});

document.querySelector('#locate-me').addEventListener('click', () => showToast('Mapa centralizado na sua localização'));
document.querySelector('#change-location').addEventListener('click', () => {
  searchInput.value = 'Meireles, Fortaleza';
  searchInput.focus();
  showToast('Digite um bairro ou endereço');
});
document.querySelector('#view-toggle').addEventListener('click', () => showToast('Você já está vendo a lista de lugares'));
document.querySelector('.nav-search').addEventListener('click', () => {
  searchInput.focus();
  searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
document.querySelectorAll('.route-button').forEach((button) => {
  button.addEventListener('click', () => showToast(`Abrindo detalhes de ${button.closest('.place-card').querySelector('h2').textContent}`));
});
