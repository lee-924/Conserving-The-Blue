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
let diagArray = ['lee: Omg i cant believe how dirty the ocean is', 'Carmen: I Know right, humans are so messy', 'lee: Come on, I will clean this area, you go to the other side', 'Carmen: on it! ']

let c = 0
function space(e)  {
if (e.code==='Space') { 
    let d =  diagArray[c]
    if (d!==undefined) {
    dialogue.innerHTML = d
    c+=1       }
    else { 

        gameStart()
        document.removeEventListener('keydown',space)
        diag.style.display = 'none'
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
    console.log(html)
    trash.innerHTML = html 
    trash.style.top = Math.random() * (window.innerHeight -150) + 'px'
    trash.style.left = Math.random() * (window.innerWidth - 150) + 'px'
    cont.appendChild(trash)
    trashCount+=1
    trash.addEventListener("click", (e) => startGrapple(e, trash));
   
    
}

function gameStart() { 
/* TIMER FUNCTION */
let timer = document.querySelector('.timer')
counter = 15;
let counterInterval = setInterval(() => {
    counter-=1
    timer.innerHTML = counter
    if (counter===0) {
        if (score===10) {
        clearInterval(counterInterval) }

        else {clearInterval(counterInterval)
        Restart(score,'fail') }
        
    }
},1000) 

let p = 0
let trashCounter = setInterval(() => {
    spawnTrash()
    p+=1

    if (p===10) {
        clearInterval(trashCounter)
    }
},1000)

}
let scoreHTML = document.querySelector('.score')
let score = 0
function startGrapple(e,trash) {
    
     setTimeout(() => {
        grapple.style.display = 'none'
    },500)
    score += 1
    scoreHTML.innerHTML = `Score: `+score
    if (score===10) { 
    Restart(10,'pass')}


    console.log(score)
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
    grapple.style.top = y1 + "px";
    grapple.style.width = distance + "px";
    grapple.style.transform = `rotate(${angle}deg)`;
    grapple.style.display = "block";

    trash.style.backgroundColor = 'green'

    setTimeout(() => {
        trash.style.display = 'none'
    },500)
    


}

/* RESTART DIV */
function Restart(Score,conf) {
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
    emj.innerHTML = '😜'
    msg.innerHTML = 'Mission Passed Succesfully'
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
        emj.innerHTML = '🥺'
        msg.innerHTML = 'TIME OUT!!'
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

let gameArea = document.querySelector('.gameBg')
let rand = Math.floor(Math.random() * (15-5+1) + 5) 
for (let i=0; i<rand; i++) {
    let bub = document.createElement('div')
    bub.classList.add('bubble')
    gameArea.appendChild(bub);

}


console.log(rand)
let bubbles = document.querySelectorAll('.bubble')
bubbles.forEach((ele) => {
    let coord = ele.getBoundingClientRect()
    console.log(coord.x,coord.y)
    console.log(Math.random()* (10-5) + 5)
    ele.style.top = (Math.random() * ((window.innerHeight-100) - 20)) + 20 + 'px'
    ele.style.left = (Math.random() * ((window.innerWidth-150) - 20)) + 20 +'px'
 
})

