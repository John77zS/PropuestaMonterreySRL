"use strict";

/* =========================================================
   INFORMACIÓN DE LAS SUCURSALES
   ========================================================= */

const BRANCHES = [
  {
    id: "central",
    n: "C",
    name: "Oficina Central",
    city: "Santa Cruz",
    address:
      "3er. anillo interno, N.º 3130, entre Av. Mutualista y Paraguá.",
    phone: "347 1960 / 347 1028",
    wa: "59171000045",
    position: {
        lat: -17.767374, 
        lng:-63.158687
    },
    search:
      "3er anillo interno 3130 entre Avenida Mutualista y Avenida Paraguá, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s1",
    n: "01",
    name: "Sucursal 1",
    city: "Santa Cruz",
    address:
      "4to. anillo, esquina Mutualista y Parque Industrial.",
    phone: "346 9200 / 346 9292",
    wa: "59172129378",
    position: {
        lat: -17.757409239154036, 
        lng: -63.153883794600304
    },
    search:
      "4to anillo esquina Avenida Mutualista y Parque Industrial, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s2",
    n: "02",
    name: "Sucursal 2",
    city: "Santa Cruz",
    address:
      "4to. anillo entre Paraguá y Mutualista.",
    phone: "364 2070 / 364 2071",
    wa: "59172129384",
    position: {
        lat: -17.760548964809182, 
        lng:-63.15098740079532
    },
    search:
      "4to anillo entre Avenida Paraguá y Avenida Mutualista, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s3",
    n: "03",
    name: "Sucursal 3",
    city: "El Alto",
    address:
      "Av. Juan Pablo II, N.º 10, casi puente Río Seco.",
    phone: "286 0363",
    wa: "59171554263",
    position: {
        lat: -16.49110923615096, 
        lng:-68.20166605107427
    },
    search:
      "Avenida Juan Pablo II 10 casi puente Río Seco, El Alto, Bolivia"
  },
  {
    id: "s4",
    n: "04",
    name: "Sucursal 4",
    city: "Santa Cruz",
    address:
      "Av. Grigotá, entre 4to. y 5to. anillo.",
    phone: "353 0726",
    wa: "59172129385",
    position: {
        lat: -17.813484950847702, 
        lng: -63.21040296946277
    },
    search:
      "Avenida Grigotá entre 4to y 5to anillo, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s5",
    n: "05",
    name: "Sucursal 5",
    city: "Santa Cruz",
    address:
      "4to. anillo, diagonal Radial 17 ½, acera Urbanización Las Palmas.",
    phone: "355 5696",
    wa: "59167708222",
    position: {
        lat: -17.806816173113003, 
        lng: -63.21169569711998
    },
    search:
      "4to anillo diagonal Radial 17 1/2 Urbanización Las Palmas, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s6",
    n: "06",
    name: "Sucursal 6",
    city: "Santa Cruz",
    address:
      "Av. Virgen de Cotoca Km. 4 ½, zona Pampa de la Isla.",
    phone: "370 0290 / 323 0433",
    wa: "59172129390",
    position: {
        lat: -17.767361410218225, 
        lng:-63.11229143588007
    },
    search:
      "Avenida Virgen de Cotoca km 4.5 Pampa de la Isla, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s7",
    n: "07",
    name: "Sucursal 7",
    city: "Santa Cruz",
    address:
      "Av. Virgen de Cotoca, entre 4to. y 5to. anillo.",
    phone: "364 8136 / 364 8137",
    wa: "59167710988",
    position: {
        lat: -17.77655099923561, 
        lng: -63.139971464030616
    },
    search:
      "Avenida Virgen de Cotoca entre 4to y 5to anillo, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s8",
    n: "08",
    name: "Sucursal 8",
    city: "Santa Cruz",
    address:
      "4to. anillo esquina Radial 17 ½.",
    phone: "354 8915 / 354 8916",
    wa: "59172196986",
    position: {
        lat: -17.806324086987406, 
        lng: -63.212723018043995
    },
    search:
      "4to anillo esquina Radial 17 1/2, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s9",
    n: "09",
    name: "Sucursal 9",
    city: "Montero",
    address:
      "Av. Circunvalación y Alameda Warnes.",
    phone: "922 6288",
    wa: "59171093778",
    position: {
        lat: -17.351530796660015, 
        lng:-63.25000097715757
    },
    search:
      "Avenida Circunvalación y Alameda Warnes, Montero, Santa Cruz, Bolivia"
  },
  {
    id: "s10",
    n: "10",
    name: "Sucursal 10",
    city: "Santa Cruz",
    address:
      "5to. anillo, a una cuadra de Av. Radial 17 ½.",
    phone: "352 7101 / 355 3340",
    wa: "59172129386",
    position: {
        lat: -17.811089894474794, 
        lng: -63.22079686562115
    },
    search:
      "5to anillo a una cuadra de Avenida Radial 17 1/2, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s11",
    n: "11",
    name: "Sucursal 11",
    city: "Trinidad",
    address:
      "Av. Panamericana, frente al Convento Eparu.",
    phone: "463 1566",
    wa: "59172100949",
    position: {
        lat: -14.825327096651165, 
        lng: -64.87076314816017
    },
    search:
      "Avenida Panamericana frente al Convento Eparu, Trinidad, Beni, Bolivia"
  },
  {
    id: "s12",
    n: "12",
    name: "Sucursal 12",
    city: "Warnes",
    address:
      "Carretera al Norte, pasando una cuadra del ingreso a Satélite Norte.",
    phone: "921 9075",
    wa: "59172100313",
    position: {
        lat: -17.605171569327837, 
        lng:-63.15852005485933
    },
    search:
      "Carretera al Norte una cuadra después del ingreso a Satélite Norte, Warnes, Santa Cruz, Bolivia"
  },
  {
    id: "s15",
    n: "15",
    name: "Sucursal 15",
    city: "La Paz",
    address:
      "Av. Ballivián, esquina calle 24 de calacoto",
    phone: " 71554262",
    wa: "59172100313",
    position: {
        lat: -16.53888858948752, 
        lng:-68.07454572418746
    },
    search:
      "Av. Ballivián, esquina calle 24 de calacoto"
  },
  {
    id: "s16",
    n: "16",
    name: "Sucursal 16",
    city: "Santa Cruz",
    address:
      "Av. Santos Dumont, entre 5to. y 6to. anillo.",
    phone: "358 0055",
    wa: "59172100828",
    position: {
        lat: -17.835950141925938, 
        lng:-63.183248811357664
    },
    search:
      "Avenida Santos Dumont entre 5to y 6to anillo, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s17",
    n: "17",
    name: "Sucursal 17",
    city: "Sucre",
    address:
      "Calle Inca Garcilazo, entre José Aguirre y Av. Emilio Mendizábal N.º 121.",
    phone: "646 9393",
    wa: "59172100880",
    position: {
        lat: -19.037697985504135, 
        lng:-65.24327689760125
    },
    search:
      "Calle Inca Garcilazo 121 entre José Aguirre y Avenida Emilio Mendizábal, Sucre, Bolivia"
  },
  {
    id: "s18",
    n: "18",
    name: "Sucursal 18",
    city: "El Alto",
    address:
      "Zona FAB, calle Rioja N.º 1044, a una cuadra de Av. Juan Pablo II.",
    phone: "286 0363",
    wa: "59172100638",
    position: {
        lat: -16.49793589988199, 
        lng: -68.18904090190335
    },
    search:
      "Calle Rioja 1044 zona FAB, El Alto, Bolivia"
  },
  {
    id: "s19",
    n: "19",
    name: "Sucursal 19",
    city: "Potosí",
    address:
      "Av. Las Banderas esquina 17 de Agosto, zona Villa Fátima.",
    phone: "624 2481",
    wa: "59172406004",
    position: {
        lat: -19.571365907523482, 
        lng: -65.75196090211381
    },
    search:
      "Avenida Las Banderas esquina 17 de Agosto Villa Fátima, Potosí, Bolivia"
  },
  {
    id: "s20",
    n: "20",
    name: "Sucursal 20",
    city: "Tarija",
    address:
      "Av. Panamericana y Héroes del Chaco, zona Morros Blancos.",
    phone: "665 9080 / 718 60016",
    wa: "59171860016",
    position: {
        lat: -21.54681047273143, 
        lng: -64.69881145354543
    },
    search:
      "Avenida Panamericana y Héroes del Chaco Morros Blancos, Tarija, Bolivia"
  },
  {
    id: "s21",
    n: "21",
    name: "Sucursal 21",
    city: "Santa Cruz",
    address:
      "Av. Paurito S/N, zona Plan 3.000, al lado de Hipermaxi.",
    phone: "",
    wa: "59172100319",
    position: {
        lat: -17.83450714280161, 
        lng: -63.1323122800882
    },
    search:
      "Avenida Paurito Plan 3000 al lado de Hipermaxi, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s31",
    n: "31",
    name: "Sucursal 31",
    city: "Santa Cruz",
    address:
      "8vo. anillo, entre Av. Doble Vía La Guardia y Av. Mariscal Santa Cruz.",
    phone: "",
    wa: "59172100318",
    position: {
        lat: -17.843536013504632, 
        lng:-63.23116923311877
    },
    search:
      "8vo anillo entre Avenida Doble Vía La Guardia y Avenida Mariscal Santa Cruz, Santa Cruz de la Sierra, Bolivia"
  },
  {
    id: "s32",
    n: "32",
    name: "Sucursal 32",
    city: "Santa Cruz",
    address:
      "Carretera a Cotoca, Guapilo.",
    phone: "",
    wa: "59172100318",
    position: {
        lat: -17.783213172839428, 
        lng: -63.08464015309929
    },
    search:
      "Carretera a Cotoca, Guapilo, Santa Cruz de la Sierra, Bolivia"
  }
];


