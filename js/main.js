const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* HEADER */
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
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
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

/* GALERÍA */
const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".gallery-card");

function filterGallery(category) {
  galleryCards.forEach((card) => {
    card.classList.toggle("hide", card.dataset.category !== category);
  });
}

if (filterButtons.length > 0 && galleryCards.length > 0) {
  filterGallery("eventos");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterGallery(button.dataset.filter);
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
  if (!testimonialCards.length || !testimonialDots.length) return;

  testimonialCards.forEach((card) => card.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialCards[index]?.classList.add("active");
  testimonialDots[index]?.classList.add("active");
}

if (testimonialCards.length > 0 && testimonialDots.length > 0) {
  testimonialNext?.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  });

  testimonialPrev?.addEventListener("click", () => {
    testimonialIndex =
      (testimonialIndex - 1 + testimonialCards.length) %
      testimonialCards.length;

    showTestimonial(testimonialIndex);
  });

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      testimonialIndex = index;
      showTestimonial(testimonialIndex);
    });
  });

  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  }, 5000);
}

/* FORMULARIO */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const interest = document.getElementById("interest")?.value;
    const message = document.getElementById("message")?.value.trim();

    if (!name || !phone || !interest || !message) {
      formMessage.textContent = "Por favor completa los campos obligatorios.";
      return;
    }

    formMessage.textContent =
      "Consulta lista. Puedes conectar este formulario a WhatsApp, correo o backend.";

    contactForm.reset();
  });
}

/* HERO: CARRUSEL VIDEO + IMÁGENES */
const heroSlides = document.querySelectorAll(".kojiro-slide");

let currentHeroSlide = 0;
let heroTimer = null;

const videoDuration = 10000;
const imageDuration = 4500;

function showHeroSlide(index) {
  if (!heroSlides.length) return;

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
    heroTimer = setTimeout(goToNextHeroSlide, videoDuration);
  } else {
    heroTimer = setTimeout(goToNextHeroSlide, imageDuration);
  }
}

function goToNextHeroSlide() {
  const nextIndex = (currentHeroSlide + 1) % heroSlides.length;
  showHeroSlide(nextIndex);
}

if (heroSlides.length > 0) {
  showHeroSlide(0);
}

/* HERO KOJIRO + SOLUCIONES GSAP */
if (
  window.gsap &&
  window.ScrollTrigger &&
  document.querySelector(".kojiro-hero")
) {
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
    ease: "power4.out",
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

  kojiroTimeline
    .to(".kojiro-main-logo", {
      opacity: 1,
      duration: 0.1,
    })

    .set(".kojiro-lines-stage", {
      opacity: 1,
    })

    .set(".kojiro-lines-list", {
      y: () => window.innerHeight * 0.42,
    })

    .set(".kojiro-line", {
      opacity: 0,
      filter: "blur(18px)",
      scale: 0.96,
    })

    .to(".kojiro-main-logo", {
      scale: 0.78,
      opacity: 0,
      y: -90,
      filter: "blur(16px)",
      duration: 1.4,
      ease: "power3.inOut",
    })

    .to(
      ".kojiro-scroll",
      {
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    )

    .to(
      ".kojiro-carousel",
      {
        scale: 1.12,
        filter: "blur(3px)",
        duration: 1.4,
        ease: "power3.inOut",
      },
      "<"
    )

    .to(
      ".kojiro-lines-list",
      {
        y: () => {
          const list = document.querySelector(".kojiro-lines-list");
          return -list.offsetHeight - window.innerHeight * 0.28;
        },
        duration: 4.8,
        ease: "none",
        onStart: updateKojiroLineBlur,
        onUpdate: updateKojiroLineBlur,
      },
      "-=0.95"
    )

    .to(".kojiro-lines-stage", {
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

      gsap.set(item, {
        filter: `blur(${Math.min(distance / 32, 18)}px)`,
        opacity: Math.max(1 - distance / 460, 0),
        scale: Math.max(1 - distance / 3200, 0.94),
      });
    });
  }

  if (document.querySelector(".solutions-preview")) {
    const mmSolutions = gsap.matchMedia();

    mmSolutions.add("(min-width: 769px)", () => {
      const solutionCards = gsap.utils.toArray(
        ".solutions-preview .solution-card"
      );

      const solutionsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".solutions-preview",
          start: "top 12%",
          end: "+=1900",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      solutionsTimeline
        .fromTo(
          solutionCards,
          {
            x: 340,
            opacity: 0,
            filter: "blur(18px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.3,
            stagger: 0.18,
            ease: "power3.out",
          }
        )

        .to(solutionCards, {
          opacity: 1,
          duration: 0.35,
        })

        .to(solutionCards, {
          x: -340,
          opacity: 0,
          filter: "blur(18px)",
          duration: 1.3,
          stagger: 0.18,
          ease: "power3.in",
        });

      return () => solutionsTimeline.kill();
    });

    mmSolutions.add("(max-width: 768px)", () => {
      gsap.set(".solutions-preview, .solutions-preview .solutions-grid", {
        clearProps: "all",
      });

      gsap.set(".solutions-preview .solution-card", {
        clearProps: "transform,opacity,filter,x,y",
      });

      ScrollTrigger.refresh();
    });
  }
}

