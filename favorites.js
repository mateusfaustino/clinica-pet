/**
 * vetPerto - Persistência local e visão dos estabelecimentos favoritos.
 */
(function initializeFavoritesFeature() {
  "use strict";

  const STORAGE_KEY = "vetperto:favorites:v1";
  const favoritesView = document.querySelector("#favorites-view");
  const favoritesList = document.querySelector("#favorites-list");
  const favoritesCount = document.querySelector("#favorites-count");
  const favoritesEmpty = document.querySelector("#favorites-empty");
  const navFavorites = document.querySelector("#nav-favorites");
  let favoriteIds = readFavorites();

  function getPlaces() {
    return window.PLACES_DATA || [];
  }

  function validateFavoriteIds(value) {
    if (!Array.isArray(value)) return [];
    const validPlaceIds = new Set(getPlaces().map((place) => place.id));
    return [...new Set(value.filter((id) => typeof id === "string" && validPlaceIds.has(id)))]
      .sort((first, second) => first.localeCompare(second, "pt-BR", { numeric: true }));
  }

  function parseFavoriteValue(rawValue) {
    try {
      return validateFavoriteIds(JSON.parse(rawValue || "[]"));
    } catch (error) {
      console.warn("vetPerto: favoritos locais inválidos foram ignorados.", error);
      return [];
    }
  }

  function readFavorites() {
    try {
      return parseFavoriteValue(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      console.warn("vetPerto: armazenamento de favoritos indisponível.", error);
      return [];
    }
  }

  function writeFavorites(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      return true;
    } catch (error) {
      console.warn("vetPerto: não foi possível salvar os favoritos.", error);
      return false;
    }
  }

  function isFavorite(placeId) {
    return favoriteIds.includes(placeId);
  }

  function updateFavoriteButton(button, place, saved) {
    if (!button || !place) return;
    button.setAttribute("aria-pressed", String(saved));
    button.classList.toggle("saved", saved);
    button.textContent = saved ? "♥" : "♡";
    button.setAttribute("aria-label", `${saved ? "Remover" : "Adicionar"} ${place.name} ${saved ? "dos" : "aos"} favoritos`);
  }

  function syncFavoriteButtons() {
    document.querySelectorAll("[data-favorite-id]").forEach((button) => {
      const place = getPlaces().find((item) => item.id === button.dataset.favoriteId);
      updateFavoriteButton(button, place, isFavorite(button.dataset.favoriteId));
    });
  }

  function render() {
    const places = favoriteIds.map((id) => getPlaces().find((place) => place.id === id)).filter(Boolean);
    favoritesList.innerHTML = places.map((place) => {
      const availability = getPlaceAvailability(place);
      return `
        <article class="favorite-place-card" data-favorite-place-id="${place.id}">
          <div class="favorite-place-icon ${place.imageClass || "image-clinic"}" aria-hidden="true">${place.petIllustration || place.icon || "🐾"}</div>
          <div class="favorite-place-info">
            <span class="favorite-category">${place.category}</span>
            <h2>${place.name}</h2>
            <p>★ ${place.rating} · 📍 ${place.distance} (${place.neighborhood})</p>
            <span class="favorite-availability availability-${availability.state}">${availability.label}</span>
            <div class="favorite-card-actions">
              <button class="favorite-details" type="button" data-details-id="${place.id}">Ver detalhes</button>
              <button class="favorite favorite-card-heart saved" type="button" data-favorite-id="${place.id}" aria-pressed="true" aria-label="Remover ${place.name} dos favoritos">♥</button>
            </div>
          </div>
        </article>`;
    }).join("");

    favoritesCount.textContent = places.length;
    favoritesList.hidden = places.length === 0;
    favoritesEmpty.hidden = places.length > 0;

    favoritesList.querySelectorAll("[data-details-id]").forEach((button) => {
      button.addEventListener("click", () => openPlaceDetails(button.dataset.detailsId, button));
    });
    favoritesList.querySelectorAll("[data-favorite-id]").forEach((button) => {
      button.addEventListener("click", () => toggle(button.dataset.favoriteId));
    });
    syncFavoriteButtons();
  }

  function toggle(placeId) {
    const place = getPlaces().find((item) => item.id === placeId);
    if (!place) return false;
    const wasSaved = isFavorite(placeId);
    const nextIds = wasSaved
      ? favoriteIds.filter((id) => id !== placeId)
      : validateFavoriteIds([...favoriteIds, placeId]);

    if (!writeFavorites(nextIds)) {
      showToast("Não foi possível salvar sua alteração nos favoritos.");
      syncFavoriteButtons();
      return false;
    }

    favoriteIds = nextIds;
    syncFavoriteButtons();
    render();
    showToast(wasSaved ? `${place.name} removido dos favoritos` : `${place.name} salvo nos favoritos`);
    return true;
  }

  function showHome() {
    window.VetPertoAppointments?.showView("home");
  }

  navFavorites.addEventListener("click", (event) => {
    event.preventDefault();
    window.VetPertoAppointments?.showView("favorites");
  });
  document.querySelector("#back-from-favorites").addEventListener("click", showHome);
  document.querySelector("#find-favorites").addEventListener("click", showHome);

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    favoriteIds = parseFavoriteValue(event.newValue);
    syncFavoriteButtons();
    render();
  });

  window.setInterval(() => {
    if (!favoritesView.hidden) render();
  }, 60000);

  window.VetPertoFavorites = Object.freeze({ isFavorite, render, syncFavoriteButtons, toggle });
  syncFavoriteButtons();
  render();
})();
