// script.js

// Animate sections on scroll
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const form = document.getElementById("contact-form");
const status = document.getElementById("status-msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    status.style.display = "block";
    form.reset();
  }
});
