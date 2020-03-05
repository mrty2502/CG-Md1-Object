function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.top += 20;
    };
    this.moveLeft = function () {
        this.left -= 20;
    };
    this.moveTop = function () {
        this.top -= 20;
    }

}

let hero = new Hero('songoku.png', 10,10,200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <20 ) {
        hero.moveRight();
    }
    else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
        hero.moveDown();
    } else if (hero.left > 5) {
        hero.moveLeft();
    } else {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
}

start();