/* =========================================================
   FUNCIONES PARA ENCONTRAR ELEMENTOS HTML
   ========================================================= */

const $ = (id) => document.getElementById(id);

/*
  Esta función evita que toda la página se detenga
  cuando accidentalmente falta un elemento HTML.
*/
function addPageEvent(id, eventName, callback) {
  const element = $(id);

  if (!element) {
    console.warn(`No se encontró el elemento #${id}`);
    return;
  }

  element.addEventListener(eventName, callback);
}

/*
  Se usa para aplicar un comportamiento diferente
  únicamente en celulares y tablets pequeñas.
*/
function isMobileBranchesView() {
  return window.matchMedia(
    "(max-width: 800px)"
  ).matches;
}


/* =========================================================
   ESTADO DEL MAPA
   ========================================================= */

const state = {
  map: null,

  Route: null,
  Geocoder: null,

  Marker: null,
  Pin: null,
  Bounds: null,

  markers: new Map(),
  polylines: [],

  user: null,
  userMarker: null,

  selected: null,
  visible: [...BRANCHES]
};


/* =========================================================
   INICIAR GOOGLE MAPS
   ========================================================= */

window.initBranchesMap = async function () {
  bindEvents();
  fillCities();
  renderList();

  try {
    const [
      mapsLibrary,
      markerLibrary,
      geocodingLibrary,
      routesLibrary
    ] = await Promise.all([
      google.maps.importLibrary("maps"),
      google.maps.importLibrary("marker"),
      google.maps.importLibrary("geocoding"),
      google.maps.importLibrary("routes")
    ]);

    state.Route = routesLibrary.Route;
    state.Geocoder = new geocodingLibrary.Geocoder();

    state.Marker =
      markerLibrary.AdvancedMarkerElement;

    state.Pin =
      markerLibrary.PinElement;

    state.Bounds =
      google.maps.LatLngBounds;

    const mapContainer = $("branchesMap");

    if (!mapContainer) {
      throw new Error(
        "No existe el elemento #branchesMap en sucursales.html."
      );
    }

    state.map = new mapsLibrary.Map(
      mapContainer,
      {
        center: {
          lat: -16.7,
          lng: -64.7
        },

        zoom: 6,

        /*
          Puedes utilizar DEMO_MAP_ID durante las pruebas.
        */
        mapId: "DEMO_MAP_ID",

        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy"
      }
    );

    const loading = $("mapLoading");

if (loading) {
  loading.hidden = true;
  loading.style.display = "none";
}

    message(
      "Ubicando las sucursales en el mapa…"
    );

    await geocodeBranches();

    applyFilters();
    fitBranches();

    message(
      "Mapa de sucursales listo.",
      "success"
    );
  } catch (error) {
    console.error(
      "Error al iniciar Google Maps:",
      error
    );

    const loading = $("mapLoading");

    if (loading) {
      loading.innerHTML = `
        <strong>No se pudo cargar el mapa</strong>

        <p>
          Revisa tu clave de Google Maps,
          la facturación y las APIs habilitadas.
        </p>
      `;
    }

    message(
      "No se pudo iniciar Google Maps.",
      "error"
    );
  }
};


