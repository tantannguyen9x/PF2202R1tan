class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    draw(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.colos;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    isCollision(rect1, rect2) {
       /*  let distX = (rect1.x + (rect1.w / 2)) - (rect2.x + (rect2.w) / 2);
        if (distX < 0)
            distX = -distX;

        const distW = (rect1.w + rect2.w) / 2;

        let distY = (rect1.y + (rect1.h / 2)) - (rect2.y + (rect2.h) / 2);
        if (distY < 0)
            distY = -distY;

        const distH = (rect1.h + rect2.h) / 2;

        return (distX <= distW && distY <= distH); */

        let distX = (this.x + this.width / 2) - (otherRect.getX() + otherRect.getWidth() / 2);
        if (distX < 0) {
            distX = -distX;
        }

        let distY = (this.y + ortherRect.getHeight())/2 - (this.y + ortherRect.getHeight())/2;
        
        let distW = (this.width + ortherRect.getWidth())/2;

        let distH = (this.height + ortherRect.getHeight())/2;
        return (distX <= distW && distY < distH)
    }
}