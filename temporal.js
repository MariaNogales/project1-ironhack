this.body = this.body.map(elm => {

    let xAxis = elm.x
    let yAxis = elm.y

    switch (this.direction) {
        case 'up':
            yAxis = elm.y - 1;
            break;
        case 'down':
            yAxis = elm.y + 1;
            break;
        case 'right':
            xAxis = elm.x + 1;
            break;
        case 'left':
            xAxis = elm.x - 1;
            break;
        default: S
            break;
    }


    const newPosition = {
        x: xAxis,
        y: yAxis
    }

    return newPosition
})

}


class Snake {


    checkCollision() {
        const head = this.body[0];
        if (head.x < 0 || head.x >= this.boardWidth || head.y < 0 || head.y >= this.boardHeight) {
            alert('Game Over!');
            this.reset();
        }
    }
    reset() {
        this.direction = undefined;

        this.body = [
            { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }
        ];

    }
}



didCollide(apple) {
    console.log('Snake Object:', this.snake)
    const head = this.body[0];
    const headRect = {
        left: head.x * this.cellSize.width,
        right: (head.x + 1) * this.cellSize.width,
        top: head.y * this.cellSize.height,
        bottom: (head.y + 1) * this.cellSize.height
    };

    const appleRect = {
        left: apple.foodPosition.x,
        right: apple.foodPosition.x + this.cellSize.width,
        top: apple.foodPosition.y,
        bottom: apple.foodPosition.y + this.cellSize.height
    };

    if (
        headRect.left < appleRect.right &&
        headRect.right > appleRect.left &&
        headRect.top < appleRect.bottom &&
        headRect.bottom > appleRect.top
    ) {
        console.log('Collision with apple!');
        return true;
    } else {
        return false;
    }
}