/* =========================================================
   EVENTOS DE LA PÁGINA
   ========================================================= */

function bindEvents() {
  addPageEvent(
    "branchSearch",
    "input",
    applyFilters
  );

  addPageEvent(
    "branchCity",
    "change",
    applyFilters
  );

  addPageEvent(
    "travelMode",
    "change",
    () => {
      if (state.selected && state.user) {
        drawRoute(state.selected);
      }
    }
  );

  /*
    Este es el único botón de ubicación utilizado.
  */
  addPageEvent(
    "useLocationButton",
    "click",
    locateUser
  );

  addPageEvent(
    "nearestBranchButton",
    "click",
    nearestBranch
  );

  addPageEvent(
    "recenterMapButton",
    "click",
    fitBranches
  );

  addPageEvent(
    "clearRouteButton",
    "click",
    clearRoute
  );

  addPageEvent(
    "changeBranchButton",
    "click",
    clearRoute
  );

  addPageEvent(
    "branchesList",
    "click",
    (event) => {
      const showAllButton =
        event.target.closest("[data-show-all]");

      if (showAllButton) {
        clearRoute();
        return;
      }

      const link =
        event.target.closest("a");

      /*
        Evita que el clic sobre WhatsApp
        también seleccione la tarjeta.
      */
      if (link) {
        return;
      }

      const routeButton =
        event.target.closest("[data-route]");

      if (routeButton) {
        drawRoute(
          routeButton.dataset.route
        );

        return;
      }

      const card =
        event.target.closest("[data-branch]");

      if (card) {
        selectBranch(
          card.dataset.branch,
          "card"
        );
      }
    }
  );

  /*
    Al cambiar el tamaño de la ventana se vuelve a
    construir el listado para pasar correctamente
    entre la vista móvil y la vista de escritorio.
  */
  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(
        renderList,
        120
      );
    }
  );
}


