class Bricks {
    constructor(x, y, width, height, color = '#ffffff') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getX() { return this.x }
    getY() { return this.y }
    getWidth() { return this.width }
    getHeight() { return this.height }
    getColor() { return this.color }
}