function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomColor() {
    let red = getRandomHex();
    let blue = getRandomHex();
    let green = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function getRandomHex() {
    return Math.floor(Math.random() * 250);
}

function createCircle() {
    let ctx = document.getElementById('myCanvas').getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle() {
    for (i = 0; i < 50; i++) {
        createCircle();
    }
}

createMultipleCircle();
