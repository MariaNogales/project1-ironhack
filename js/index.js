const startButton = document.querySelector('#startButton');
const restartButton = document.querySelector('#restartButton')

startButton.onclick = () => {
    console.log('Button Clicked')
    gameView.style.display = 'flex' 
    menuView.style.display = 'none' 
    endView.style.display = 'none'
    const game = new Game()
    game.start()
}


restartButton.onclick = () => {
    console.log('restart clicked')
    location.reload()
    
}