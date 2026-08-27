/**
 * vetPerto - Agenda local do cliente e fluxo de escolha de horários.
 */
(function initializeAppointmentsFeature() {
  "use strict";

  const STORAGE_KEY = "vetperto:appointments:v1";
  const TIME_ZONE = "America/Fortaleza";
  const SLOT_INTERVAL_MINUTES = 30;
  const DATE_RANGE_DAYS = 14;

  const homeView = document.querySelector("#home-view");
  const favoritesView = document.querySelector("#favorites-view");
  const appointmentsView = document.querySelector("#appointments-view");
  const appointmentsTitle = document.querySelector("#appointments-title");
  const appointmentsList = document.querySelector("#appointments-list");
  const appointmentsCount = document.querySelector("#appointments-count");
  const appointmentsEmpty = document.querySelector("#appointments-empty");
  const appointmentFilters = document.querySelectorAll(".appointment-filter");
  const navHome = document.querySelector("#nav-home");
  const navFavorites = document.querySelector("#nav-favorites");
  const navAppointments = document.querySelector("#nav-appointments");

  const bookingModal = document.querySelector("#booking-modal");
  const bookingBackdrop = document.querySelector("#booking-backdrop");
  const bookingClose = document.querySelector("#booking-close");
  const bookingTitle = document.querySelector("#booking-title");
  const bookingContext = document.querySelector("#booking-context");
  const bookingDates = document.querySelector("#booking-dates");
  const bookingSlots = document.querySelector("#booking-slots");
  const bookingSlotsEmpty = document.querySelector("#booking-slots-empty");
  const selectionStep = document.querySelector("#booking-selection-step");
  const confirmationStep = document.querySelector("#booking-confirmation-step");
  const reviewBookingBtn = document.querySelector("#review-booking");
  const backToSlotsBtn = document.querySelector("#back-to-slots");
  const confirmBookingBtn = document.querySelector("#confirm-booking");
  const bookingSummary = document.querySelector("#booking-summary");

  let activeAppointmentFilter = "all";
  let bookingState = null;
  let bookingTrigger = null;

  function getPlace(placeId) {
    return (window.PLACES_DATA || []).find((place) => place.id === placeId);
  }

  function getService(place, serviceName) {
    return place?.servicesList?.find((service) => service.name === serviceName);
  }

  function getZonedParts(referenceDate = new Date()) {
    const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(referenceDate).map(({ type, value }) => [type, value]));
    return {
      dateKey: `${parts.year}-${parts.month}-${parts.day}`,
      minutes: (Number(parts.hour) * 60) + Number(parts.minute)
    };
  }

  function addDays(dateKey, amount) {
    const date = new Date(`${dateKey}T12:00:00Z`);
    date.setUTCDate(date.getUTCDate() + amount);
    return date.toISOString().slice(0, 10);
  }

  function getDayIndex(dateKey) {
    return new Date(`${dateKey}T12:00:00Z`).getUTCDay();
  }

  function getMonday(dateKey) {
    const dayIndex = getDayIndex(dateKey);
    return addDays(dateKey, -(dayIndex === 0 ? 6 : dayIndex - 1));
  }

  function formatDate(dateKey, options = { weekday: "short", day: "2-digit", month: "short" }) {
    return new Intl.DateTimeFormat("pt-BR", { ...options, timeZone: "UTC" }).format(new Date(`${dateKey}T12:00:00Z`));
  }

  function parseDuration(durationText) {
    const hours = Number(durationText?.match(/(\d+)h/)?.[1] || 0);
    const minutes = Number(durationText?.match(/(\d+)\s*min/)?.[1] || 0);
    return (hours * 60) + minutes || 30;
  }

  function timeToMinutes(time) {
    if (!/^([01]\d|2[0-4]):[0-5]\d$/.test(time || "")) return null;
    const [hours, minutes] = time.split(":").map(Number);
    if (hours === 24 && minutes) return null;
    return (hours * 60) + minutes;
  }

  function minutesToTime(minutes) {
    const normalized = minutes % 1440;
    return `${String(Math.floor(normalized / 60)).padStart(2, "0")}:${String(normalized % 60).padStart(2, "0")}`;
  }

  function getMockAppointments(referenceDate = new Date()) {
    const today = getZonedParts(referenceDate).dateKey;
    const dayIndex = getDayIndex(today);
    const withinWeekOffset = dayIndex === 0 ? 0 : 1;
    return [
      { id: "mock-today", origin: "mock", placeId: "10", serviceName: getPlace("10")?.servicesList?.[0]?.name, date: today, time: "23:00", status: "Confirmado" },
      { id: "mock-week", origin: "mock", placeId: "1", serviceName: getPlace("1")?.servicesList?.[1]?.name, date: addDays(today, withinWeekOffset), time: "10:00", status: "Confirmado" },
      { id: "mock-later", origin: "mock", placeId: "4", serviceName: getPlace("4")?.servicesList?.[0]?.name, date: addDays(today, 9), time: "14:30", status: "Confirmado" }
    ].filter((appointment) => appointment.serviceName);
  }

  function isStoredAppointmentValid(appointment) {
    if (!appointment || typeof appointment !== "object") return false;
    if (!/^[a-zA-Z0-9-]{1,80}$/.test(appointment.id || "") || appointment.origin !== "local") return false;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(appointment.date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(appointment.time)) return false;
    const parsedDate = new Date(`${appointment.date}T12:00:00Z`);
    if (Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== appointment.date) return false;
    const place = getPlace(appointment.placeId);
    return Boolean(place && getService(place, appointment.serviceName));
  }

  function readStoredAppointments() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter(isStoredAppointmentValid) : [];
    } catch (error) {
      console.warn("vetPerto: dados locais de agendamentos foram ignorados.", error);
      return [];
    }
  }

  function writeStoredAppointments(appointments) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
      return true;
    } catch (error) {
      console.warn("vetPerto: não foi possível salvar o agendamento.", error);
      return false;
    }
  }

  function hydrateAppointment(appointment) {
    const place = getPlace(appointment.placeId);
    const service = getService(place, appointment.serviceName);
    if (!place || !service) return null;
    return {
      ...appointment,
      placeName: place.name,
      address: place.address,
      duration: service.duration,
      durationMinutes: parseDuration(service.duration),
      price: service.price
    };
  }

  function getAllAppointments(referenceDate = new Date()) {
    const unique = new Map();
    [...getMockAppointments(referenceDate), ...readStoredAppointments()].forEach((appointment) => {
      const hydrated = hydrateAppointment(appointment);
      if (hydrated) unique.set(hydrated.id, hydrated);
    });
    return [...unique.values()].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  }

  function matchesAppointmentFilter(appointment, filter, referenceDate = new Date()) {
    const today = getZonedParts(referenceDate).dateKey;
    if (filter === "today") return appointment.date === today;
    if (filter === "week") {
      const monday = getMonday(today);
      const sunday = addDays(monday, 6);
      return appointment.date >= monday && appointment.date <= sunday;
    }
    return true;
  }

  function renderAppointments() {
    const appointments = getAllAppointments().filter((appointment) => matchesAppointmentFilter(appointment, activeAppointmentFilter));
    appointmentsList.innerHTML = appointments.map((appointment) => `
      <article class="appointment-card" data-appointment-id="${appointment.id}">
        <div class="appointment-date">
          <strong>${formatDate(appointment.date, { day: "2-digit" })}</strong>
          <span>${formatDate(appointment.date, { month: "short" }).replace(".", "")}</span>
        </div>
        <div class="appointment-info">
          <span class="appointment-status">✓ Confirmado</span>
          <h2>${appointment.placeName}</h2>
          <p class="appointment-service">${appointment.serviceName}</p>
          <p>🕐 ${appointment.time} · ${appointment.duration} &nbsp; <strong>${appointment.price}</strong></p>
          <address>📍 ${appointment.address}</address>
        </div>
      </article>
    `).join("");
    appointmentsCount.textContent = appointments.length;
    appointmentsEmpty.hidden = appointments.length > 0;
    appointmentsList.hidden = appointments.length === 0;
  }

  function setAppointmentFilter(filter) {
    activeAppointmentFilter = filter;
    appointmentFilters.forEach((button) => {
      const active = button.dataset.appointmentFilter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderAppointments();
  }

  function showView(viewName, focusTitle = true) {
    const showAppointments = viewName === "appointments";
    const showFavorites = viewName === "favorites";
    const showHome = !showAppointments && !showFavorites;
    homeView.hidden = !showHome;
    favoritesView.hidden = !showFavorites;
    appointmentsView.hidden = !showAppointments;
    navHome.classList.toggle("active", showHome);
    navFavorites.classList.toggle("active", showFavorites);
    navAppointments.classList.toggle("active", showAppointments);
    [navHome, navFavorites, navAppointments].forEach((item) => item.removeAttribute("aria-current"));
    (showAppointments ? navAppointments : showFavorites ? navFavorites : navHome).setAttribute("aria-current", "page");
    if (showAppointments) {
      renderAppointments();
      if (focusTitle) appointmentsTitle.focus();
    } else if (showFavorites) {
      window.VetPertoFavorites?.render();
      if (focusTitle) document.querySelector("#favorites-title")?.focus();
    } else {
      requestAnimationFrame(() => refreshMapViewport());
      if (focusTitle) document.querySelector("#page-title")?.focus();
    }
    document.dispatchEvent(new CustomEvent("vetperto:viewchange", { detail: { view: viewName } }));
  }

  function getOperationalIntervals(place, dateKey) {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const schedule = place?.openingSchedule?.weekly;
    if (!schedule) return [];
    const currentDay = getDayIndex(dateKey);
    const previousDay = (currentDay + 6) % 7;
    const intervals = [];

    (schedule[days[currentDay]] || []).forEach(({ open, close }) => {
      const start = timeToMinutes(open);
      const end = timeToMinutes(close);
      if (start === null || end === null) return;
      intervals.push({ start, end: end > start ? end : 1440 });
    });
    (schedule[days[previousDay]] || []).forEach(({ open, close }) => {
      const start = timeToMinutes(open);
      const end = timeToMinutes(close);
      if (start !== null && end !== null && start > end && end > 0) intervals.push({ start: 0, end });
    });
    return intervals;
  }

  function slotConflicts(placeId, date, startMinutes, durationMinutes) {
    const endMinutes = startMinutes + durationMinutes;
    return getAllAppointments().some((appointment) => {
      if (appointment.placeId !== placeId || appointment.date !== date) return false;
      const appointmentStart = timeToMinutes(appointment.time);
      const appointmentEnd = appointmentStart + appointment.durationMinutes;
      return startMinutes < appointmentEnd && endMinutes > appointmentStart;
    });
  }

  function getAvailableSlots(place, service, dateKey, referenceDate = new Date()) {
    const durationMinutes = parseDuration(service.duration);
    const { dateKey: today, minutes: currentMinutes } = getZonedParts(referenceDate);
    const slots = [];
    getOperationalIntervals(place, dateKey).forEach(({ start, end }) => {
      let candidate = Math.ceil(start / SLOT_INTERVAL_MINUTES) * SLOT_INTERVAL_MINUTES;
      while (candidate + durationMinutes <= end) {
        const isPast = dateKey < today || (dateKey === today && candidate <= currentMinutes);
        if (!isPast && !slotConflicts(place.id, dateKey, candidate, durationMinutes)) slots.push(minutesToTime(candidate));
        candidate += SLOT_INTERVAL_MINUTES;
      }
    });
    return [...new Set(slots)];
  }

  function renderBookingDates() {
    const today = getZonedParts().dateKey;
    bookingDates.innerHTML = Array.from({ length: DATE_RANGE_DAYS }, (_, index) => {
      const dateKey = addDays(today, index);
      const selected = bookingState.date === dateKey;
      return `<button type="button" class="booking-date ${selected ? "selected" : ""}" data-date="${dateKey}" aria-pressed="${selected}">
        <span>${index === 0 ? "Hoje" : formatDate(dateKey, { weekday: "short" }).replace(".", "")}</span>
        <strong>${formatDate(dateKey, { day: "2-digit" })}</strong>
        <small>${formatDate(dateKey, { month: "short" }).replace(".", "")}</small>
      </button>`;
    }).join("");
    bookingDates.querySelectorAll(".booking-date").forEach((button) => button.addEventListener("click", () => selectBookingDate(button.dataset.date)));
  }

  function selectBookingDate(date) {
    bookingState.date = date;
    bookingState.time = null;
    renderBookingDates();
    renderBookingSlots();
  }

  function renderBookingSlots() {
    const place = getPlace(bookingState.placeId);
    const service = getService(place, bookingState.serviceName);
    const slots = getAvailableSlots(place, service, bookingState.date);
    bookingSlots.innerHTML = slots.map((time) => `<button type="button" class="booking-slot" data-time="${time}" aria-pressed="false">${time}</button>`).join("");
    bookingSlotsEmpty.hidden = slots.length > 0;
    reviewBookingBtn.disabled = true;
    bookingSlots.querySelectorAll(".booking-slot").forEach((button) => button.addEventListener("click", () => {
      bookingState.time = button.dataset.time;
      bookingSlots.querySelectorAll(".booking-slot").forEach((slot) => {
        const selected = slot === button;
        slot.classList.toggle("selected", selected);
        slot.setAttribute("aria-pressed", String(selected));
      });
      reviewBookingBtn.disabled = false;
    }));
  }

  function openBooking(placeId, serviceName, trigger) {
    const place = getPlace(placeId);
    const service = getService(place, serviceName);
    if (!place || !service) return;
    bookingTrigger = trigger;
    bookingState = { placeId, serviceName, date: getZonedParts().dateKey, time: null };
    bookingTitle.textContent = "Escolha um horário";
    bookingContext.innerHTML = `<strong>${place.name}</strong><span>${service.name} · ${service.duration} · ${service.price}</span>`;
    selectionStep.hidden = false;
    confirmationStep.hidden = true;
    renderBookingDates();
    renderBookingSlots();
    bookingModal.classList.add("is-open");
    bookingBackdrop.classList.add("is-open");
    bookingModal.setAttribute("aria-hidden", "false");
    bookingBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("booking-is-open");
    bookingTitle.focus();
  }

  function closeBooking(restoreFocus = true) {
    bookingModal.classList.remove("is-open");
    bookingBackdrop.classList.remove("is-open");
    bookingModal.setAttribute("aria-hidden", "true");
    bookingBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("booking-is-open");
    if (restoreFocus) bookingTrigger?.focus();
    bookingState = null;
    bookingTrigger = null;
  }

  function showBookingConfirmation() {
    if (!bookingState?.time) return;
    const place = getPlace(bookingState.placeId);
    const service = getService(place, bookingState.serviceName);
    bookingSummary.innerHTML = `
      <h3>Revise antes de confirmar</h3>
      <dl>
        <div><dt>Local</dt><dd>${place.name}</dd></div>
        <div><dt>Serviço</dt><dd>${service.name}</dd></div>
        <div><dt>Quando</dt><dd>${formatDate(bookingState.date, { weekday: "long", day: "2-digit", month: "long" })}, às ${bookingState.time}</dd></div>
        <div><dt>Duração</dt><dd>${service.duration}</dd></div>
        <div><dt>Valor</dt><dd>${service.price}</dd></div>
        <div><dt>Endereço</dt><dd>${place.address}</dd></div>
      </dl>`;
    selectionStep.hidden = true;
    confirmationStep.hidden = false;
    bookingTitle.textContent = "Confirme seu agendamento";
    backToSlotsBtn.focus();
  }

  function returnToSlots() {
    confirmationStep.hidden = true;
    selectionStep.hidden = false;
    bookingTitle.textContent = "Escolha um horário";
    reviewBookingBtn.focus();
  }

  function confirmBooking() {
    if (!bookingState?.time) return;
    const place = getPlace(bookingState.placeId);
    const service = getService(place, bookingState.serviceName);
    const slots = getAvailableSlots(place, service, bookingState.date);
    if (!slots.includes(bookingState.time)) {
      showToast("Este horário não está mais disponível. Escolha outro.");
      returnToSlots();
      renderBookingSlots();
      return;
    }

    confirmBookingBtn.disabled = true;
    const appointment = {
      id: window.crypto?.randomUUID?.() || `appointment-${Date.now()}`,
      origin: "local",
      placeId: bookingState.placeId,
      serviceName: bookingState.serviceName,
      date: bookingState.date,
      time: bookingState.time,
      status: "Confirmado",
      createdAt: new Date().toISOString()
    };
    const stored = readStoredAppointments();
    if (!writeStoredAppointments([...stored, appointment])) {
      confirmBookingBtn.disabled = false;
      showToast("O agendamento não foi salvo. Tente novamente.");
      return;
    }

    const newId = appointment.id;
    confirmBookingBtn.disabled = false;
    closeBooking(false);
    if (document.querySelector("#place-details-modal")?.classList.contains("is-open")) closePlaceDetails();
    setAppointmentFilter("all");
    showView("appointments");
    requestAnimationFrame(() => document.querySelector(`[data-appointment-id="${newId}"]`)?.classList.add("just-created"));
    showToast("Agendamento confirmado e salvo neste navegador.");
  }

  function trapBookingFocus(event) {
    if (event.key !== "Tab" || !bookingModal.classList.contains("is-open")) return;
    const focusable = [...bookingModal.querySelectorAll("button:not([disabled]), [tabindex]:not([tabindex='-1'])")].filter((element) => !element.closest("[hidden]"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  appointmentFilters.forEach((button) => button.addEventListener("click", () => setAppointmentFilter(button.dataset.appointmentFilter)));
  navHome.addEventListener("click", (event) => { event.preventDefault(); showView("home"); });
  navAppointments.addEventListener("click", (event) => { event.preventDefault(); showView("appointments"); });
  document.querySelector("#back-to-search").addEventListener("click", () => showView("home"));
  document.querySelector(".find-service-empty").addEventListener("click", () => showView("home"));
  document.querySelector("#show-all-appointments").addEventListener("click", () => setAppointmentFilter("all"));
  bookingClose.addEventListener("click", () => closeBooking());
  bookingBackdrop.addEventListener("click", () => closeBooking());
  reviewBookingBtn.addEventListener("click", showBookingConfirmation);
  backToSlotsBtn.addEventListener("click", returnToSlots);
  confirmBookingBtn.addEventListener("click", confirmBooking);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && bookingModal.classList.contains("is-open")) closeBooking();
    trapBookingFocus(event);
  });

  window.VetPertoAppointments = Object.freeze({ openBooking, showView });
  renderAppointments();
})();
