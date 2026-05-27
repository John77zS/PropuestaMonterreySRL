const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* HEADER */
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* MENÚ MOBILE */
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

/* ANIMACIÓN AL APARECER */
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* GALERÍA */
const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".gallery-card");
const defaultCategory = "eventos";

function filterGallery(category) {
  galleryCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");

    if (cardCategory === category) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

if (filterButtons.length > 0 && galleryCards.length > 0) {
  filterGallery(defaultCategory);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");
      filterGallery(filterValue);
    });
  });
}

/* TESTIMONIOS */
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll("#testimonialDots button");
const testimonialPrev = document.getElementById("testimonialPrev");
const testimonialNext = document.getElementById("testimonialNext");

let testimonialIndex = 0;

function showTestimonial(index) {
  if (testimonialCards.length === 0 || testimonialDots.length === 0) return;

  testimonialCards.forEach((card) => {
    card.classList.remove("active");
  });

  testimonialDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  testimonialCards[index].classList.add("active");
  testimonialDots[index].classList.add("active");
}

if (testimonialCards.length > 0 && testimonialDots.length > 0) {
  if (testimonialNext) {
    testimonialNext.addEventListener("click", () => {
      testimonialIndex++;

      if (testimonialIndex >= testimonialCards.length) {
        testimonialIndex = 0;
      }

      showTestimonial(testimonialIndex);
    });
  }

  if (testimonialPrev) {
    testimonialPrev.addEventListener("click", () => {
      testimonialIndex--;

      if (testimonialIndex < 0) {
        testimonialIndex = testimonialCards.length - 1;
      }

      showTestimonial(testimonialIndex);
    });
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      testimonialIndex = index;
      showTestimonial(testimonialIndex);
    });
  });

  setInterval(() => {
    testimonialIndex++;

    if (testimonialIndex >= testimonialCards.length) {
      testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);
  }, 5000);
}

/* FORMULARIO */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !interest || !message) {
      formMessage.textContent = "Por favor completa los campos obligatorios.";
      return;
    }

    formMessage.textContent = "Consulta lista. Puedes conectar este formulario a WhatsApp, correo o backend.";
    contactForm.reset();
  });
}

/* HERO TIPO KOJIRO */
if (window.gsap && window.ScrollTrigger && document.querySelector(".kojiro-hero")) {
  gsap.registerPlugin(ScrollTrigger);

  const kojiroLines = gsap.utils.toArray(".kojiro-line");

  gsap.to(".kojiro-main-logo", {
    opacity: 1,
    scale: 1,
    duration: 0.2,
    ease: "power4.out",
    delay: 0.25,
  });

 gsap.to(".kojiro-carousel", {
  scale: 1,
  duration: 2.2,
  ease: "power4.out"
});

  const kojiroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".kojiro-hero",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });


  /* Logo permanece muy poco */
kojiroTimeline.to(".kojiro-main-logo", {
  opacity: 1,
  duration: 0.1
});

/* Prepara las líneas desde antes */
kojiroTimeline.set(".kojiro-lines-stage", {
  opacity: 1
});

kojiroTimeline.set(".kojiro-lines-list", {
  y: () => window.innerHeight * 0.42
});

kojiroTimeline.set(".kojiro-line", {
  opacity: 0,
  filter: "blur(18px)",
  scale: 0.96
});

/* Logo empieza a desaparecer */
kojiroTimeline.to(".kojiro-main-logo", {
  scale: 0.78,
  opacity: 0,
  y: -90,
  filter: "blur(16px)",
  duration: 1.4,
  ease: "power3.inOut"
});

/* Indicador desaparece junto con el logo */
kojiroTimeline.to(".kojiro-scroll", {
  opacity: 0,
  filter: "blur(8px)",
  duration: 0.8,
  ease: "power3.inOut"
}, "<");

/* Fondo / video se difumina junto con el logo */
kojiroTimeline.to(".kojiro-carousel", {
  scale: 1.12,
  filter: "blur(3px)",
  duration: 1.4,
  ease: "power3.inOut"
}, "<");

