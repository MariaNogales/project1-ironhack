class Snake {

    constructor(board, cellSize, boardWidth, boardHeight, foodPosition) {

        this.board = board
        this.cellSize = cellSize
        this.direction;
        this.boardWidth = boardWidth
        this.boardHeight = boardHeight
        this.foodPosition = foodPosition

        
        this.body = [
            { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }
            //{ x: 3, y: 1 }
        ]
    }

    draw() {
        this.cleanSnake()
        this.checkCollision()
        this.move()
        this.updatePosition()
    }

    cleanSnake() {
        const snakeSegments = document.querySelectorAll(".snake-segment")
        snakeSegments.forEach(segment => segment.remove())
    }
        
    move() {
        this.body = this.body.map((currentSegment, index) => {
            if (index === 0) {
                switch (this.direction) {
                    case 'up':
                        return { x: currentSegment.x, y: Math.max(currentSegment.y - 1, 0)};
                    case 'down':
                        return { x: currentSegment.x, y: Math.min(currentSegment.y + 1, this.boardHeight - 1) };
                    case 'right':
                        return { x: Math.min(currentSegment.x + 1, this.boardWidth - 1), y: currentSegment.y };
                    case 'left':
                        return { x: Math.max(currentSegment.x - 1, 0), y: currentSegment.y };
                    default:
                        return currentSegment;
                }
            } else {
                return { ...this.body[index - 1] };
            }
        });
    }
        
    updatePosition() {
        this.body.forEach(coordinates => {

            const segment = document.createElement('div')

            segment.className = 'snake-segment'
            segment.style.position = 'absolute'
            segment.style.backgroundColor = 'green'
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


    checkCollision() {
        console.log('Checking for collision...')
        const head = this.body[0]
        console.log('Head position:', head.x, head.y)
        if (head.x <= 0 || head.x >= (this.boardWidth - 1)|| head.y <= 0 || head.y >= (this.boardHeight - 1)) {
            console.log(this.boardHeight)
            alert('Game Over!')
            this.reset()
        }
    }

    eatApple() {
        const tail = { ...this.body -1 }
        this.body.push(tail)

        this.game.apple.remove()

        this.game.generateFood()
    }

    reset() {
        this.direction = undefined

        this.body = [
            { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }
        ]

    }
}