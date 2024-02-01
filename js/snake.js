class Snake {
    constructor(board, cellSize, gameSpecs) {

        this.board = board
        this.cellSize = cellSize
        this.direction = 'right'
        this.boardWidth = gameSpecs.cols
        this.boardHeight = gameSpecs.rows
        this.totalScore = document.querySelector('#highScore')
        this.score = gameSpecs.score
        
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
        const head = this.body[0]
        if (head.x <= 0 || head.x >= (this.boardWidth - 1)|| head.y <= 0 || head.y >= (this.boardHeight - 1)) {
            this.totalScore.innerHTML = `Your Score was: ${this.game.gameSpecs.score}`
            this.gameOver()
        }
    }

    grow(){
        const snakeTail = this.body[this.body.length -1]
        const newSegment ={
            x: snakeTail.x,
            y: snakeTail.y
        }
        this.body.push(newSegment)
    }


    gameOver(){
        this.cleanSnake()
        gameView.style.display = 'none' 
        menuView.style.display = 'none' 
        endView.style.display = 'flex'
        this.body = [
            { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }
        ]

    }
    
}