/* Las letras empiezan ANTES de que el logo desaparezca por completo */
kojiroTimeline.to(".kojiro-lines-list", {
  y: () => {
    const list = document.querySelector(".kojiro-lines-list");
    return -list.offsetHeight - window.innerHeight * 0.28;
  },
  duration: 4.8,
  ease: "none",
  onStart: updateKojiroLineBlur,
  onUpdate: updateKojiroLineBlur
}, "-=0.95");

  kojiroTimeline.to(".kojiro-lines-stage", {
    opacity: 0,
    duration: 0.7,
    ease: "power3.in",
  });

  function updateKojiroLineBlur() {
    const center = window.innerHeight / 2;

    kojiroLines.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(center - itemCenter);

      const blur = Math.min(distance / 32, 18);
      const opacity = Math.max(1 - distance / 460, 0);
      const scale = Math.max(1 - distance / 3200, 0.94);

      gsap.set(item, {
        filter: `blur(${blur}px)`,
        opacity: opacity,
        scale: scale,
      });
    });
  }

/* =========================
   SOLUCIONES: DESKTOP HORIZONTAL / MOBILE STACKED
========================= */

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  const mmSolutions = gsap.matchMedia();

  /* Desktop: efecto horizontal */
  mmSolutions.add("(min-width: 769px)", () => {
    const solutionCards = gsap.utils.toArray(".solutions-preview .solution-card");

    const solutionsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".solutions-preview",
        start: "top 12%",
        end: "+=1900",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    solutionsTimeline.fromTo(
      solutionCards,
      {
        x: 340,
        opacity: 0,
        filter: "blur(18px)"
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.3,
        stagger: 0.18,
        ease: "power3.out"
      }
    );

    solutionsTimeline.to(solutionCards, {
      opacity: 1,
      duration: 0.35
    });

    solutionsTimeline.to(
      solutionCards,
      {
        x: -340,
        opacity: 0,
        filter: "blur(18px)",
        duration: 1.3,
        stagger: 0.18,
        ease: "power3.in"
      }
    );

    return () => {
      solutionsTimeline.kill();
    };
  });

  /* Mobile: limpiar GSAP para que funcione sticky */
  mmSolutions.add("(max-width: 768px)", () => {
    gsap.set(".solutions-preview", {
      clearProps: "all"
    });

    gsap.set(".solutions-preview .solutions-grid", {
      clearProps: "all"
    });

    gsap.set(".solutions-preview .solution-card", {
      clearProps: "transform,opacity,filter,x,y"
    });

    ScrollTrigger.refresh();
  });
}
/* =========================
   CAROUSEL HERO: VIDEO + IMÁGENES
========================= */

const heroSlides = document.querySelectorAll(".kojiro-slide");
const heroVideo = document.querySelector(".kojiro-video");

let currentHeroSlide = 0;
let heroTimer = null;

const videoDuration = 10000; // 10 segundos
const imageDuration = 4500;  // duración de cada imagen

function showHeroSlide(index) {
  clearTimeout(heroTimer);

  heroSlides.forEach((slide) => {
    slide.classList.remove("active");

    if (slide.tagName.toLowerCase() === "video") {
      slide.pause();
    }
  });

  currentHeroSlide = index;
  const activeSlide = heroSlides[currentHeroSlide];

  activeSlide.classList.add("active");

  if (activeSlide.tagName.toLowerCase() === "video") {
    activeSlide.currentTime = 0;
    activeSlide.play().catch(() => {});

    heroTimer = setTimeout(() => {
      goToNextHeroSlide();
    }, videoDuration);
  } else {
    heroTimer = setTimeout(() => {
      goToNextHeroSlide();
    }, imageDuration);
  }
}

function goToNextHeroSlide() {
  let nextIndex = currentHeroSlide + 1;

  if (nextIndex >= heroSlides.length) {
    nextIndex = 0;
  }

  showHeroSlide(nextIndex);
}

if (heroSlides.length > 0) {
  showHeroSlide(0);
}

//CHAT BOX
const chatbotButton = document.getElementById("chatbotButton");
const chatbotBox = document.getElementById("chatbotBox");
const closeChatbot = document.getElementById("closeChatbot");
const sendMessage = document.getElementById("sendMessage");
const userInput = document.getElementById("userInput");
const chatbotMessages = document.getElementById("chatbotMessages");

