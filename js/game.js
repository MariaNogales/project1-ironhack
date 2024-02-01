class Game {

    constructor() {

        this.board = document.querySelector('#board')
        this.startButton = document.querySelector('#startButton')

        this.foodPosition = { x: 5, y: 5 }


        this.gameSize = {
            width: 300,
            height: 300
        }

        this.cellSize = {
            width: 30,
            height: 30
        }

        this.gameSpecs = {
            score: 0,
            maxScore: 0,
            rows: 10,
            cols: 10
        }

        this.snake = undefined
        this.apple = undefined
    }

    start() {
        this.setDimensions()
        this.appendCells()
        this.createElements()

        this.setEventListeners()
        this.startGameLoop()
        this.snake.game = this
    }

    createElements() {
        this.snake = new Snake(this.board, this.cellSize, this.gameSpecs.cols, this.gameSpecs.rows)
        this.generateFood()
    }

    setDimensions() {
        this.board.style.width = `${this.gameSize.width}px`
        this.board.style.height = `${this.gameSize.width}px`
    }

    appendCells() {

        for (let row = 0; row < this.gameSpecs.rows; row++) {

            for (let col = 0; col < this.gameSpecs.cols; col++) {

                const cell = document.createElement('div')
                cell.style.position = `absolute`

                cell.style.width = `${this.cellSize.width}px`
                cell.style.height = `${this.cellSize.height}px`
                cell.style.left = `${col * this.cellSize.width}px`
                cell.style.top = `${row * this.cellSize.width}px`

                cell.style.border = `1px solid`

                this.board.appendChild(cell)
            }
        }
    }

    setEventListeners() {

        document.onkeydown = event => {

            switch (event.key) {
                case 'ArrowUp':
                    this.snake.turnUp()
                    break;
                case 'ArrowDown':
                    this.snake.turnDown()
                    break;
                case 'ArrowRight':
                    this.snake.turnRight()
                    break;
                case 'ArrowLeft':
                    this.snake.turnLeft()
                    break;
            }
        }
    }

    generateFood(){
        this.apple = new Apple(this.board, this.gameSize, this.cellSize, this.gameSpecs)
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

    eatApple() {
        const tail = { ...this.body -1 }
        this.body.push(tail)

        this.game.apple.remove()

        this.game.generateFood()
    }

    checkCollisionFood() {
        if (this.didCollide(this.apple)) {
            this.snake.eatApple();
        }
    }

    startGameLoop() {

        setInterval(() => {
            this.snake.draw()
            this.checkCollisionFood()
        }, 200)
    }
}