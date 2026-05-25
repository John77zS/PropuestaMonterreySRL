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

  gsap.to(".kojiro-video", {
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

  kojiroTimeline.to(".kojiro-main-logo", {
    opacity: 1,
    duration: 0.6,
  });

  kojiroTimeline.to(".kojiro-main-logo", {
    scale: 0.78,
    opacity: 0,
    y: -90,
    filter: "blur(16px)",
    duration: 1.1,
    ease: "power3.inOut",
  });

  kojiroTimeline.to(
    ".kojiro-scroll",
    {
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.7,
      ease: "power3.inOut",
    },
    "<"
  );

  kojiroTimeline.to(
    ".kojiro-video",
    {
      scale: 1.12,
      filter: "blur(3px)",
      duration: 1.2,
      ease: "power3.inOut",
    },
    "<"
  );

  kojiroTimeline.set(".kojiro-lines-stage", {
    opacity: 1,
  });

  kojiroTimeline.set(".kojiro-lines-list", {
    y: () => window.innerHeight * 0.32,
  });

  kojiroTimeline.set(".kojiro-line", {
    opacity: 0,
    filter: "blur(18px)",
    scale: 0.96,
  });

  kojiroTimeline.to(".kojiro-lines-list", {
    y: () => {
      const list = document.querySelector(".kojiro-lines-list");
      return -list.offsetHeight - window.innerHeight * 0.10;
    },
    duration: 2,
    ease: "none",
    onStart: updateKojiroLineBlur,
    onUpdate: updateKojiroLineBlur,
  });

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

/* EFECTO KOJIRO HORIZONTAL EN SOLUCIONES */

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  const solutionCards = gsap.utils.toArray(".solutions-preview .solution-card");

  const solutionsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".solutions-preview",
      start: "top 12%",
      end: "+=1600",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  // Entran desde la derecha hacia su posición
  solutionsTimeline.fromTo(
    solutionCards,
    {
      x: 420,
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

  // Se quedan visibles un momento
  solutionsTimeline.to(solutionCards, {
    opacity: 1,
    duration: 0.45
  });

  // Salen hacia la izquierda para pasar a la siguiente sección
  solutionsTimeline.to(
    solutionCards,
    {
      x: -420,
      opacity: 0,
      filter: "blur(18px)",
      duration: 1.3,
      stagger: 0.18,
      ease: "power3.in"
    }
  );
}

}