/* =========================================================
   CREAR FILTRO DE CIUDADES
   ========================================================= */

function fillCities() {
  const citySelect =
    $("branchCity");

  if (!citySelect) {
    return;
  }

  const cities = [
    ...new Set(
      BRANCHES.map(
        (branch) => branch.city
      )
    )
  ].sort();

  cities.forEach((city) => {
    const option =
      document.createElement("option");

    option.value = city;
    option.textContent = city;

    citySelect.appendChild(option);
  });
}


/* =========================================================
   CONVERTIR DIRECCIONES EN COORDENADAS
   ========================================================= */

async function geocodeBranches() {
  for (const branch of BRANCHES) {
    if (
      branch.position &&
      Number.isFinite(branch.position.lat) &&
      Number.isFinite(branch.position.lng)
    ) {
      branch.geocoded = true;
      addBranchMarker(branch);
      renderList();
      continue;
    }
    try {
      const { results } =
        await state.Geocoder.geocode({
          address: branch.search,
          region: "BO"
        });
      branch.position =
        results[0]
          ?.geometry
          ?.location
          ?.toJSON() || null;
      branch.geocoded = true;
      if (branch.position) {
        addBranchMarker(branch);
      }
    } catch (error) {
      branch.position = null;
      branch.geocoded = true;
      console.warn(
        `No se pudo ubicar ${branch.name}:`,
        error
      );
    }
    renderList();
    await wait(150);
  }
}


/* =========================================================
   CREAR MARCADOR DE SUCURSAL
   ========================================================= */