chatbotButton.addEventListener("click", () => {
  chatbotBox.classList.toggle("active");

  if (chatbotWelcome) {
    chatbotWelcome.style.display = "none";
  }
});

closeChatbot.addEventListener("click", () => {
  chatbotBox.classList.remove("active");
});

sendMessage.addEventListener("click", sendUserMessage);

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendUserMessage();
  }
});

function sendUserMessage() {
  const message = userInput.value.trim();

  if (message === "") return;

  addMessage(message, "user-message");

  const response = getBotResponse(message);
  
  setTimeout(() => {
    addMessage(response, "bot-message");
  }, 500);

  userInput.value = "";
}

function addMessage(text, className) {
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.innerText = text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const botKnowledge = [
  {
    intent: "productos",
    keywords: [
      "producto",
      "productos",
      "venden",
      "materiales",
      "construccion",
      "ferreteria",
      "agropecuaria",
      "industrial",
      "cemento",
      "fierro",
      "calamina",
      "electrodos",
      "herramientas"
    ],
    response:
      "Contamos con productos para construcción, agropecuaria, ferretería e industria. Puedes revisar nuestra sección de productos destacados o escribirnos para una cotización."
  },
  {
    intent: "ubicacion",
    keywords: [
      "ubicacion",
      "direccion",
      "donde estan",
      "donde queda",
      "sucursal",
      "mapa",
      "lugar",
      "como llegar"
    ],
    response:
      "Puedes encontrarnos en nuestra sucursal principal. También puedes revisar el mapa dentro de la página para ver la ubicación exacta."
  },
  {
    intent: "contacto",
    keywords: [
      "contacto",
      "whatsapp",
      "telefono",
      "celular",
      "numero",
      "llamar",
      "asesor",
      "atencion"
    ],
    response:
      "Puedes comunicarte con nosotros por WhatsApp o llamada. Presiona el botón de contacto de la página para hablar con un asesor."
  },
  {
    intent: "horarios",
    keywords: [
      "horario",
      "horarios",
      "atienden",
      "abren",
      "cierran",
      "lunes",
      "sabado",
      "domingo",
      "hora"
    ],
    response:
      "Nuestro horario de atención es de lunes a sábado. Para confirmar horarios específicos, te recomendamos comunicarte directamente con la empresa."
  },
  {
    intent: "cotizacion",
    keywords: [
      "precio",
      "precios",
      "cotizar",
      "cotizacion",
      "cuanto cuesta",
      "costo",
      "valor",
      "proforma"
    ],
    response:
      "Para una cotización, puedes enviarnos el producto, la cantidad y tu ubicación. Un asesor podrá ayudarte con el precio actualizado."
  },
  {
    intent: "envios",
    keywords: [
      "envio",
      "envios",
      "delivery",
      "entrega",
      "transportan",
      "mandan",
      "llevar",
      "despacho"
    ],
    response:
      "Sí, podemos coordinar entregas según la zona, cantidad y tipo de producto. Escríbenos para recibir más información."
  },
  {
    intent: "nosotros",
    keywords: [
      "empresa",
      "quienes son",
      "quienes somos",
      "historia",
      "nosotros",
      "dueños",
      "duenos",
      "fundadores",
      "gerente",
      "propietarios"
    ],
    response:
      "Somos una empresa enfocada en brindar soluciones para construcción, agropecuaria, ferretería e industria, trabajando con responsabilidad, calidad y compromiso."
  },
  {
    intent: "clavos",
    keywords: [
      "clavos",
    ],
    response:
      "ok entiendo que quieres clavos"
  }

];

function getBotResponse(message) {
  const text = normalizeText(message);

  let bestMatch = null;
  let bestScore = 0;

  botKnowledge.forEach((item) => {
    let score = 0;

    item.keywords.forEach((keyword) => {
      const normalizedKeyword = normalizeText(keyword);

      if (text.includes(normalizedKeyword)) {
        score++;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) {
    return bestMatch.response;
  }

  return "Gracias por tu consulta. Por el momento puedo ayudarte con productos, ubicación, contacto, horarios, cotizaciones, envíos e información sobre la empresa.";
}

function quickQuestion(type) {
  let question = "";

  if (type === "productos") question = "¿Qué productos tienen?";
  if (type === "ubicacion") question = "¿Dónde están ubicados?";
  if (type === "contacto") question = "¿Cómo puedo contactarlos?";
  if (type === "horarios") question = "¿Cuáles son sus horarios?";

  userInput.value = question;
  sendUserMessage();
}

/* =========================
   HISTORIA INTERACTIVA
========================= */

const historyData = [
  {
    label: "Etapa 01",
    title: "Los primeros pasos de Monterrey",
    text: "Monterrey nace con la visión de ofrecer productos de acero confiables, brindando atención cercana y soluciones para clientes del sector construcción e industria.",
    image: "img/historia-1.jpg",
    list: [
      "Inicio de operaciones comerciales.",
      "Primeras líneas de productos en acero.",
      "Atención enfocada en confianza y servicio."
    ]
  },
  {
    label: "Etapa 02",
    title: "Crecimiento y fortalecimiento comercial",
    text: "Con el tiempo, Monterrey amplía su catálogo de productos, mejora sus procesos internos y fortalece su relación con clientes de diferentes sectores productivos.",
    image: "img/historia-2.jpg",
    list: [
      "Ampliación del portafolio de productos.",
      "Mayor presencia en el mercado.",
      "Mejora en atención y asesoría comercial."
    ]
  },
  {
    label: "Etapa 03",
    title: "Expansión hacia nuevos sectores",
    text: "La empresa consolida soluciones para construcción, industria y línea agropecuaria, adaptándose a las necesidades reales de cada cliente.",
    image: "img/historia-3.jpg",
    list: [
      "Soluciones para construcción civil.",
      "Atención a industria y metalmecánica.",
      "Productos para el sector agropecuario."
    ]
  },
  {
    label: "Etapa 04",
    title: "Modernización y mejora continua",
    text: "Actualmente, Monterrey continúa fortaleciendo su imagen, canales digitales y experiencia comercial para brindar una atención más moderna, rápida y eficiente.",
    image: "img/historia-4.jpg",
    list: [
      "Modernización de canales digitales.",
      "Mayor enfoque en experiencia del cliente.",
      "Comunicación institucional más clara y profesional."
    ]
  }
];

const historyButtons = document.querySelectorAll(".history-year");
const historyImage = document.getElementById("historyImage");
const historyLabel = document.getElementById("historyLabel");
const historyTitle = document.getElementById("historyTitle");
const historyText = document.getElementById("historyText");
const historyList = document.getElementById("historyList");
const historyPrev = document.getElementById("historyPrev");
const historyNext = document.getElementById("historyNext");
const historyInfo = document.querySelector(".history-info");

let currentHistory = 0;

function renderHistory(index) {
  if (!historyImage || !historyLabel || !historyTitle || !historyText || !historyList) return;

  const item = historyData[index];

  historyButtons.forEach((button) => {
    button.classList.remove("active");
  });

  if (historyButtons[index]) {
    historyButtons[index].classList.add("active");
  }

  historyImage.classList.add("changing");
  historyInfo.classList.remove("fade-change");

  setTimeout(() => {
    historyImage.src = item.image;
    historyImage.alt = item.title;

    historyLabel.textContent = item.label;
    historyTitle.textContent = item.title;
    historyText.textContent = item.text;

    historyList.innerHTML = item.list
      .map((point) => `<li>${point}</li>`)
      .join("");

    historyImage.classList.remove("changing");

    void historyInfo.offsetWidth;
    historyInfo.classList.add("fade-change");
  }, 220);
}

historyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentHistory = Number(button.dataset.history);
    renderHistory(currentHistory);
  });
});

if (historyNext) {
  historyNext.addEventListener("click", () => {
    currentHistory++;

    if (currentHistory >= historyData.length) {
      currentHistory = 0;
    }

    renderHistory(currentHistory);
  });
}

if (historyPrev) {
  historyPrev.addEventListener("click", () => {
    currentHistory--;

    if (currentHistory < 0) {
      currentHistory = historyData.length - 1;
    }

    renderHistory(currentHistory);
  });
}


}
