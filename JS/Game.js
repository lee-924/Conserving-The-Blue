/* HOME BUTTON */
let home = document.querySelector('.home')
let homeDisp = document.querySelector('.homeDisp')
home.addEventListener('click', () => {
    homeDisp.style.display = 'block'

    let cancel = document.querySelector('.cancel')
    cancel.addEventListener('click', () => {
        homeDisp.style.display = 'none'

    })

    let backToHome = document.querySelector('.backToHome')
    backToHome.addEventListener('click',() => {
        window.location.href = 'index.html'
    })
})



let diag = document.querySelector('.diag')
setTimeout(() => {
    diag.style.display = 'block'
},6500)

let player = document.querySelector('.player')
let dialogue = document.querySelector('.dialogue')
let diagArray = [
  "<p>Agent Koala:<br>You must be Agent lee, Anyhow, We have been assigned to find the mystery behind so much trash in the ocean. Lets get on it!</p>",
  "<p>Agent lee:<br>Uhh Hi.. not really a great way to introduce yourself. </p>",
  "<p>Agent Koala:<br>We dont have time for that, I just want to get the job done.</p>",
  "<p>Agent lee:<br>okay Ms random, but i dont see no trash in this area..</p>",
  "<p>Agent Koala:<br>sigh* I am Agent Koala, and you will see trash appear one by one in your radar as it detects it.</p>",
  "<p>Agent lee:<br>sure ms...koala??, so what do we do first?</p>",
  "<p>Agent Koala:<br>thats AGENT koala! and yeah we have to clear this area first to see the source of the trash.</p>",
  "<p>Agent lee:<br>okay AGENT koala, Let me handle it.</p>",
  "<p>Agent Koala:<br>I dont really trust people with work, as they are very slow like koalas searching for food.</p>",
  "<p>Agent lee:<br>look whose talki-- , nevermind, Dont worry I can assure you I will clean this area in no time!</p>",
  "<p>Agent Koala:<br>I hope so... better clean up the area within one minute or else I will request the boss to change the agent.</p>",
  "<p>Agent lee:<br>woah you sound serious... fine...lets get on it shall we</p>"
]
let c = 0
function space(e)  {
if (e.code==='Space') { 
    let d =  diagArray[c]
    if (d!==undefined) {
    dialogue.innerHTML = d
    c+=1       }
    else { 

        dialogue.style.display = 'none'
        diag.style.display = 'none'
        gameStart()
        document.removeEventListener('keydown',space)
        player.innerHTML = `<img class='mcLee' src="images/agent lee gameMode.png" alt="lol">`
        player.style.animationName = 'backToBottom'

        let p2 = document.querySelector('.player2')
        p2.style.animationName = 'cp2'
        setTimeout(() => {
            p2.style.display = 'none'
        },3000)
        
        
        c=0;

    }
}
}
document.addEventListener('keydown',space)

let trashCounter;
function gameStart() { 

lvlMusic.volume = 0.3;
lvlMusic.loop = true
lvlMusic.play()
/* TIMER FUNCTION */
let timer = document.querySelector('.timer')

counter = 60;
let counterInterval = setInterval(() => {
    counter-=1
    timer.innerHTML = counter
    if (counter===0) {
        if (score===60) {
        clearInterval(counterInterval) }

        else {clearInterval(counterInterval)
        Restart(score,'fail', 'Time Ran Out.. SKILL ISSUE')
         }
        
    }
},1000) 

let p = 0
    trashCounter = setInterval(() => {
    spawnTrash()
    p+=1

    if (p===60) {
        clearInterval(trashCounter)
    }
},950)

let fishes = document.querySelectorAll('.fishes')
fishes.forEach((ind) => {
    ind.style.display = 'block'
    ind.style.animationPlayState = 'running'
    ind.addEventListener('click', () => {
        Restart(score,'fail','Killed a fish.. you psycho!!')
        clearInterval(counterInterval)
    })

})

}


let cont = document.querySelector('.cont')

const grapple = document.createElement("div");
grapple.id = "grapple";
document.body.appendChild(grapple);

let trashCount = 0
function spawnTrash() {
    const trash = document.createElement('div')
    trash.className='trash'
    let query = [`<img src="../images/redCan.png" alt="red can">`,`<img src="../images/sodaCan.png" alt="" />`]
    let html = query[Math.floor(Math.random() * query.length)]
    trash.innerHTML = html 
    
    trash.style.top = Math.random() * (window.innerHeight -150) + 'px'
    trash.style.left = Math.random() * (window.innerWidth - 150) + 'px'
 
 
    cont.appendChild(trash)
    trashCount+=1
    trash.addEventListener("click", (e) => startGrapple(e, trash));
   
    
}


