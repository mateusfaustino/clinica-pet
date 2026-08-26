/**
 * vetPerto - Lógica da Aplicação e Integração com Google Maps
 * Fonte de dados dos estabelecimentos: window.PLACES_DATA (places.js)
 */

// Elementos da interface
const filters = document.querySelectorAll(".filter");
const cardsContainer = document.querySelector("#cards");
const toast = document.querySelector("#toast");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const locateBtn = document.querySelector("#locate-me");
const mapContainer = document.querySelector("#map");

// Estado da aplicação
let mapInstance = null;
let userMarker = null;
let selectedPlaceId = "1";
let activeCategory = "Todos";
let activeSearchTerm = "";
let toastTimer = null;
const placeMarkers = new Map();
let renderedCardElements = [];

/**
 * Retorna os dados dos estabelecimentos carregados do places.js
 */
function getPlaces() {
  return window.PLACES_DATA || [];
}

/**
 * Exibe notificação acessível e temporária
 */
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/**
 * Atualiza o contador de resultados visíveis
 */
function updateCount(count) {
  const countElement = document.querySelector("#result-count");
  if (countElement) {
    countElement.textContent = count;
  }
}

/**
 * Renderiza dinamicamente os cards de estabelecimentos no container #cards
 */
function renderCards() {
  if (!cardsContainer) return;
  cardsContainer.innerHTML = "";
  const places = getPlaces();

  places.forEach((place) => {
    const card = document.createElement("article");
    card.className = `place-card ${place.id === selectedPlaceId ? "is-selected" : ""}`;
    card.dataset.id = place.id;
    card.dataset.category = place.category;

    card.innerHTML = `
      <div class="place-image ${place.imageClass || 'image-clinic'}" role="img" aria-label="Fachada ilustrada de ${place.name}">
        <span class="open-badge">${place.badge || 'Aberto'}</span>
        <button class="favorite" type="button" aria-label="Adicionar ${place.name} aos favoritos" aria-pressed="false">♡</button>
        <span class="pet-illustration" aria-hidden="true">${place.petIllustration || '🐾'}</span>
      </div>
      <div class="place-content">
        <div class="place-title">
          <h2>${place.name}</h2>
          <span>★ ${place.rating}</span>
        </div>
        <p>${place.services}</p>
        <div class="meta">
          <span>📍 ${place.distance} (${place.neighborhood})</span>
          <span>•</span>
          <span>${place.time}</span>
        </div>
        <button class="route-button" type="button">Ver detalhes <span aria-hidden="true">→</span></button>
      </div>
    `;

    // Clique no card foca no mapa
    card.addEventListener("click", (e) => {
      if (e.target.closest(".favorite") || e.target.closest(".route-button")) return;
      selectPlace(place.id, { scrollCard: false, panMap: true });
    });

    // Botão "Ver detalhes"
    const routeBtn = card.querySelector(".route-button");
    if (routeBtn) {
      routeBtn.addEventListener("click", () => {
        selectPlace(place.id, { scrollCard: true, panMap: true });
        showToast(`Abrindo detalhes de ${place.name}`);
      });
    }

    // Botão de Favoritar
    const favoriteBtn = card.querySelector(".favorite");
    if (favoriteBtn) {
      favoriteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isSaved = favoriteBtn.getAttribute("aria-pressed") !== "true";
        favoriteBtn.setAttribute("aria-pressed", isSaved);
        favoriteBtn.classList.toggle("saved", isSaved);
        favoriteBtn.textContent = isSaved ? "♥" : "♡";
        favoriteBtn.setAttribute("aria-label", `${isSaved ? "Remover" : "Adicionar"} ${place.name} ${isSaved ? "dos" : "aos"} favoritos`);
        showToast(isSaved ? `${place.name} salvo nos favoritos` : `${place.name} removido dos favoritos`);
      });
    }

    cardsContainer.appendChild(card);
  });

  renderedCardElements = [...cardsContainer.querySelectorAll(".place-card")];
}

/**
 * Seleciona um estabelecimento, sincronizando o card e o marcador no mapa
 */
function selectPlace(placeId, options = { scrollCard: true, panMap: true }) {
  selectedPlaceId = placeId;

  // Atualiza estado visual dos marcadores no mapa
  placeMarkers.forEach(({ element }, id) => {
    element.classList.toggle("selected", id === placeId);
  });

  // Atualiza estado visual dos cards
  renderedCardElements.forEach((card) => {
    const isTarget = card.dataset.id === placeId;
    card.classList.toggle("is-selected", isTarget);
    if (isTarget && options.scrollCard) {
      card.hidden = false;
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });

  const place = getPlaces().find((p) => p.id === placeId);
  if (place) {
    if (options.panMap && mapInstance) {
      mapInstance.panTo(place.coords);
      mapInstance.setZoom(16);
    }
  }
}

/**
 * Aplica filtros de categoria e busca textual aos cards e marcadores
 */
function filterPlaces() {
  let visibleCount = 0;
  const term = activeSearchTerm.toLowerCase();

  renderedCardElements.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardId = card.dataset.id;
    const cardText = card.textContent.toLowerCase();

    const matchesCategory = activeCategory === "Todos" || cardCategory === activeCategory;
    const matchesSearch = !term || cardText.includes(term);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount++;

    // Sincroniza visibilidade do marcador no Google Maps
    if (placeMarkers.has(cardId)) {
      const { marker } = placeMarkers.get(cardId);
      marker.map = isVisible ? mapInstance : null;
    }
  });

  updateCount(visibleCount);
}

/**
 * Inicializa a API moderna do Google Maps com AdvancedMarkerElement
 */
