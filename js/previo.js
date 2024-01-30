
// TASKS
// GENERAR COLISION EN LIMITES Y GAME OVER
// CREAR CLASE DE MANZANA CON SU MÉTODO GENERATEFOOD
// DETECTAR COLISION CON MANZANA, ELIMINARLA Y SUMAR PUNTOS


function moveSnake() {

    const head = { ...snakeBody[0] };

    if (snakeDirection === 'up') {
        head.y -= 1;
    } else if (snakeDirection === 'down') {
        head.y += 1;
    } else if (snakeDirection === 'left') {
        head.x -= 1;
    } else if (snakeDirection === 'right') {
        head.x += 1;
    }

    snakeBody.unshift(head);

    if (head.x === foodPosition.x && head.y === foodPosition.y) {
        score++;
        generateFood();
    } else {
        snakeBody.pop();
    }

    if (head.x < 0 || head.x >= 10 || head.y < 0 || head.y >= 10 || checkCollision()) {
        restartGame();
    }

    renderBoard();
}

function checkCollision() {
    const [head, ...body] = snakeBody;
    return body.some(segment => segment.x === head.x && segment.y === head.y);
}

function generateFood() {
    foodPosition = {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10)
    };
}

function restartGame() {
    if (maxScore < score) {
        maxScore = score
    }
    snakeBody = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
    foodPosition = { x: 5, y: 5 };
    snakeDirection = 'right';
    score = 0;

}

function gameLoop() {
    moveSnake();
    renderBoard();
}

let gameInterval;


renderBoard();