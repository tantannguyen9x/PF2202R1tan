// vẽ default
function drawDefault() {
    drawMain();
    drawDes();
    drawPaddle();
    drawBall();
    drawBricks();
}
// Main function
function play() {
    if (!isGameOver) {
        gameContext.clearRect(0, 0, mainFrame.width, mainFrame.height); // clear vị trí trước đó của ball và paddle
        drawMain();
        drawDes();
        drawPaddle();
        drawBall();
        drawBricks();
        updatePaddlePosition();
        handleBallCollisionPaddle();
        handleBallCollisionBrick();
        updateBallPosition();
        if (ball.getY() + ball.getRadius() >= mainFrame.height) {
            isGameOver = true;
        }
        requestAnimationFrame(play);
    } else {
        alert("End game !!! Điểm của bạn là: " + point);
    }
}
// Tô màu cho nền
function drawMain() {
    gameContext.fillStyle = '#F8E0E0';
    gameContext.fillRect(0, 0, 500, 500);
}
function drawDes() {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "40px Georgia";
    ctx.fillText("Cách chơi", 10, 70);
    ctx.font = "20px Georgia"
    ctx.fillText("Click nút Play Game để bắt đầu", 10, 120);
    ctx.fillText("Dùng nút mũi tên sang trái, phải để di chuyển paddle", 10, 150);
    ctx.fillText("Khi bóng chạm vào paddle sẽ quay trở lại", 10, 180);
    ctx.fillText("Khi bóng chạm vào cạnh dưới sẽ kết thúc Game", 10, 210);
    ctx.fillText("Bạn sẽ chiến thắc khi đập được hết các viên gạch", 10, 240);
}

// draw bricks
function drawBricks() {
    for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < bricks[i].length; j++) {
            let brick = bricks[i][j]
            if (brick != null) {
                gameContext.beginPath();
                gameContext.rect(brick.getX(), brick.getY(), brick.getWidth(), brick.getHeight());
                gameContext.fillStyle = brick.getColor();
                gameContext.fill();
                gameContext.closePath();
            }
        }
    }
}

// draw the paddle 
function drawPaddle() {
    gameContext.beginPath();
    gameContext.rect(paddle.getX(), paddle.getY(), paddle.getWidth(), paddle.getHeight());
    gameContext.fillStyle = paddle.getColor();
    gameContext.fill();
    gameContext.closePath();
}
// draw ball
function drawBall() {
    gameContext.beginPath();
    gameContext.arc(ball.getX(), ball.getY(), ball.getRadius(), 0, Math.PI * 2);
    gameContext.fillStyle = ball.getColor();
    gameContext.fill();
    gameContext.closePath();
}

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

// update vị trí ball
function updateBallPosition() {
    if (ball.getX() < ball.getRadius() || ball.getX() > mainFrame.width - ball.getRadius()) {
        ball.reversePositionX();
    }
    if (ball.getY() < ball.getRadius()) {
        ball.reversePositionY();
    }
    ball.move();
}
// check vị trí va chạm với paddle
function handleBallCollisionPaddle() {
    // check vị trí phía trên
    if (ball.getX() + ball.getRadius() >= paddle.getX() // ball ở điểm đầu bên trái
        && ball.getX() + ball.getRadius() <= paddle.getX() + paddle.getWidth() // ball ở điểm cuối bên phải
        && ball.getY() + ball.getRadius() >= mainFrame.height - paddle.getHeight() - 25) {
        ball.reversePositionY();
    }
}

// check vị trí va chạm với brick
function handleBallCollisionBrick() {
    for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < bricks[i].length; j++) {
            if (bricks[i][j] != null) {
                if (ball.getX() - ball.getRadius() >= bricks[i][j].getX() + bricks[i][j].getHeight() // check vị trí va chạm
                    && ball.getX() - ball.getRadius() <= bricks[i][j].getX() + bricks[i][j].getHeight() + bricks[i][j].getWidth()
                    && ball.getY() - ball.getRadius() <= bricks[i][j].getY() + bricks[i][j].getHeight()) {
                    ball.reversePositionY();
                    point = point + 10; // Tính điểm
                    bricks[i][j] = null; // set vị trí bricks đã va chạm thành null
                    bricksRemain--; // count số gạch còn lại
                    document.getElementById('sumPoint').innerText = 'Được ' + point + ' điểm rồi, cố lên !!'; // show điểm
                    if (bricksRemain === 0) {
                        setTimeout(() => {
                            alert('Oa, chúc mừng! Bạn đã thắng rồi !!!')
                        }, 30);
                    };
                }
            }
        }
    }
}