function addBranchMarker(branch) {
  const pin = new state.Pin({
    background: "#e30613",
    borderColor: "#ffffff",
    glyphColor: "#ffffff",
    glyphText: branch.n,
    scale: 1.05
  });

  const marker = new state.Marker({
    map: state.map,
    position: branch.position,
    title: branch.name,
    gmpClickable: true
  });

  /*
    PinElement actualmente es un elemento HTML,
    por eso se inserta dentro del marcador.
  */
  marker.append(pin);

  /*
    addListener con "click" funciona con
    AdvancedMarkerElement.
  */
  marker.addListener(
    "click",
    () => selectBranch(branch.id, "marker")
  );

  state.markers.set(
    branch.id,
    marker
  );
}


/* =========================================================
   BUSCAR Y FILTRAR SUCURSALES
   ========================================================= */

function applyFilters() {
  const searchInput =
    $("branchSearch");

  const citySelect =
    $("branchCity");

  const text = normalize(
    searchInput?.value || ""
  );

  const city =
    citySelect?.value || "all";

  state.visible =
    BRANCHES.filter((branch) => {
      const matchesCity =
        city === "all" ||
        branch.city === city;

      const searchableContent =
        normalize(`
          ${branch.name}
          ${branch.city}
          ${branch.address}
        `);

      return (
        matchesCity &&
        searchableContent.includes(text)
      );
    });

  const visibleIds =
    new Set(
      state.visible.map(
        (branch) => branch.id
      )
    );

  state.markers.forEach(
    (marker, branchId) => {
      marker.map =
        visibleIds.has(branchId)
          ? state.map
          : null;
    }
  );

  renderList();
}


/* =========================================================
   CREAR TARJETAS DE SUCURSALES
   ========================================================= */

function renderList() {
  const list =
    $("branchesList");

  const count =
    $("branchesCount");

  if (!list) {
    return;
  }

  const mobileSelection =
    isMobileBranchesView() &&
    Boolean(state.selected);

  const selectedBranch =
    mobileSelection
      ? BRANCHES.find(
          (branch) =>
            branch.id === state.selected
        )
      : null;

  /*
    En celular, cuando se selecciona un pin,
    solamente se muestra la tarjeta elegida.
    En escritorio se mantiene el listado completo.
  */
  const branchesToRender =
    selectedBranch
      ? [selectedBranch]
      : state.visible;

  const quantity =
    branchesToRender.length;

  const layout =
    list.closest(
      ".branches-map-layout"
    );

  layout?.classList.toggle(
    "has-mobile-selection",
    Boolean(selectedBranch)
  );

  if (count) {
    count.textContent =
      selectedBranch
        ? "Sucursal seleccionada"
        : `${quantity} ${
            quantity === 1
              ? "sucursal"
              : "sucursales"
          }`;
  }

  if (!quantity) {
    list.innerHTML = `
      <div class="branches-list-placeholder">
        <span>⌕</span>

        <p>
          No se encontraron sucursales.
        </p>
      </div>
    `;

    return;
  }

  const cardsHtml =
    branchesToRender.map((branch) => {
      let buttonText =
        "Ubicando…";

      let buttonDisabled =
        "disabled";

      if (branch.position) {
        buttonText =
          "Marcar ruta";

        buttonDisabled =
          "";
      } else if (branch.geocoded) {
        buttonText =
          "Ubicación no disponible";
      }

      return `
        <article
          class="branch-card${
            state.selected === branch.id
              ? " is-active"
              : ""
          }"
          data-branch="${branch.id}"
        >

          <div class="branch-card-top">

            <div>
              <span class="branch-card-city">
                ${branch.city}
              </span>

              <h3>
                ${branch.name}
              </h3>
            </div>

            <span class="branch-card-number">
              ${branch.n}
            </span>

          </div>

          <p class="branch-card-address">
            ${branch.address}
          </p>

          <div class="branch-card-data">

            ${
              branch.phone
                ? `
                  <span>
                    Tel. ${branch.phone}
                  </span>
                `
                : ""
            }

            <a
              href="https://wa.me/${branch.wa}"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>

          </div>

          <button
            class="branch-card-route"
            type="button"
            data-route="${branch.id}"
            ${buttonDisabled}
          >
            ${buttonText}
            <span>→</span>
          </button>

        </article>
      `;
    }).join("");

  const showAllButton =
    selectedBranch
      ? `
        <button
          type="button"
          class="branches-show-all"
          data-show-all
        >
          <span>←</span>
          Ver todas las sucursales
        </button>
      `
      : "";

  list.innerHTML =
    cardsHtml + showAllButton;
}


