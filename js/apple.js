class Apple {
    constructor(board, gameSize, cellSize, gameSpecs) {
        this.board = board
        this.cellSize = cellSize
        this.gameSize = gameSize
        this.gameSpecs = gameSpecs
        this.food = null
        this.placeApple()
    }
    placeApple() {
        this.food = document.createElement('div');
        const foodPosition = {
            x: Math.floor(Math.random() * this.gameSpecs.rows) * this.cellSize.width,
            y: Math.floor(Math.random() * this.gameSpecs.cols) * this.cellSize.height
        }
        console.log(foodPosition)
        this.food.style.position = 'absolute';
        this.food.style.backgroundColor = 'red';
        this.food.style.width = `${this.cellSize.width}px`;
        this.food.style.height = `${this.cellSize.height}px`;
        this.food.style.top = `${foodPosition.y}px`;
        this.food.style.left = `${foodPosition.x}px`;
    
        this.board.appendChild(this.food);
    }

    remove(){
        this.board.removeChild(this.food)
    }

    moveElements(){
        this.snake = new Snake(this.foodPosition)
    }
    // SITUAR LA MANZANA EN UNA CASILLA RANDOM - check
    // DETECTAR COLISIÓN ENTRE SNAKE Y MANZANA
    // SACAR LA MANZANA DEL DOM Y SUMAR PUNTOS
    // CREAR OTRA MANZANA RANDOM  - ESTO SERÍA CREAR UNA NEW APPLE DESDE EL GAME
}