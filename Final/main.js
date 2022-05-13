
function play() {
    if (!isGameOver) {
        clear();
        calculateNewState();
        draw();
        requestAnimationFrame(play);
    } else {
        alert("Game Over!!!");
    }
}

function clear() {
    gameContext.clearRect(0, 0, mainFrame.width, mainFrame.height);
}

function calculateNewState() {
    if (turle.isOnTheAir()) {
        t.vY -= 0.1
    } else {
        setTurleOnTheGround()
    }
}

function draw() {
    drawTurle();
}

// Vẽ đối tượng lên màn hình 
// draw the turle 
function draw() {
    gameContext.beginPath();
    gameContext.turle(paddle.getX(), paddle.getY(), paddle.getWidth(), paddle.getHeight());
    gameContext.fillStyle = paddle.getColor();
    gameContext.fill();
    gameContext.closePath();
}

// Function về vị trí của paddle
function updatePaddlePosition() {
    // xu ly su kien di chuyen cua paddle
    if (paddle.isMovingToLeft()) {
        paddle.toLeft();
    } else if (paddle.isMovingToRight()) {
        paddle.toRight();
    }

    // paddle cham 2 ben 
    if (paddle.getX() < 0) {
        paddle.x = 0;
    } else if (paddle.getX() > mainFrame.width - paddle.getWidth()) {
        paddle.x = mainFrame.width - paddle.getWidth();
    }
}

// Function vị trí của ball
function updateBallPosition() {
    if (ball.getX() < ball.getRadius() || ball.getX() > mainFrame.width - ball.getRadius()) {
        ball.reverseDistanceToX();
    }
    if (ball.getY() < ball.getRadius()) {
        ball.reverseDistanceToY();
    }
    ball.move();
}
//function xử lý khi ball chạm vào paddle
// 
function handleBallCollisionPaddle() {
    if (ball.getX() + ball.getRadius() >= paddle.getX() // vị trí ball điểm đầu bên trái của paddle
    && ball.getX() + ball.getRadius() <= paddle.getX() + paddle.getWidth()   // vị trí ball ở điểm cuối bên phải của paddle
    && ball.getY() + ball.getRadius() >= mainFrame.height - paddle.getHeight() - 25
    ) // vị trí của ball ở trên paddle
        {
        ball.reverseDistanceToY();
    }
}
