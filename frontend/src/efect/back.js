// Освещение курсора
const lightCanvas = document.getElementById("lightCanvas");
const lightCtx = lightCanvas.getContext("2d");

lightCanvas.width = window.innerWidth;
lightCanvas.height = window.innerHeight;

let mouse = { x: lightCanvas.width / 2, y: lightCanvas.height / 2 };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function drawLight() {
    lightCtx.clearRect(0, 0, lightCanvas.width, lightCanvas.height);
    
    let gradient = lightCtx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
    gradient.addColorStop(0, "rgba(185, 126, 255, 0.2)");
    gradient.addColorStop(0.5, "rgba(100, 100, 100, 0.1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    lightCtx.fillStyle = gradient;
    lightCtx.fillRect(mouse.x - 180, mouse.y - 180, 360, 360);

    requestAnimationFrame(drawLight);
}
drawLight();

// Падающие точки
const dotsCanvas = document.getElementById("dotsCanvas");
const dotsCtx = dotsCanvas.getContext("2d");

dotsCanvas.width = window.innerWidth;
dotsCanvas.height = window.innerHeight;

let dots = [];
const dotCount = 100;

class Dot {
    constructor() {
        this.x = Math.random() * dotsCanvas.width;
        this.y = Math.random() * dotsCanvas.height;
        this.radius = Math.random() * 3;
        this.speed = Math.random() * .5;
        this.opacity = 0.3;
    }
    update() {
        this.y += this.speed;
        if (this.y > dotsCanvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * dotsCanvas.width;
        }
    }
    draw() {
        dotsCtx.beginPath();
        dotsCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        dotsCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        dotsCtx.fill();
        dotsCtx.closePath();
    }
}

function initDots() {
    for (let i = 0; i < dotCount; i++) {
        dots.push(new Dot());
    }
}

function animateDots() {
    dotsCtx.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height);
    dots.forEach(dot => {
        dot.update();
        dot.draw();
    });
    requestAnimationFrame(animateDots);
}

initDots();
animateDots();

window.addEventListener("resize", () => {
    lightCanvas.width = window.innerWidth;
    lightCanvas.height = window.innerHeight;
    dotsCanvas.width = window.innerWidth;
    dotsCanvas.height = window.innerHeight;
    dots = [];
    initDots();
});

// tab
document.querySelectorAll('.tab').forEach(tab => {
    console.log(tab);
    tab.addEventListener('click', () => {
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');
  
      document.querySelector('.tab-content.active').classList.remove('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  }); 