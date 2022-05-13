class Circle {
    constructor(x, y, radius, color = '#0000FF') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vX = 2;
        this.vY = 2;
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

    move() {
        this.x += this.vX;
        this.y -= this.vY;
    }

    reversePositionX() {
        this.vX = -this.vX;
    }

    reversePositionY() {
        this.vY = -this.vY;
    }
}