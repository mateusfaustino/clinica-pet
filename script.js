/**
 * vetPerto - Lógica da Aplicação, Modal de Detalhes e Integração com Google Maps
 * Fonte de dados dos estabelecimentos: window.PLACES_DATA (places.js)
 */

// Elementos da interface principal
const filters = document.querySelectorAll(".filter");
const cardsContainer = document.querySelector("#cards");
const toast = document.querySelector("#toast");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const locateBtn = document.querySelector("#locate-me");
const mapContainer = document.querySelector("#map");

// Elementos do Modal de Detalhes
const detailsModal = document.querySelector("#place-details-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalFavoriteBtn = document.querySelector("#modal-favorite-btn");
const modalTabs = document.querySelectorAll(".modal-tab");
const modalPanes = document.querySelectorAll(".tab-pane");

// Elementos internos do Modal
const modalCategoryBadge = document.querySelector("#modal-category-badge");
const modalPlaceTitle = document.querySelector("#modal-place-title");
const modalPlaceRating = document.querySelector("#modal-place-rating");
const modalPlaceAddress = document.querySelector("#modal-place-address");
const modalServicesList = document.querySelector("#modal-services-list");
const modalProductsGrid = document.querySelector("#modal-products-grid");
const modalAboutContent = document.querySelector("#modal-about-content");
const modalReviewsList = document.querySelector("#modal-reviews-list");

// Ações rápidas do Modal
const actionWhatsapp = document.querySelector("#modal-action-whatsapp");
const actionCall = document.querySelector("#modal-action-call");
const actionRoute = document.querySelector("#modal-action-route");
const actionShare = document.querySelector("#modal-action-share");

// Estado da aplicação
let mapInstance = null;
let userMarker = null;
let selectedPlaceId = "1";
let currentModalPlace = null;
let lastFocusedTrigger = null;
let activeCategory = "Todos";
let activeSearchTerm = "";
let toastTimer = null;
const placeMarkers = new Map();
let renderedCardElements = [];

/**
 * Retorna a lista de estabelecimentos carregada de places.js
 */
function getPlaces() {
  return window.PLACES_DATA || [];
}

/**
 * Exibe notificação acessível e temporária (Toast)
 */
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
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
 * Renderiza dinamicamente os cards de estabelecimentos na página inicial
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
        <button class="route-button" type="button" aria-label="Ver detalhes de ${place.name}">Ver detalhes <span aria-hidden="true">→</span></button>
      </div>
    `;

    // Clique no card foca no mapa
    card.addEventListener("click", (e) => {
      if (e.target.closest(".favorite") || e.target.closest(".route-button")) return;
      selectPlace(place.id, { scrollCard: false, panMap: true });
    });

    // Botão "Ver detalhes" abre o Modal
    const routeBtn = card.querySelector(".route-button");
    if (routeBtn) {
      routeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectPlace(place.id, { scrollCard: false, panMap: true });
        openPlaceDetails(place.id, routeBtn);
      });
    }

    // Botão de Favoritar no Card
    const favoriteBtn = card.querySelector(".favorite");
    if (favoriteBtn) {
      favoriteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(place.id, favoriteBtn);
      });
    }

    cardsContainer.appendChild(card);
  });

  renderedCardElements = [...cardsContainer.querySelectorAll(".place-card")];
}

/**
 * Alterna o estado de favorito de um estabelecimento
 */
function toggleFavorite(placeId, buttonElement) {
  const isSaved = buttonElement.getAttribute("aria-pressed") !== "true";
  const place = getPlaces().find((p) => p.id === placeId);
  const placeName = place ? place.name : "Estabelecimento";

  // Atualiza o botão no card
  const card = renderedCardElements.find((c) => c.dataset.id === placeId);
  if (card) {
    const cardFavBtn = card.querySelector(".favorite");
    if (cardFavBtn) {
      cardFavBtn.setAttribute("aria-pressed", isSaved);
      cardFavBtn.classList.toggle("saved", isSaved);
      cardFavBtn.textContent = isSaved ? "♥" : "♡";
      cardFavBtn.setAttribute("aria-label", `${isSaved ? "Remover" : "Adicionar"} ${placeName} ${isSaved ? "dos" : "aos"} favoritos`);
    }
  }

  // Atualiza o botão no modal (se estiver aberto para o mesmo lugar)
  if (modalFavoriteBtn && currentModalPlace && currentModalPlace.id === placeId) {
    modalFavoriteBtn.setAttribute("aria-pressed", isSaved);
    modalFavoriteBtn.classList.toggle("saved", isSaved);
    modalFavoriteBtn.textContent = isSaved ? "♥" : "♡";
    modalFavoriteBtn.setAttribute("aria-label", `${isSaved ? "Remover" : "Adicionar"} ${placeName} ${isSaved ? "dos" : "aos"} favoritos`);
  }

  showToast(isSaved ? `${placeName} salvo nos favoritos` : `${placeName} removido dos favoritos`);
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
  if (place && options.panMap && mapInstance) {
    mapInstance.panTo(place.coords);
    mapInstance.setZoom(16);
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

// -------------------------------------------------------------
// Controle do Modal de Detalhes (Bottom Sheet)
// -------------------------------------------------------------

/**
 * Abre o modal preenchendo as informações e serviços do estabelecimento
 */
function openPlaceDetails(placeId, triggerElement = null) {
  const place = getPlaces().find((p) => p.id === placeId);
  if (!place || !detailsModal || !modalBackdrop) return;

  currentModalPlace = place;
  lastFocusedTrigger = triggerElement;

  // Preenche dados do Cabeçalho
  if (modalCategoryBadge) {
    modalCategoryBadge.textContent = place.category;
    modalCategoryBadge.className = `modal-badge ${place.colorClass}`;
  }
  if (modalPlaceTitle) modalPlaceTitle.textContent = place.name;
  if (modalPlaceRating) modalPlaceRating.textContent = `★ ${place.rating} (${place.reviewsCount || 45} avaliações)`;
  if (modalPlaceAddress) modalPlaceAddress.textContent = `📍 ${place.address}`;

  // Sincroniza estado de favorito no modal
  if (modalFavoriteBtn) {
    const card = renderedCardElements.find((c) => c.dataset.id === placeId);
    const isSaved = card ? card.querySelector(".favorite")?.getAttribute("aria-pressed") === "true" : false;
    modalFavoriteBtn.setAttribute("aria-pressed", isSaved);
    modalFavoriteBtn.classList.toggle("saved", isSaved);
    modalFavoriteBtn.textContent = isSaved ? "♥" : "♡";
    modalFavoriteBtn.onclick = () => toggleFavorite(place.id, modalFavoriteBtn);
  }

  // Renderiza Aba 1: Serviços & Preços
  if (modalServicesList) {
    modalServicesList.innerHTML = (place.servicesList || []).map((s) => `
      <div class="service-item">
        <div class="service-info">
          <h4>${s.name}</h4>
          <p>${s.description}</p>
          <span class="service-duration">⏱️ ${s.duration}</span>
        </div>
        <div class="service-action">
          <span class="service-price">${s.price}</span>
          <button type="button" class="book-service-btn" data-service="${s.name}" data-place="${place.name}">Agendar</button>
        </div>
      </div>
    `).join("");

    // Eventos de Agendamento
    modalServicesList.querySelectorAll(".book-service-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const serviceName = btn.dataset.service;
        showToast(`Solicitação para "${serviceName}" enviada com sucesso! O local entrará em contato.`);
      });
    });
  }

  // Renderiza Aba 2: Produtos
  if (modalProductsGrid) {
    modalProductsGrid.innerHTML = (place.productsList || []).map((p) => `
      <div class="product-card">
        <span class="product-tag">${p.tag || 'Disponível'}</span>
        <div class="product-icon" aria-hidden="true">${p.icon || '🛍️'}</div>
        <h4 class="product-title">${p.name}</h4>
        <span class="product-category">${p.category}</span>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button type="button" class="order-product-btn" data-product="${p.name}">Pedir</button>
        </div>
      </div>
    `).join("");

    // Eventos de Pedido de Produtos
    modalProductsGrid.querySelectorAll(".order-product-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodName = btn.dataset.product;
        showToast(`"${prodName}" adicionado ao seu pedido!`);
      });
    });
  }

  // Renderiza Aba 3: Sobre & Horários
  if (modalAboutContent) {
    modalAboutContent.innerHTML = `
      <div class="about-block">
        <h4>🐾 Sobre o Estabelecimento</h4>
        <p>${place.about}</p>
      </div>
      <div class="about-block">
        <h4>⏰ Horários de Funcionamento</h4>
        <div class="hours-list">
          <div class="hours-row"><span>Dias de Semana:</span><strong>${place.openingHours.weekdays}</strong></div>
          <div class="hours-row"><span>Sábado:</span><strong>${place.openingHours.saturday}</strong></div>
          <div class="hours-row"><span>Domingo:</span><strong>${place.openingHours.sunday}</strong></div>
        </div>
      </div>
      <div class="about-block">
        <h4>✨ Comodidades e Estrutura</h4>
        <div class="amenities-chips">
          ${(place.amenities || []).map((a) => `<span class="amenity-chip">✓ ${a}</span>`).join("")}
        </div>
      </div>
    `;
  }

  // Renderiza Aba 4: Avaliações
  if (modalReviewsList) {
    modalReviewsList.innerHTML = (place.reviews || []).map((r) => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">${r.author}</span>
          <span class="review-rating" aria-label="${r.rating} de 5 estrelas">${'★'.repeat(r.rating)}</span>
        </div>
        <div class="review-pet">Tutor(a) de ${r.pet} • ${r.date}</div>
        <p class="review-comment">"${r.comment}"</p>
      </div>
    `).join("");
  }

  // Reseta para a primeira aba (Serviços)
  switchModalTab("services");

  // Configura Ações Rápidas
  if (actionWhatsapp) {
    actionWhatsapp.onclick = () => {
      showToast(`Iniciando conversa no WhatsApp com ${place.name}...`);
    };
  }
  if (actionCall) {
    actionCall.onclick = () => {
      showToast(`Ligando para ${place.name} (${place.phone})...`);
    };
  }
  if (actionRoute) {
    actionRoute.onclick = () => {
      closePlaceDetails();
      selectPlace(place.id, { scrollCard: true, panMap: true });
      showToast(`Centralizando mapa em ${place.name}...`);
    };
  }
  if (actionShare) {
    actionShare.onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: place.name,
          text: `Conheça ${place.name} no vetPerto!`,
          url: window.location.href
        }).catch(() => {});
      } else {
        showToast(`Link de ${place.name} copiado para a área de transferência!`);
      }
    };
  }

  // Exibe o Modal
  modalBackdrop.classList.add("is-open");
  detailsModal.classList.add("is-open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  detailsModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Trava rolagem do fundo

  // Foco acessível
  if (modalCloseBtn) {
    modalCloseBtn.focus();
  }
}