/* =========================================================
   SELECCIONAR SUCURSAL
   ========================================================= */

function selectBranch(
  id,
  source = "unknown"
) {
  const branch =
    BRANCHES.find(
      (item) => item.id === id
    );

  if (!branch?.position) {
    message(
      "Esta sucursal todavía no tiene una ubicación válida.",
      "error"
    );

    return;
  }

  state.selected = id;

  renderList();

  state.map.panTo(
    branch.position
  );

  state.map.setZoom(15);

  /*
    En celular no se desplaza la página hacia la tarjeta.
    Así, al tocar un pin, el mapa permanece visible.

    Cuando la selección se hace desde una tarjeta,
    sí se vuelve suavemente al mapa.
  */
  if (isMobileBranchesView()) {
    if (source === "card") {
      const mapWrapper =
        document.querySelector(
          ".branches-map-wrapper"
        );

      mapWrapper?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    return;
  }

  const activeCard =
    document.querySelector(
      `[data-branch="${id}"]`
    );

  activeCard?.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}


/* =========================================================
   OBTENER UBICACIÓN DEL USUARIO
   ========================================================= */

function locateUser() {
  if (!navigator.geolocation) {
    message(
      "Tu navegador no admite geolocalización.",
      "error"
    );

    return;
  }

  const locationButton =
    $("useLocationButton");

  setLocationStatus(
    "Solicitando tu ubicación…"
  );

  if (locationButton) {
    locationButton.disabled = true;
    locationButton.textContent =
      "Buscando ubicación…";
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      state.user = {
        lat: coords.latitude,
        lng: coords.longitude
      };

      addUserMarker();

      state.map.panTo(
        state.user
      );

      state.map.setZoom(14);

      const nearestButton =
        $("nearestBranchButton");

      if (nearestButton) {
        nearestButton.disabled = false;
      }

      setLocationStatus(
        "Tu ubicación está activa.",
        "active"
      );

      message(
        "Ubicación obtenida. Ahora elige una sucursal.",
        "success"
      );

      restoreLocationButton();
    },

    (error) => {
      const messages = {
        1:
          "No autorizaste el acceso a tu ubicación.",

        2:
          "No se pudo determinar tu ubicación.",

        3:
          "La solicitud de ubicación tardó demasiado."
      };

      const errorMessage =
        messages[error.code] ||
        "No se pudo obtener tu ubicación.";

      setLocationStatus(
        errorMessage,
        "error"
      );

      message(
        errorMessage,
        "error"
      );

      restoreLocationButton();
    },

    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 60000
    }
  );
}


function restoreLocationButton() {
  const locationButton =
    $("useLocationButton");

  if (!locationButton) {
    return;
  }

  locationButton.disabled = false;

  locationButton.innerHTML = `
    <span aria-hidden="true">⌖</span>
    Usar mi ubicación
  `;
}


/* =========================================================
   MARCADOR DE LA PERSONA
   ========================================================= */

function addUserMarker() {
  if (state.userMarker) {
    state.userMarker.position =
      state.user;

    state.userMarker.map =
      state.map;

    return;
  }

  const pin = new state.Pin({
    background: "#111113",
    borderColor: "#ffffff",
    glyphColor: "#ffffff",
    glyphText: "Tú",
    scale: 1.15
  });

  state.userMarker =
    new state.Marker({
      map: state.map,
      position: state.user,
      title: "Tu ubicación",
      zIndex: 1000
    });

  state.userMarker.append(pin);
}


/* =========================================================
   CALCULAR Y DIBUJAR RUTA
   ========================================================= */

