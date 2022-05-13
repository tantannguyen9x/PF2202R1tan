class Circle {
    constructor(x, y, radius, color = '#ffffff') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.distanceToX = 2;
        this.distanceToY = 2;
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
    
// set tốc độ di chuyển của ball
    move() {
        this.x += this.distanceToX;
        this.y -= this.distanceToY;
    }

// set vị trí ball khi chạm vào paddle và bật ngược trở lại
    reverseDistanceToX() {
        this.distanceToX = -this.distanceToX;
    }

    reverseDistanceToY() {
        this.distanceToY = -this.distanceToY;
    }
}