/**
 * Fecha o modal e restaura o foco anterior
 */
function closePlaceDetails() {
  if (!detailsModal || !modalBackdrop) return;

  modalBackdrop.classList.remove("is-open");
  detailsModal.classList.remove("is-open");
  modalBackdrop.setAttribute("aria-hidden", "true");
  detailsModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Libera rolagem do fundo
  currentModalPlace = null;

  if (lastFocusedTrigger) {
    lastFocusedTrigger.focus();
    lastFocusedTrigger = null;
  }
}

/**
 * Alterna as abas internas do modal
 */
function switchModalTab(targetTabId) {
  modalTabs.forEach((tab) => {
    const isTarget = tab.dataset.tab === targetTabId;
    tab.classList.toggle("active", isTarget);
    tab.setAttribute("aria-selected", isTarget);
  });

  modalPanes.forEach((pane) => {
    const isTarget = pane.id === `tab-content-${targetTabId}`;
    pane.classList.toggle("active", isTarget);
    pane.hidden = !isTarget;
  });
}

// -------------------------------------------------------------
// Inicialização do Google Maps
// -------------------------------------------------------------

/**
 * Inicializa a API moderna do Google Maps com AdvancedMarkerElement
 */
async function initGoogleMap() {
  if (!mapContainer) return;

  const config = window.GOOGLE_MAPS_CONFIG;
  const hasValidKey = config && config.apiKey && config.apiKey !== "SUA_API_KEY_AQUI";

  if (!hasValidKey || typeof google === "undefined" || !google.maps || !google.maps.importLibrary) {
    renderMapFallback();
    return;
  }

  try {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    mapContainer.innerHTML = "";

    mapInstance = new Map(mapContainer, {
      center: config.defaultCenter || { lat: -3.7380, lng: -38.5020 },
      zoom: config.defaultZoom || 14,
      mapId: config.mapId || "DEMO_MAP_ID",
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false
    });

    const places = getPlaces();

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
        openPlaceDetails(place.id, pinElement);
      });

      placeMarkers.set(place.id, { marker, element: pinElement });
    });

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
// Registro de Eventos Globais da Interface
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

// Eventos de Abas do Modal
modalTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchModalTab(tab.dataset.tab);
  });
});

// Fechamento do Modal
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closePlaceDetails);
}
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closePlaceDetails);
}

// Fechamento via Tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detailsModal && detailsModal.classList.contains("is-open")) {
    closePlaceDetails();
  }
});

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
