class Game {

    constructor() {

        this.board = document.querySelector('#board')
        this.startButton = document.querySelector('#startButton')
        this.currentScore = document.querySelector('#currentScore')


        this.gameSize = {
            width: 600,
            height: 600
        }

        this.cellSize = {
            width: 30,
            height: 30
        }

        this.gameSpecs = {
            score : 0,
            rows: 20,
            cols: 20,
        }

        this.snake = undefined
        this.apples = undefined

        this.frameCounter = 0
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
        this.snake = new Snake(this.board, this.cellSize, this.gameSpecs)
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


    didCollide() {

        const snakeHead = document.querySelector('.snake-segment')

        const snakeRect = snakeHead.getBoundingClientRect()
        const appleRect = this.apple.food.getBoundingClientRect()

        console.log('PP', appleRect, 'sn', snakeRect)

        if (
            snakeRect.left < appleRect.right &&
            snakeRect.right > appleRect.left &&
            snakeRect.top < appleRect.bottom &&
            snakeRect.bottom > appleRect.top
          ) {
            this.eatApple()
            return true;
          } else {
            return false;
          }
     
      }


    eatApple() {
        this.apple.food.remove()
        this.gameSpecs.score += 1
        this.currentScore.innerHTML = `Score: ${this.gameSpecs.score}`
        this.snake.grow()
        this.generateFood()
        this.frameCounter = 0
    }


    repositionApple(){
        if (this.frameCounter == 20){
            this.apple.food.remove()
            this.generateFood()
            this.frameCounter = 0
        }
    }
    startGameLoop() {   
        setInterval(() => {
            this.snake.draw()
            this.didCollide()
            this.frameCounter++
            this.repositionApple()
        }, 150)
    }
}