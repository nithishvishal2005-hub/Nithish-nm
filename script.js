// Typewriter effect
const text = "Hello, I'm Nithish";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}
window.onload = typeWriter;

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal
const reveals = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  reveals.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
});
