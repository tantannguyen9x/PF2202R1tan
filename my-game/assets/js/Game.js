class Game {
    constructor(rect, ball, bricks, point, gameOver, endGame) {
        this.rect = rect;
        this.ball = ball;
        this.bricks = bricks;
        this.point = point;
        this.gameOver = gameOver;
        this.endGame = endGame;
    }
    get rect() {
        let paddleCurrentX = mainFrame.width / 2 - 50;
        let paddleCurrentY = mainFrame.height - 45;
        let paddle = new Rect(paddleCurrentX, paddleCurrentY, 100, 20, "#ff0000");
    }
    get ball() {
        let ballCurrentX = mainFrame.width / 2;
        let ballCurrentY = mainFrame.height - 70;
        let ball = new Circle(ballCurrentX, ballCurrentY, 10, '#0000FF');
    }
    get bricks() {
        // bricks
        let bricksTemplate = [
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

        /* var bricksTemplate = [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]; */
        let bricks = [];
        let bricksRemain = 0
        for (let i = 0; i < bricksTemplate.length; i++) {
            bricks[i] = [];
            for (let j = 0; j < bricksTemplate[i].length; j++) {
                if (bricksTemplate[i][j] === 1) {
                    bricks[i][j] = new Brick(j * 40 + 20, i * 40 + 10, 50, 15, '#ff0000');
                    bricksRemain++;
                }
            }
        }
    }
    get gameOver() {
        let isGameOver = false;
    }
    get endGame() {
        let isEndGame = false;
    }
    get point() {
        let point = 0;
    }
}