async function drawRoute(id) {
  const branch =
    BRANCHES.find(
      (item) => item.id === id
    );

  if (!branch?.position) {
    message(
      "La sucursal no tiene una ubicación válida.",
      "error"
    );

    return;
  }

  if (!state.user) {
    message(
      "Primero presiona “Usar mi ubicación”."
    );

    locateUser();

    return;
  }

  state.selected = id;

  renderList();
  clearPolylines();

  message(
    `Calculando ruta hacia ${branch.name}…`
  );

  try {
    const mode =
      $("travelMode")?.value ||
      "DRIVING";

    const request = {
      origin: state.user,
      destination: branch.position,
      travelMode: mode,

      fields: [
        "path",
        "distanceMeters",
        "durationMillis"
      ],

      language: "es-419",
      region: "BO",
      units: "METRIC"
    };

    if (mode === "DRIVING") {
      request.routingPreference =
        "TRAFFIC_AWARE";
    }

    const { routes } =
      await state.Route.computeRoutes(
        request
      );

    const route =
      routes?.[0];

    if (!route) {
      throw new Error(
        "Google Maps no encontró una ruta."
      );
    }

    state.polylines =
      route.createPolylines({
        polylineOptions: {
          strokeColor: "#e30613",
          strokeOpacity: 0.95,
          strokeWeight: 6
        }
      });

    state.polylines.forEach(
      (polyline) => {
        polyline.setMap(
          state.map
        );
      }
    );

    fitPath(
      route.path
    );

    showRoute(
      branch,
      route.distanceMeters,
      route.durationMillis
    );

    message(
      "Ruta preparada correctamente.",
      "success"
    );
  } catch (error) {
    console.error(
      "Error al calcular la ruta:",
      error
    );

    /*
      Aunque no se pueda dibujar dentro del mapa,
      el usuario podrá abrir el recorrido en Google Maps.
    */
    showRoute(
      branch,
      0,
      0
    );

    message(
      "No se pudo dibujar la ruta, pero puedes abrirla en Google Maps.",
      "error"
    );
  }
}


/* =========================================================
   MOSTRAR INFORMACIÓN DE LA RUTA
   ========================================================= */

function showRoute(
  branch,
  meters,
  milliseconds
) {
  const branchName =
    $("routeBranchName");

  const distance =
    $("routeDistance");

  const duration =
    $("routeDuration");

  const navigationButton =
    $("openGoogleMapsButton");

  const routePanel =
    $("routePanel");

  if (branchName) {
    branchName.textContent =
      branch.name;
  }

  if (distance) {
    distance.textContent =
      meters
        ? distanceText(meters)
        : "Consultar";
  }

  if (duration) {
    duration.textContent =
      milliseconds
        ? durationText(milliseconds)
        : "Consultar";
  }

  const selectedMode =
    $("travelMode")?.value ||
    "DRIVING";

  const googleTravelMode =
    selectedMode.toLowerCase();

  if (navigationButton) {
    navigationButton.href =
      "https://www.google.com/maps/dir/" +
      "?api=1" +
      `&origin=${state.user.lat},${state.user.lng}` +
      `&destination=${branch.position.lat},${branch.position.lng}` +
      `&travelmode=${googleTravelMode}`;
  }

  if (routePanel) {
    routePanel.hidden = false;
  }
}


/* =========================================================
   BORRAR RUTA
   ========================================================= */

function clearRoute() {
  clearPolylines();

  state.selected = null;

  const routePanel =
    $("routePanel");

  if (routePanel) {
    routePanel.hidden = true;
  }

  renderList();
  fitBranches();
}


function clearPolylines() {
  state.polylines.forEach(
    (polyline) => {
      polyline.setMap(null);
    }
  );

  state.polylines = [];
}


/* =========================================================
   CENTRAR MAPA EN LAS SUCURSALES
   ========================================================= */

function fitBranches() {
  if (
    !state.map ||
    !state.Bounds
  ) {
    return;
  }

  const locatedBranches =
    state.visible.filter(
      (branch) => branch.position
    );

  if (!locatedBranches.length) {
    return;
  }

  const bounds =
    new state.Bounds();

  locatedBranches.forEach(
    (branch) => {
      bounds.extend(
        branch.position
      );
    }
  );

  if (state.user) {
    bounds.extend(
      state.user
    );
  }

  state.map.fitBounds(
    bounds,
    55
  );
}


/* =========================================================
   CENTRAR MAPA EN LA RUTA
   ========================================================= */

