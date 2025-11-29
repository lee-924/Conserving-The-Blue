

/* START BUTTON or BACKGROUND SONG */
let startBtn = document.querySelector('.startGame')
let startDiv = document.querySelector('.startDiv')
let bgAudio = document.querySelector('.bgSong')
startBtn.addEventListener('click', () => {
  startDiv.style.display = 'none'


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
}) })

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
let creditBtn = document.querySelector('.creditBtn')
creditBtn.addEventListener('click', () => {
  setTimeout(()=> {
    window.location.href = 'credits.html'
  },1200)
    
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

esterEgg = 0
starFish = document.querySelector('.starFish')
blueFish = document.querySelector('.blueFish')

starFish.addEventListener('click', () => {
  starFish.style.display = 'none'
  esterEgg ++
  checkEaster(esterEgg)
})

blueFish.addEventListener('click', () => {
  blueFish.style.display = 'none'
  esterEgg ++
  checkEaster(esterEgg)
})

let starSc = document.querySelector('.eSc')

function checkEaster(e) { 
  if (e==1) { 
    alert('ACHIEVEMENT UNLOCKED: CATCH THE FISHES FOR THE FIRST TIME!!')
    starSc.innerHTML = '1/3'
  }
  else if (e==5) {
    alert('ACHIEVEMENT UNCLOCKED: CATCH THE FISHES 5 TIMES!! ')
    starSc.innerHTML = '2/3'
  }
  else if (e==10) {
    alert('ACHIEVEMENT UNLOCKED: CATCH THE FINSIHES 10 TIMES!! (no more after this so dont waste time)')
    starSc.innerHTML = '3/3'
  }
}

setInterval(() => {
  starFish.style.display = 'block'
  blueFish.style.display = 'block'
  let x = Math.random();
  let h = ['20vh','56vh','35vh','45vh']
  let c = 0
  starFish.style.top = h[c]
  c++
  if (c==3) { 
    c = 0
  }
  blueFish.style.top = h[c]

  // Remove previous animation to restart
  starFish.style.animation = "none";
  blueFish.style.animation = 'none'

  // Force reflow so animation can restart
  starFish.offsetHeight;
  blueFish.offsetHeight;

  if (x > 0.5) {
    starFish.style.animation = "LRfish 8s linear 1"; // play once
    blueFish.style.animation = "RLfish 3s linear 1"
  } else {
    starFish.style.animation = "RLfish 3s linear 1"; // play once
    blueFish.style.animation = "LRfish 6s linear 1"
  }

}, 10000);

