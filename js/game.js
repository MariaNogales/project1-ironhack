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
    }

    start() {
        this.setDimensions()
        this.appendCells()
        this.createElements()
        this.setEventListeners()
        this.startGameLoop()
    }

    createElements() {
        this.snake = new Snake(this.board, this.cellSize)
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

    startGameLoop() {

        setInterval(() => {
            this.snake.draw()
        }, 1000)
    }
}