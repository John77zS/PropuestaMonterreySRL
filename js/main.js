const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });

const revealElements = document.querySelectorAll(".reveal");

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



const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".gallery-card");

// Categoría inicial
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

// Mostrar Eventos al cargar
filterGallery(defaultCategory);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");
    filterGallery(filterValue);
  });
});

//Tarjetas testimonios........................................................................

const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll("#testimonialDots button");
const testimonialPrev = document.getElementById("testimonialPrev");
const testimonialNext = document.getElementById("testimonialNext");

let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card) => {
    card.classList.remove("active");
  });

  testimonialDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  testimonialCards[index].classList.add("active");
  testimonialDots[index].classList.add("active");
}

testimonialNext.addEventListener("click", () => {
  testimonialIndex++;

  if (testimonialIndex >= testimonialCards.length) {
    testimonialIndex = 0;
  }

  showTestimonial(testimonialIndex);
});

testimonialPrev.addEventListener("click", () => {
  testimonialIndex--;

  if (testimonialIndex < 0) {
    testimonialIndex = testimonialCards.length - 1;
  }

  showTestimonial(testimonialIndex);
});

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    testimonialIndex = index;
    showTestimonial(testimonialIndex);
  });
});

/* Cambio automático cada 6 segundos */
setInterval(() => {
  testimonialIndex++;

  if (testimonialIndex >= testimonialCards.length) {
    testimonialIndex = 0;
  }

  showTestimonial(testimonialIndex);
}, 5000);



const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
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





});