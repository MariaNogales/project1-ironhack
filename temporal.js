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