let lvlMusic = document.querySelector('.lvlMusic')



let scoreHTML = document.querySelector('.score')
let score = 0
function startGrapple(e,trash) {
    
     setTimeout(() => {
        grapple.style.display = 'none'
    },500)
    score += 1
    scoreHTML.innerHTML = `Score: `+score
    if (score===58) { 
    Restart(58,'pass','Challenge Completed!!!')}


  
    const playerRect = player.getBoundingClientRect()
    const trashRect = trash.getBoundingClientRect()

    let x1 = playerRect.left + playerRect.width / 2
    const y1 = playerRect.top + playerRect.height / 2;
    const x2 = trashRect.left + trashRect.width / 2;
    const y2 = trashRect.top + trashRect.height / 2;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    grapple.style.left = x1 + "px";
    grapple.style.top = y1+30 + "px";
    grapple.style.width = distance + "px";
    grapple.style.transform = `rotate(${angle}deg)`;
    grapple.style.display = "block";

    trash.style.backgroundColor = 'green'

    setTimeout(() => {
        trash.style.display = 'none'
    },500)
    


}

/* RESTART DIV */
function Restart(Score,conf,msgs) {
let restartDiv = document.querySelector('.restart')
let rBtn = document.querySelector('.res')
let hBtn = document.querySelector('.exit')

let msg = document.querySelector('.message')
let emj = document.querySelector('.emj')
let sc = document.querySelector('.sc')


rBtn.addEventListener('click', () => {
    window.location.href = 'Game.html'
})
hBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
restartDiv.style.display = 'flex'


    
let gameCount = JSON.parse(localStorage.getItem('gameCount'))
if (gameCount) {

}
else { gameCount = {TGameCount: 0,winGameCount:0,loseGameCount:0,score:0} }

if (conf==='pass') {
    clearInterval(trashCounter)
    lvlMusic.loop = false;
    lvlMusic.pause()
    lvlMusic.currentTime = 0;

    let gameWon = document.querySelector('.gameWon')
    gameWon.volume = 0.4;
    gameWon.currentTime = 0; 
    gameWon.play()

    emj.innerHTML = '😜'
    msg.innerHTML = msgs
    msg.style.color = 'lime'
    let scc = `score:  + ${Score}`
    sc.innerHTML = scc
    let res = document.querySelector('.res')
    res.innerHTML = 'Next Level'

    rBtn.addEventListener('click', () => {
        window.location.href = 'levelTwo.html'})

    cont.style.backgroundColor = 'green';

    gameCount.TGameCount+=1
    gameCount.winGameCount+=1
    gameCount.score+= Score
    localStorage.setItem('gameCount',(JSON.stringify(gameCount)))
}

else if (conf==='fail') {
        clearInterval(trashCounter)
        lvlMusic.loop = false;
        lvlMusic.pause()
        lvlMusic.currentTime = 0;

        let gameLost = document.querySelector('.gameLost')
        gameLost.volume = 0.4;
        gameLost.play()

        emj.innerHTML = '🥺'
        msg.innerHTML = msgs
        msg.style.color = 'red'
        let scc = `score:  + ${Score}`
        sc.innerHTML = scc

        rBtn.addEventListener('click', () => {
            window.location.href = 'Game.html' })

        cont.style.backgroundColor = 'darkred'

        gameCount.TGameCount+=1
        gameCount.loseGameCount+=1
        gameCount.score+= Score
        localStorage.setItem('gameCount',(JSON.stringify(gameCount)))

} }


/* BACKGROUND ANIMATIONS --- */
function bubbleGenarator()  {
let gameArea = document.querySelector('.gameBg')
let rand = Math.floor(Math.random() * (15-5+1) + 5) 
for (let i=0; i<rand; i++) {
    let bub = document.createElement('div')
    bub.classList.add('bubble')
    gameArea.appendChild(bub); }





let bubbles = document.querySelectorAll('.bubble')
bubbles.forEach((ele) => {
    ele.style.bottom = (Math.random() * (20 -(cont.offsetHeight))) + 20 + 'px'
    ele.style.left = (Math.random() * ((window.innerWidth-150) - 20)) + 20 +'px'
 
})}

bubbleGenarator()





