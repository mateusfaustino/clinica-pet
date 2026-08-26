# Especificação Técnica: Integração do Google Maps na Aplicação Estática

Este documento define a arquitetura e o guia de implementação para integrar o **Google Maps JavaScript API** ao projeto **vetPerto**, respeitando sua natureza estática (Vanilla HTML5, CSS3 e JavaScript puro, sem necessidade de backend ou bundlers).

---

## 1. Desafios da Aplicação Estática & Segurança

Por ser um projeto puramente estático (*client-side*), o código JavaScript é executado diretamente no navegador do usuário.

### Como funciona a segurança da API Key?
1. **Visibilidade da Chave:** No modelo estático do Google Maps, a chave de API é pública por natureza.
2. **Camada de Proteção Obrigatória:** A segurança **não** reside em esconder a chave no código compilado, mas sim nas **Restrições de Referenciador HTTP** configuradas no Google Cloud Console (veja [google_cloud_console.md](file:///c:/dev/php/clinica-pet/docs/spec/maps/google_cloud_console.md)).
3. **Boas Práticas de Repositório:**
   - O arquivo com a chave real (`config.js`) deve ser ignorado no controle de versão (`.gitignore`).
   - Um arquivo modelo (`config.example.js`) deve ser versionado no repositório.

---

## 2. Estrutura de Arquivos Proposta

```
clinica-pet/
├── docs/
│   └── spec/
│       └── maps/
│           ├── google_cloud_console.md
│           └── google_maps.md
├── index.html
├── styles.css
├── script.js
├── config.example.js   # Modelo versionado no Git
├── config.js           # Arquivo local com a chave real (ignorado no .gitignore)
└── .gitignore          # Contendo config.js
```

---

## 3. Padrões Modernos do Google Maps (Obrigatórios)

Para garantir conformidade com as diretrizes atuais do Google Maps Platform:

1. **`importLibrary()` Assíncrono:** Carregamento dinâmico e modular das bibliotecas (`maps` e `marker`).
2. **`AdvancedMarkerElement`:** O antigo `google.maps.Marker` foi descontinuado. Utilizaremos o `AdvancedMarkerElement`, que permite marcadores HTML/CSS customizados com os emojis e cores do design da vetPerto.
3. **`Map ID`:** O uso de `AdvancedMarkerElement` exige um identificador de mapa (`mapId`) configurado no Google Cloud Console.

---

## 4. Passo a Passo da Implementação

### Passo 4.1: Criar os arquivos de configuração

#### `config.example.js` (Versionado)
```javascript
// Modelo de configuração - Copie este arquivo para config.js e preencha com suas credenciais
const GOOGLE_MAPS_CONFIG = {
  apiKey: "SUA_API_KEY_AQUI",
  mapId: "SEU_MAP_ID_AQUI", // Ex: "DEMO_MAP_ID" para testes rápidos ou o ID gerado no Cloud Console
  defaultCenter: { lat: -3.7380, lng: -38.5020 }, // Aldeota, Fortaleza - CE
  defaultZoom: 15
};
```

#### `.gitignore`
Garantir que o arquivo com a chave real não seja commitado:
```
config.js
```

---

### Passo 4.2: Atualizar o `index.html`

Carregar o `config.js` e o bootstrap loader oficial do Google Maps antes do `script.js`:

```html
<!-- Configuração da aplicação (ignorado no git) -->
<script src="config.js"></script>

<!-- Bootstrap Loader Oficial do Google Maps -->
<script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.googleapis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: window.GOOGLE_MAPS_CONFIG ? window.GOOGLE_MAPS_CONFIG.apiKey : "",
    v: "weekly"
  });
</script>

<script src="script.js"></script>
```

---

### Passo 4.3: Dados dos Estabelecimentos com Coordenadas Reais

No `script.js`, estruturar os dados de lugares com suas respectivas coordenadas geográficas:

```javascript
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
```

---

### Passo 4.4: Inicialização do Mapa e Marcadores Avançados (`script.js`)

```javascript
let mapInstance = null;
let userMarker = null;
const mapMarkers = new Map();

async function initGoogleMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Fallback caso a chave não esteja configurada
  if (!window.GOOGLE_MAPS_CONFIG || !window.GOOGLE_MAPS_CONFIG.apiKey || window.GOOGLE_MAPS_CONFIG.apiKey === "SUA_API_KEY_AQUI") {
    console.info("vetPerto: Chave do Google Maps não configurada. Usando mapa ilustrativo.");
    return;
  }

  try {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Limpa os elementos decorativos do mapa fake
    mapElement.innerHTML = "";

    mapInstance = new Map(mapElement, {
      center: GOOGLE_MAPS_CONFIG.defaultCenter,
      zoom: GOOGLE_MAPS_CONFIG.defaultZoom,
      mapId: GOOGLE_MAPS_CONFIG.mapId || "DEMO_MAP_ID",
      disableDefaultUI: true, // Interface limpa e mobile-friendly
      zoomControl: true,
      clickableIcons: false
    });

    // Cria os marcadores customizados para cada lugar
    PLACES_DATA.forEach(place => {
      // Cria elemento DOM customizado preservando o estilo do vetPerto
      const pinElement = document.createElement("button");
      pinElement.className = `map-pin ${place.colorClass}`;
      pinElement.setAttribute("data-id", place.id);
      pinElement.setAttribute("aria-label", `${place.name}, nota ${place.rating}`);
      pinElement.innerHTML = `<span>${place.icon}</span>`;

      const marker = new AdvancedMarkerElement({
        map: mapInstance,
        position: place.coords,
        title: place.name,
        content: pinElement
      });

      // Evento de clique no marcador
      pinElement.addEventListener("click", () => {
        selectPlace(place.id, true);
      });

      mapMarkers.set(place.id, { marker, element: pinElement });
    });

    // Adiciona o botão de centralizar sobre o mapa dinâmico
    recreateLocateButton(mapElement);

  } catch (error) {
    console.error("Erro ao carregar o Google Maps:", error);
    showToast("Não foi possível carregar o mapa dinâmico.");
  }
}
```

---

### Passo 4.5: Sincronização Bidirecional (Pins & Cards)

```javascript
function selectPlace(placeId, scrollCard = true) {
  // Atualiza seleção visual dos pins
  mapMarkers.forEach(({ element }, id) => {
    element.classList.toggle("selected", id === placeId);
  });

  // Atualiza seleção dos cards
  cards.forEach(card => {
    const isTarget = card.dataset.id === placeId;
    card.classList.toggle("is-selected", isTarget);
    if (isTarget && scrollCard) {
      card.hidden = false;
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      const place = PLACES_DATA.find(p => p.id === placeId);
      if (place) {
        showToast(`${place.name} selecionada`);
        if (mapInstance) {
          mapInstance.panTo(place.coords);
          mapInstance.setZoom(16);
        }
      }
    }
  });
}
```

---

### Passo 4.6: Botão "Centralizar na minha localização" (Geolocation API)

Integrar a API nativa de geolocalização do navegador com o mapa do Google:

```javascript
function locateUser() {
  if (!navigator.geolocation) {
    showToast("Geolocalização não suportada no seu navegador.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (mapInstance) {
        mapInstance.panTo(userPos);
        mapInstance.setZoom(16);

        // Marcador da posição do usuário (ponto pulsante)
        if (!userMarker) {
          const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
          const userDot = document.createElement("div");
          userDot.className = "you-are-here-marker";
          userDot.innerHTML = "<span></span>";

          userMarker = new AdvancedMarkerElement({
            map: mapInstance,
            position: userPos,
            title: "Sua localização",
            content: userDot
          });
        } else {
          userMarker.position = userPos;
        }

        showToast("Mapa centralizado na sua localização!");
      }
    },
    (err) => {
      console.warn("Erro ao obter localização:", err);
      showToast("Não foi possível obter sua localização exata.");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}
```

---

## 5. Adaptações de Estilo (`styles.css`)

Garantir que o container `#map` possua altura explícita (para evitar colapso do mapa) e que os marcadores customizados funcionem perfeitamente dentro do canvas do Google Maps:

```css
/* Altura explícita para o container do Google Maps */
.map {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

/* Marcadores avançados dentro do Google Maps */
.map-pin {
  border: none;
  cursor: pointer;
  transform: translate(0, 0);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.map-pin:hover,
.map-pin.selected {
  transform: scale(1.18);
  z-index: 100;
}
```

---

## 6. Vantagens Desta Abordagem
1. **Zero Dependência de Backend:** Funciona 100% no navegador e pode ser hospedado gratuitamente no GitHub Pages, Vercel, Netlify ou qualquer servidor web simples.
2. **Manutenção do Design:** Não perde a identidade visual da aplicação; os marcadores continuam lúdicos e perfeitamente integrados com a paleta do vetPerto.
3. **Fallback Elegante:** Se a chave de API não for configurada de imediato, a interface pode continuar exibindo o mapa ilustrado atual sem quebrar a navegação.
