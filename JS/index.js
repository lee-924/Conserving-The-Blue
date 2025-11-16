let PlayGame = document.querySelector(".levels");
let PlayGameBtn = document.querySelector(".playGameBtn");

PlayGameBtn.addEventListener("click", () => {
  PlayGame.style.display = "flex";
  PlayGame.style.animationPlayState = 'running'

});

let cancel = document.querySelector(".c1");
cancel.addEventListener("click", () => {
  PlayGame.style.display = "none";
});


let settingsBtn = document.querySelector('.settings')
let setDiv = document.querySelector('.settingsDiv')

settingsBtn.addEventListener('click', () => {
  setDiv.style.display = 'flex'
})

let cancel2 = document.querySelector(".c2");
cancel2.addEventListener("click", () => {
  setDiv.style.display = "none";
});

/* LEVEL 1 */
let lvl1 = document.querySelector(".lvl1");
let gng = document.querySelector('.WCG')
lvl1.addEventListener("click", () => {
    gng.innerHTML = 'Starting...'
    setTimeout(() => {
        window.location.href = "Game.html";
  },2000)
});

let gameCount = JSON.parse(localStorage.getItem('gameCount'))
console.log(gameCount)
if (gameCount) {
let TotalGame = `<p>Total Game played: ${gameCount.TGameCount}</p>`
let winGame = `<p>Total Game Won: ${gameCount.winGameCount}</p>`
let loseGame = `<p>Total Game Lost: ${gameCount.loseGameCount}</p>`
let totalScore = `<p>Total Score: ${gameCount.score}</p>`

let stat = document.querySelector('.innerStat')
stat.innerHTML = TotalGame+winGame+loseGame+totalScore
} 
else {}

let resetStat = document.querySelector('.resetStat')
resetStat.addEventListener('click', () => {
  localStorage.removeItem('gameCount')
  window.location.href = 'index.html'
})