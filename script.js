window.addEventListener("scroll", function () {
    let nav = document.querySelector(".main");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.7)";
        nav.style.padding = "10px";
    } else {
        nav.style.background = "transparent";
    }
});

let text = "VISIT BALI";
let index = 0;
let target = document.querySelector(".main2 p:nth-child(2)");

function typeEffect() {
    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
target.innerHTML = "";
typeEffect();

let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".main ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

let elements = document.querySelectorAll(".box1 div, .box2, .box3, .box5");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (position < screen - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 200);
    });
});
