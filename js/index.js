const restartButton = document.querySelector('#restartButton');

restartButton.onclick = () => {
    const game = new Game()
    game.start()
}