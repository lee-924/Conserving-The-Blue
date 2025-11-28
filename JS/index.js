/* BACKGROUND SONG */
let bgAudio = document.querySelector('.bgSong')
bgAudio.volume = 0.2;
bgAudio.loop = true
bgAudio.play()
let st = true 
let muteBtn = document.querySelector('.mute')
muteBtn.addEventListener('click', () => {
  if (st) {
    st = false
  bgAudio.loop = false;
  bgAudio.pause() 
  muteBtn.innerHTML = 'Start/Continue Song'}
  else { 
    bgAudio.loop = true;
    bgAudio.play()
    st = true
    muteBtn.innerHTML = 'Pause/Mute Song'
  }
})

/* PLAY GAME BUTTON */

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


/*  SETTINGS BUTTON  */
let settingsBtn = document.querySelector('.settings')
let setDiv = document.querySelector('.settingsDiv')

settingsBtn.addEventListener('click', () => {
  setDiv.style.display = 'flex'
  setDiv.style.animationPlayState = 'running'
})

let cancel2 = document.querySelector(".c2");
cancel2.addEventListener("click", () => {
  setDiv.style.display = "none";
});

/* CREDIT BUTTON */
let creditDiv = document.querySelector('.creditDiv')
let creditBtn = document.querySelector('.creditBtn')
creditBtn.addEventListener('click', () => {
  creditDiv.style.display = 'flex'
  creditDiv.style.animationPlayState = 'running'
})

let cancel3 = document.querySelector('.c3')
cancel3.addEventListener('click', () => {
  creditDiv.style.display = 'none'
})

/* LEVEL 1 */
let lvl1 = document.querySelector(".lvl1");
let gng = document.querySelector('.WCG')
lvl1.addEventListener("click", () => {
    gng.innerHTML = 'Starting...'
    setTimeout(() => {
        window.location.href = "Game.html";
  },2000)
});

/* LEVEL 2 */
let lvl2 = document.querySelector(".lvl2");
let gng2 = document.querySelector('.WCG2')
lvl2.addEventListener("click", () => {
    gng2.innerHTML = 'Starting...'
    setTimeout(() => {
        window.location.href = "levelTwo.html";
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

/* CLICK SOUND */
let buttons = document.querySelectorAll('.but')
let clickSound = document.querySelector('.click')
clickSound.volume = 0.4
buttons.forEach((ind) => {
  ind.addEventListener('click', () => {
    clickSound.currentTime = 0
    clickSound.play()

  })
})