function fitPath(path) {
  if (
    !Array.isArray(path) ||
    !path.length
  ) {
    return;
  }

  const bounds =
    new state.Bounds();

  path.forEach((point) => {
    /*
      Permite trabajar tanto con propiedades
      como con métodos lat() y lng().
    */
    const latitude =
      typeof point.lat === "function"
        ? point.lat()
        : point.lat;

    const longitude =
      typeof point.lng === "function"
        ? point.lng()
        : point.lng;

    if (
      Number.isFinite(latitude) &&
      Number.isFinite(longitude)
    ) {
      bounds.extend({
        lat: latitude,
        lng: longitude
      });
    }
  });

  state.map.fitBounds(
    bounds,
    70
  );
}


/* =========================================================
   ENCONTRAR SUCURSAL MÁS CERCANA
   ========================================================= */

function nearestBranch() {
  if (!state.user) {
    message(
      "Primero activa tu ubicación."
    );

    locateUser();

    return;
  }

  const locatedBranches =
    BRANCHES.filter(
      (branch) => branch.position
    );

  const nearest =
    locatedBranches.reduce(
      (bestResult, branch) => {
        const distance =
          haversine(
            state.user,
            branch.position
          );

        if (
          !bestResult ||
          distance < bestResult.distance
        ) {
          return {
            branch,
            distance
          };
        }

        return bestResult;
      },

      null
    );

  if (nearest) {
    drawRoute(
      nearest.branch.id
    );
  }
}


/* =========================================================
   ESTADO DE LA UBICACIÓN
   ========================================================= */

function setLocationStatus(
  text,
  type = ""
) {
  const status =
    $("locationStatus");

  const dot =
    $("locationStatusDot");

  if (status) {
    status.textContent = text;
  }

  if (!dot) {
    return;
  }

  dot.className =
    "branches-status-dot";

  if (type === "active") {
    dot.classList.add(
      "is-active"
    );
  }

  if (type === "error") {
    dot.classList.add(
      "is-error"
    );
  }
}


/* =========================================================
   MENSAJES
   ========================================================= */

function message(
  text,
  type = ""
) {
  const box =
    $("branchesMessage");

  if (!box) {
    console.log(text);
    return;
  }

  box.hidden = false;
  box.textContent = text;
  box.className =
    "branches-message";

  if (type === "success") {
    box.classList.add(
      "is-success"
    );
  }

  if (type === "error") {
    box.classList.add(
      "is-error"
    );
  }
}


/* =========================================================
   FORMATO DE DISTANCIA Y DURACIÓN
   ========================================================= */

function distanceText(meters) {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  }

  const kilometers =
    meters / 1000;

  return `${
    kilometers.toFixed(
      kilometers < 10 ? 1 : 0
    )
  } km`;
}


function durationText(milliseconds) {
  const totalMinutes =
    Math.max(
      1,
      Math.round(
        milliseconds / 60000
      )
    );

  const hours =
    Math.floor(
      totalMinutes / 60
    );

  const minutes =
    totalMinutes % 60;

  if (hours) {
    return `${hours} h${
      minutes
        ? ` ${minutes} min`
        : ""
    }`;
  }

  return `${totalMinutes} min`;
}


/* =========================================================
   FUNCIONES AUXILIARES
   ========================================================= */

function normalize(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .trim();
}


function wait(milliseconds) {
  return new Promise(
    (resolve) => {
      setTimeout(
        resolve,
        milliseconds
      );
    }
  );
}


/*
  Distancia aproximada en línea recta.
  Se utiliza para identificar la sucursal más cercana.
*/

function haversine(
  pointA,
  pointB
) {
  const earthRadius =
    6371;

  const radians =
    (value) =>
      value * Math.PI / 180;

  const latitudeDifference =
    radians(
      pointB.lat -
      pointA.lat
    );

  const longitudeDifference =
    radians(
      pointB.lng -
      pointA.lng
    );

  const calculation =
    Math.sin(
      latitudeDifference / 2
    ) ** 2

    +

    Math.cos(
      radians(pointA.lat)
    )

    *

    Math.cos(
      radians(pointB.lat)
    )

    *

    Math.sin(
      longitudeDifference / 2
    ) ** 2;

  return (
    2 *
    earthRadius *
    Math.asin(
      Math.sqrt(calculation)
    )
  );
}
