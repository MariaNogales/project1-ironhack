class Snake {

    constructor(board, cellSize) {

        this.board = board
        this.cellSize = cellSize
        this.direction = 'right'

        this.body = [
            // { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }
            { x: 3, y: 1 }
        ]
    }

    draw() {
        this.cleanSnake()
        this.move()
        this.updatePosition()
    }

    cleanSnake() {
        const snakeSegments = document.querySelectorAll(".snake-segment")
        snakeSegments.forEach(segment => segment.remove())
    }

    move() {

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

    updatePosition() {
        // dibujar
        this.body.forEach(coordinates => {

            const segment = document.createElement('div')

            segment.className = 'snake-segment'
            segment.style.position = 'absolute'
            segment.style.backgroundColor = 'red'
            segment.style.width = '30px'
            segment.style.height = '30px'
            segment.style.top = `${coordinates.y * this.cellSize.height}px`
            segment.style.left = `${coordinates.x * this.cellSize.width}px`

            this.board.appendChild(segment)
        })
    }

    turnUp() {
        this.direction = 'up'
    }

    turnLeft() {
        this.direction = 'left'
    }

    turnRight() {
        this.direction = 'right'
    }

    turnDown() {
        this.direction = 'down'
    }

}