/* CHATBOT */
const chatbotButton = document.getElementById("chatbotButton");
const chatbotBox = document.getElementById("chatbotBox");
const chatbotWelcome = document.getElementById("chatbotWelcome");
const closeChatbot = document.getElementById("closeChatbot");
const sendMessage = document.getElementById("sendMessage");
const userInput = document.getElementById("userInput");
const chatbotMessages = document.getElementById("chatbotMessages");

const botKnowledge = [
  {
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
      "herramientas",
    ],
    response:
      "Contamos con productos para construcción, agropecuaria, ferretería e industria. Puedes revisar nuestra sección de productos destacados o escribirnos para una cotización.",
  },
  {
    keywords: [
      "ubicacion",
      "direccion",
      "donde estan",
      "donde queda",
      "sucursal",
      "mapa",
      "lugar",
      "como llegar",
    ],
    response:
      "Puedes encontrarnos en nuestra sucursal principal. También puedes revisar el mapa dentro de la página para ver la ubicación exacta.",
  },
  {
    keywords: [
      "contacto",
      "whatsapp",
      "telefono",
      "celular",
      "numero",
      "llamar",
      "asesor",
      "atencion",
    ],
    response:
      "Puedes comunicarte con nosotros por WhatsApp o llamada. Presiona el botón de contacto de la página para hablar con un asesor.",
  },
  {
    keywords: [
      "horario",
      "horarios",
      "atienden",
      "abren",
      "cierran",
      "lunes",
      "sabado",
      "domingo",
      "hora",
    ],
    response:
      "Nuestro horario de atención es de lunes a sábado. Para confirmar horarios específicos, te recomendamos comunicarte directamente con la empresa.",
  },
  {
    keywords: [
      "precio",
      "precios",
      "cotizar",
      "cotizacion",
      "cuanto cuesta",
      "costo",
      "valor",
      "proforma",
    ],
    response:
      "Para una cotización, puedes enviarnos el producto, la cantidad y tu ubicación. Un asesor podrá ayudarte con el precio actualizado.",
  },
  {
    keywords: [
      "envio",
      "envios",
      "delivery",
      "entrega",
      "transportan",
      "mandan",
      "llevar",
      "despacho",
    ],
    response:
      "Sí, podemos coordinar entregas según la zona, cantidad y tipo de producto. Escríbenos para recibir más información.",
  },
  {
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
      "propietarios",
    ],
    response:
      "Somos una empresa enfocada en brindar soluciones para construcción, agropecuaria, ferretería e industria, trabajando con responsabilidad, calidad y compromiso.",
  },
];

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getBotResponse(message) {
  const text = normalizeText(message);

  let bestMatch = null;
  let bestScore = 0;

  botKnowledge.forEach((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      return total + (text.includes(normalizeText(keyword)) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  return bestMatch
    ? bestMatch.response
    : "Gracias por tu consulta. Por el momento puedo ayudarte con productos, ubicación, contacto, horarios, cotizaciones, envíos e información sobre la empresa.";
}

function addMessage(text, className) {
  if (!chatbotMessages) return;

  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.innerText = text;

  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendUserMessage() {
  if (!userInput) return;

  const message = userInput.value.trim();

  if (!message) return;

  addMessage(message, "user-message");

  setTimeout(() => {
    addMessage(getBotResponse(message), "bot-message");
  }, 500);

  userInput.value = "";
}

function quickQuestion(type) {
  const questions = {
    productos: "¿Qué productos tienen?",
    ubicacion: "¿Dónde están ubicados?",
    contacto: "¿Cómo puedo contactarlos?",
    horarios: "¿Cuáles son sus horarios?",
  };

  if (!userInput || !questions[type]) return;

  userInput.value = questions[type];
  sendUserMessage();
}

window.quickQuestion = quickQuestion;

if (chatbotButton && chatbotBox) {
  chatbotButton.addEventListener("click", () => {
    chatbotBox.classList.toggle("active");

    if (chatbotWelcome) {
      chatbotWelcome.style.display = "none";
    }
  });

  closeChatbot?.addEventListener("click", () => {
    chatbotBox.classList.remove("active");
  });

  sendMessage?.addEventListener("click", sendUserMessage);

  userInput?.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendUserMessage();
    }
  });
}

/* HISTORIA INTERACTIVA */
const historyData = [
  {
    label: "Etapa 01",
    title: "Los primeros pasos de Monterrey",
    text:
      "Monterrey nace con la visión de ofrecer productos de acero confiables, brindando atención cercana y soluciones para clientes del sector construcción e industria.",
    image: "img/historia-1.jpg",
    list: [
      "Inicio de operaciones comerciales.",
      "Primeras líneas de productos en acero.",
      "Atención enfocada en confianza y servicio.",
    ],
  },
  {
    label: "Etapa 02",
    title: "Crecimiento y fortalecimiento comercial",
    text:
      "Con el tiempo, Monterrey amplía su catálogo de productos, mejora sus procesos internos y fortalece su relación con clientes de diferentes sectores productivos.",
    image: "img/historia-2.jpg",
    list: [
      "Ampliación del portafolio de productos.",
      "Mayor presencia en el mercado.",
      "Mejora en atención y asesoría comercial.",
    ],
  },
  {
    label: "Etapa 03",
    title: "Expansión hacia nuevos sectores",
    text:
      "La empresa consolida soluciones para construcción, industria y línea agropecuaria, adaptándose a las necesidades reales de cada cliente.",
    image: "img/historia-3.jpg",
    list: [
      "Soluciones para construcción civil.",
      "Atención a industria y metalmecánica.",
      "Productos para el sector agropecuario.",
    ],
  },
  {
    label: "Etapa 04",
    title: "Modernización y mejora continua",
    text:
      "Actualmente, Monterrey continúa fortaleciendo su imagen, canales digitales y experiencia comercial para brindar una atención más moderna, rápida y eficiente.",
    image: "img/historia-4.jpg",
    list: [
      "Modernización de canales digitales.",
      "Mayor enfoque en experiencia del cliente.",
      "Comunicación institucional más clara y profesional.",
    ],
  },
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
  if (
    !historyImage ||
    !historyLabel ||
    !historyTitle ||
    !historyText ||
    !historyList ||
    !historyInfo
  ) {
    return;
  }

  const item = historyData[index];

  historyButtons.forEach((button) => {
    button.classList.remove("active");
  });

  historyButtons[index]?.classList.add("active");

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

if (historyButtons.length > 0) {
  historyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentHistory = Number(button.dataset.history);
      renderHistory(currentHistory);
    });
  });

  historyNext?.addEventListener("click", () => {
    currentHistory = (currentHistory + 1) % historyData.length;
    renderHistory(currentHistory);
  });

  historyPrev?.addEventListener("click", () => {
    currentHistory =
      (currentHistory - 1 + historyData.length) % historyData.length;

    renderHistory(currentHistory);
  });
}
/* DROPDOWN MOBILE */
const dropdownItemsMobile = document.querySelectorAll(".has-dropdown");

dropdownItemsMobile.forEach((item) => {
  const toggle = item.querySelector(".dropdown-toggle");

  if (!toggle) return;

  toggle.addEventListener("click", (event) => {
    if (window.innerWidth <= 1024) {
      event.preventDefault();

      dropdownItemsMobile.forEach((dropdown) => {
        if (dropdown !== item) {
          dropdown.classList.remove("mobile-open");
        }
      });

      item.classList.toggle("mobile-open");
    }
  });
});
