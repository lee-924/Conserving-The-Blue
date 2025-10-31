let PlayGame = document.querySelector('.levels')
let PlayGameBtn = document.querySelector('.playGameBtn')

PlayGameBtn.addEventListener('click', () => {
    PlayGame.style.display = 'flex'
})

let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
    PlayGame.style.display = 'none'
})

/* LEVEL 1 */
let lvl1 = document.querySelector('.lvl1')
lvl1.addEventListener('click', () => {
    window.location.href = 'Game.html'
})