
const reveal = () => {
  const reveals = document.querySelectorAll('.box1 div, .box6, form, .licence h1');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150; // pixels before revealing
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);


window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(46, 125, 50, 0.9)"; // Forest green on scroll
    nav.style.padding = "10px 50px";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.1)";
    nav.style.padding = "0 50px";
  }
});


const textElement = document.querySelector(".main2 :nth-child(2)");
const text = textElement.innerHTML;
textElement.innerHTML = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}


window.onload = typeWriter;