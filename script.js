/**
 * vetPerto - Lógica da Aplicação e Integração com Google Maps
 */

// Dados dos estabelecimentos com coordenadas geográficas (Fortaleza - CE)
const PLACES_DATA = [
  {
    id: "1",
    name: "Clínica Bicho Feliz",
    category: "Veterinária",
    rating: "4,9",
    services: "Veterinária • Consultas • Vacinas",
    distance: "450 m",
    time: "6 min",
    badge: "Aberto agora",
    icon: "🐾",
    colorClass: "orange",
    coords: { lat: -3.7372, lng: -38.5035 }
  },
  {
    id: "2",
    name: "Pet Vida",
    category: "Petshop",
    rating: "4,8",
    services: "Petshop • Rações • Acessórios",
    distance: "800 m",
    time: "10 min",
    badge: "Aberto até 19h",
    icon: "🐶",
    colorClass: "purple",
    coords: { lat: -3.7405, lng: -38.4998 }
  },
  {
    id: "3",
    name: "AuMiau Banho & Tosa",
    category: "Banho",
    rating: "4,7",
    services: "Banho • Tosa • Hidratação",
    distance: "1,2 km",
    time: "4 min",
    badge: "Horários hoje",
    icon: "🛁",
    colorClass: "yellow",
    coords: { lat: -3.7348, lng: -38.4982 }
  },
  {
    id: "4",
    name: "VetCare 24 horas",
    category: "Veterinária",
    rating: "4,9",
    services: "Hospital 24h • Emergências • Cirurgias",
    distance: "1,5 km",
    time: "6 min",
    badge: "Plantão 24h",
    icon: "✚",
    colorClass: "blue",
    coords: { lat: -3.7420, lng: -38.5080 }
  }
];

// Elementos da interface
const filters = document.querySelectorAll(".filter");
const cards = [...document.querySelectorAll(".place-card")];
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
 * Seleciona um estabelecimento, sincronizando o card e o marcador no mapa
 */
function selectPlace(placeId, options = { scrollCard: true, panMap: true }) {
  selectedPlaceId = placeId;

  // Atualiza estado visual dos marcadores no mapa
  placeMarkers.forEach(({ element }, id) => {
    element.classList.toggle("selected", id === placeId);
  });

  // Atualiza estado visual dos cards
  cards.forEach((card) => {
    const isTarget = card.dataset.id === placeId;
    card.classList.toggle("is-selected", isTarget);
    if (isTarget && options.scrollCard) {
      card.hidden = false;
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });

  const place = PLACES_DATA.find((p) => p.id === placeId);
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

  cards.forEach((card) => {
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
      zoom: config.defaultZoom || 15,
      mapId: config.mapId || "DEMO_MAP_ID",
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false
    });

    // Cria marcadores avançados para cada estabelecimento
    PLACES_DATA.forEach((place) => {
      const pinElement = document.createElement("button");
      pinElement.className = `map-pin ${place.colorClass} ${place.id === selectedPlaceId ? "selected" : ""}`;
      pinElement.setAttribute("data-id", place.id);
      pinElement.setAttribute("type", "button");
      pinElement.setAttribute("aria-label", `${place.name}, nota ${place.rating}`);
      pinElement.innerHTML = `<span>${place.icon}</span>`;

      const marker = new AdvancedMarkerElement({
        map: mapInstance,
        position: place.coords,
        title: place.name,
        content: pinElement
      });

      pinElement.addEventListener("click", () => {
        selectPlace(place.id, { scrollCard: true, panMap: true });
        showToast(`${place.name} selecionada`);
      });

      placeMarkers.set(place.id, { marker, element: pinElement });
    });

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
  const visibleCards = cards.filter((c) => !c.hidden);
  showToast(visibleCards.length ? `${visibleCards.length} resultado(s) encontrado(s)` : "Nenhum lugar encontrado.");
});

searchInput.addEventListener("input", (event) => {
  activeSearchTerm = event.target.value.trim();
  filterPlaces();
});

// Botão de Geolocalização
if (locateBtn) {
  locateBtn.addEventListener("click", locateUser);
}

// Botões dos Cards e Favoritos
cards.forEach((card) => {
  const cardId = card.dataset.id;

  // Clique no card foca no mapa
  card.addEventListener("click", (e) => {
    if (e.target.closest(".favorite") || e.target.closest(".route-button")) return;
    selectPlace(cardId, { scrollCard: false, panMap: true });
  });

  // Botão "Ver detalhes"
  const routeBtn = card.querySelector(".route-button");
  if (routeBtn) {
    routeBtn.addEventListener("click", () => {
      selectPlace(cardId, { scrollCard: true, panMap: true });
      showToast(`Abrindo detalhes de ${card.querySelector("h2").textContent}`);
    });
  }
});

// Favoritar Lugares
document.querySelectorAll(".favorite").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const isSaved = button.getAttribute("aria-pressed") !== "true";
    const name = button.closest(".place-card").querySelector("h2").textContent;
    button.setAttribute("aria-pressed", isSaved);
    button.classList.toggle("saved", isSaved);
    button.textContent = isSaved ? "♥" : "♡";
    button.setAttribute("aria-label", `${isSaved ? "Remover" : "Adicionar"} ${name} ${isSaved ? "dos" : "aos"} favoritos`);
    showToast(isSaved ? `${name} salvo nos favoritos` : `${name} removido dos favoritos`);
  });
});

// Ações auxiliares
const changeLocBtn = document.querySelector("#change-location");
if (changeLocBtn) {
  changeLocBtn.addEventListener("click", () => {
    searchInput.value = "Meireles, Fortaleza";
    activeSearchTerm = "Meireles, Fortaleza";
    searchInput.focus();
    filterPlaces();
    showToast("Filtrando por Meireles, Fortaleza");
  });
}

const viewToggleBtn = document.querySelector("#view-toggle");
if (viewToggleBtn) {
  viewToggleBtn.addEventListener("click", () => showToast("Você já está vendo a lista de lugares"));
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
  filterPlaces();
  initGoogleMap();
});
