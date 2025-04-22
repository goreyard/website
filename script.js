// Custom Cursor Bewegung
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// GSAP Load-Animationen
gsap.registerPlugin(ScrollTrigger);

// Hero Text Cinematic Auftritt
gsap.to(".hero-text", {opacity: 1, y: -20, duration: 1.5, ease: "power3.out"});
gsap.to(".hero-subtext", {opacity: 1, y: -10, duration: 1.5, ease: "power3.out", delay: 0.3});

// Produkte beim Scrollen einblenden
gsap.utils.toArray('.product-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// Zitat und About Sektionen einblenden
gsap.from(".quote-section", {
  scrollTrigger: {
    trigger: ".quote-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".about-section", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});
