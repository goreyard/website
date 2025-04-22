window.addEventListener('load', () => {
  const logoContainer = document.getElementById('logoContainer');
  const logoSymbol = document.getElementById('logoSymbol');
  const brandName = document.getElementById('brandName');
  const loader = document.getElementById('loader');

  gsap.timeline()
    .to(logoContainer, {opacity: 1, duration: 0.8, ease: "power2.out"})
    .from(logoSymbol, {scale: 0, duration: 1, ease: "back.out(1.7)"}, "-=0.5")
    .to(brandName, {opacity: 1, y: -20, duration: 1, ease: "power2.out"}, "-=0.5")
    .to(logoContainer, {opacity: 0, duration: 1, delay: 0.8, ease: "power2.inOut"})
    .to(loader, {opacity: 0, duration: 1, ease: "power2.inOut", onComplete: () => loader.style.display = "none"});
});

// Smooth Scrolling
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Scroll Down Button
function scrollToSection() {
  document.getElementById('shop').scrollIntoView({behavior: "smooth"});
}

// Contact Form Toggle
const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
contactBtn.addEventListener('click', () => {
  contactForm.classList.toggle('hidden');
});
