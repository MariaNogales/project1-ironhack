class Apple {

    constructor(board, cellSize, gameSize, apple, foodPosition) {
        this.board = board
        this.cellSize = cellSize
        this.gameSize = gameSize
        this.apple = apple
        this.foodPosition = foodPosition
    }

    generateFood() {

        const horizontal = Math.floor(Math.random() * 300)
        const vertical = Math.floor(Math.random() * 300)

        const foodPosition = {
            x: horizontal,
            y: vertical
        }

        const fruits = document.createElement('div')

        fruits.className = 'fruits'
        fruits.style.position = 'absolute'
        fruits.style.backgroundColor = 'red'
        fruits.style.width = '30px'
        fruits.style.height = '30px'
        fruits.style.top = `${vertical}px`
        fruits.style.left = `${horizontal}px`

        this.board.appendChild(fruits)
    }

}