async function initGoogleMap() {
  if (!mapContainer) return;

  const config = window.GOOGLE_MAPS_CONFIG;
  const hasValidKey = config && config.apiKey && config.apiKey !== "SUA_API_KEY_AQUI";

  // Se não houver chave configurada, exibe fallback amigável
  if (!hasValidKey || typeof google === "undefined" || !google.maps || !google.maps.importLibrary) {
    renderMapFallback();
    return;
  }

  try {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Limpa o estado de carregamento
    mapContainer.innerHTML = "";

    // Instancia o mapa do Google
    mapInstance = new Map(mapContainer, {
      center: config.defaultCenter || { lat: -3.7380, lng: -38.5020 },
      zoom: config.defaultZoom || 14,
      mapId: config.mapId || "DEMO_MAP_ID",
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false
    });

    const places = getPlaces();

    // Cria marcadores avançados para cada estabelecimento
    places.forEach((place) => {
      const pinElement = document.createElement("button");
      pinElement.className = `map-pin ${place.colorClass} ${place.id === selectedPlaceId ? "selected" : ""}`;
      pinElement.setAttribute("data-id", place.id);
      pinElement.setAttribute("type", "button");
      pinElement.setAttribute("aria-label", `${place.name}, nota ${place.rating}`);
      pinElement.innerHTML = `<span>${place.icon}</span>`;

      const marker = new AdvancedMarkerElement({
        map: mapInstance,
        position: place.coords,
        title: `${place.name} (${place.neighborhood})`,
        content: pinElement
      });

      pinElement.addEventListener("click", () => {
        selectPlace(place.id, { scrollCard: true, panMap: true });
        showToast(`${place.name} selecionada`);
      });

      placeMarkers.set(place.id, { marker, element: pinElement });
    });

    // Aplica o filtro inicial aos marcadores
    filterPlaces();

  } catch (error) {
    console.warn("vetPerto: Não foi possível carregar o Google Maps dinâmico:", error);
    renderMapFallback(error.message);
  }
}

/**
 * Renderiza estado explicativo caso o mapa dinâmico não esteja ativo
 */
function renderMapFallback(errorMessage = "") {
  if (!mapContainer) return;
  mapContainer.innerHTML = `
    <div class="map-fallback">
      <span aria-hidden="true" style="font-size: 28px; margin-bottom: 6px;">🗺️</span>
      <h3>Mapa em Modo de Demonstração</h3>
      <p>Para ativar o mapa dinâmico com o Google Maps, adicione sua chave de API no arquivo <code>config.js</code> ou nos Secrets do repositório.</p>
    </div>
  `;
}

/**
 * Centraliza o mapa na localização do usuário via Geolocation API
 */
function locateUser() {
  if (!navigator.geolocation) {
    showToast("Geolocalização não é suportada pelo seu navegador.");
    return;
  }

  showToast("Buscando sua localização...");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (mapInstance) {
        mapInstance.panTo(userPos);
        mapInstance.setZoom(16);

        if (!userMarker) {
          try {
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            const userDot = document.createElement("div");
            userDot.className = "you-are-here-marker";
            userDot.innerHTML = "<span></span>";

            userMarker = new AdvancedMarkerElement({
              map: mapInstance,
              position: userPos,
              title: "Você está aqui",
              content: userDot
            });
          } catch (e) {
            console.warn("Erro ao criar marcador de usuário:", e);
          }
        } else {
          userMarker.position = userPos;
          userMarker.map = mapInstance;
        }

        showToast("Mapa centralizado na sua localização!");
      } else {
        showToast(`Sua localização: ${userPos.lat.toFixed(4)}, ${userPos.lng.toFixed(4)}`);
      }
    },
    (error) => {
      console.warn("Erro de geolocalização:", error);
      if (error.code === error.PERMISSION_DENIED) {
        showToast("Permissão de localização negada.");
      } else {
        showToast("Não foi possível obter sua localização exata.");
      }
    },
    { enableHighAccuracy: true, timeout: 9000, maximumAge: 60000 }
  );
}

// -------------------------------------------------------------
// Registro de Eventos da Interface
// -------------------------------------------------------------

// Filtros de Categoria
filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", selected);
    });

    activeCategory = button.dataset.filter;
    filterPlaces();
    showToast(activeCategory === "Todos" ? "Mostrando todos os lugares" : `Filtro: ${button.textContent.trim()}`);
  });
});

// Formulário de Pesquisa
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  activeSearchTerm = searchInput.value.trim();
  if (!activeSearchTerm) {
    searchInput.focus();
    showToast("Digite o que você procura");
    return;
  }
  filterPlaces();
  const visibleCount = renderedCardElements.filter((c) => !c.hidden).length;
  showToast(visibleCount ? `${visibleCount} resultado(s) encontrado(s)` : "Nenhum lugar encontrado.");
});

searchInput.addEventListener("input", (event) => {
  activeSearchTerm = event.target.value.trim();
  filterPlaces();
});

// Botão de Geolocalização
if (locateBtn) {
  locateBtn.addEventListener("click", locateUser);
}

// Ações auxiliares
const changeLocBtn = document.querySelector("#change-location");
if (changeLocBtn) {
  changeLocBtn.addEventListener("click", () => {
    searchInput.value = "Aldeota";
    activeSearchTerm = "Aldeota";
    searchInput.focus();
    filterPlaces();
    showToast("Filtrando por Aldeota");
  });
}

const viewToggleBtn = document.querySelector("#view-toggle");
if (viewToggleBtn) {
  viewToggleBtn.addEventListener("click", () => showToast("Exibindo lista de lugares"));
}

const navSearchBtn = document.querySelector(".nav-search");
if (navSearchBtn) {
  navSearchBtn.addEventListener("click", () => {
    searchInput.focus();
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// -------------------------------------------------------------
// Inicialização
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  filterPlaces();
  initGoogleMap();
});
