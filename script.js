document.addEventListener("DOMContentLoaded", () => {

  /* ===== TYPING ANIMATION ===== */
  const texts = [
    "Aspiring Computer Science Student",
    "Web Developer",
    "Problem Solver",
    "Passionate Learner",
    "Tech Enthusiast"
  
  ];

  let count = 0;
  let index = 0;

  function type() {
    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    const typingEl = document.getElementById("typing-text");
    if (!typingEl) return; // safety check

    typingEl.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count = (count + 1) % texts.length;
      }, 1500);
    }

    setTimeout(type, 100);
  }

  type();
});
/* ===== CURSOR GLOW MOVE ===== */
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
/* ===== SCROLL REVEAL LOGIC ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load
