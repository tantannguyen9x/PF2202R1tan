class Circle {
    constructor(x, y, radius, color = '#d30d0f') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getRadius() {
        return this.radius;
    }
    getColor() {
        return this.color;
    }
    draw(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    isCollisionCircle(otherCircle) {
        let dist = (this.x + this.radius/2) - (otherRect.getX() + otherRect.getRadius() / 2);
        if (dist < 0) {
            dist = -distX;
        }

    }
}