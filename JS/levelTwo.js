let homeBtn = document.querySelector('.home')
let homeDiv = document.querySelector('.homeDisp')
homeBtn.addEventListener('click', () => {
    homeDiv.style.display= 'flex'
    homeDiv.style.AnimationPlayState = 'running'

})

let c1 = document.querySelector('.c1')
c1.addEventListener('click', () => {
    homeDiv.style.display= 'none'
})

let backToHome = document.querySelector('.backToHome')
backToHome.addEventListener('click', () => {
    window.location.href = 'index.html'
})

/* Dialogue system - first */

let next = document.querySelector('.next')
let diagDiv = document.querySelector('.diagDiv')
let diag = document.querySelector('.diag')
let sp = document.querySelector('.space')
let openDiv = document.querySelector('.od')
let diags = [
  "<p class='speaker'>Agent Koala:</p><p class='line'>wow, This place looks pretty clean. Anyhow.. since the place is clear now, Our team has planted these pipes which will release chemicals to clean the ocean.</p>",
  "<p class='speaker'>Agent Lee:</p><p class='line'>wow only?? thats it?? woah cleaned this whole place in one minute for that??</p>",
  "<p class='speaker'>Agent Koala:</p><p class='line'>Atleast I said wow.</p>",
  "<p class='speaker'>Agent Lee:</p><p class='line'>ugh Whatever, now we need to activate these pipes, You can handle the circuit and I will adjust its pressure to turn it on.</p>",
  "<p class='speaker'>Agent Koala:</p><p class='line'>You better not mess this up, its our only chance.</p>",
  "<p class='speaker'>Agent Lee:</p><p class='line'>You and your pesky trust issues...</p>",
  "<p class='speaker'>Agent Koala:</p><p class='line'>Alright lets see the circuit....</p>"
];

let m1 = document.querySelector('.m1')
let m2 = document.querySelector('.m2')
let c = 0
setTimeout(() => {diagDiv.style.display = 'block'},5000)

document.addEventListener('keydown',space) 
document.addEventListener('pointerdown',space)
    function space(s) {
    if (s.type === 'keydown') {
        if (s.code==='Space') {
        if (diags[c]!==undefined) { 
            next.volume = 0.4
            next.play()
            next.currentTime = 0
            if (c%2===0) {
                m2.volume = 0.4
                m2.play()
                setTimeout(() => {
                    m2.pause()
                    m2.currentTime = 4
                },1500)

            }
            else {
                m1.volume = 0.4
                m1.play()
                m1.currentTime = 0
            }
            diag.innerHTML = diags[c]
            c++
        }
        else { 
            document.removeEventListener('keydown',space)
            document.removeEventListener('pointerdown',space)
            diagDiv.style.display = 'none'
            
            diag.style.display = 'none'
            sp.style.display = 'none'
            setTimeout(() => {
                gameStart()
            },1000)
            
        }
    } }
    else { 
        if (diags[c]!==undefined) { 
            next.volume = 0.4
            next.play()
            next.currentTime = 0
            if (c%2===0) {
                m2.volume = 0.4
                m2.play()
                setTimeout(() => {
                    m2.pause()
                    m2.currentTime = 4
                },1500)

            }
            else {
                m1.volume = 0.4
                m1.play()
                m1.currentTime = 0
            }
            diag.innerHTML = diags[c]
            c++
        }
        else { 
            document.removeEventListener('keydown',space)
            document.removeEventListener('pointerdown',space)
            diagDiv.style.display = 'none'
            
            diag.style.display = 'none'
            sp.style.display = 'none'
            setTimeout(() => {
                gameStart()
            },1000)
            
        }

    }
        
    } 

    let circuitDiv = document.querySelector('.circuitDiv')
    let innerCircuit = document.querySelector('.innerCircuit')

    let b1 = document.querySelector('.b1')
    let b2 = document.querySelector('.b2')
    let b3 = document.querySelector('.b3')
    let b4 = document.querySelector('.b4')

    let b5 = document.querySelector('.b5')
    let b6 = document.querySelector('.b6')
    let b7 = document.querySelector('.b7')
    let b8 = document.querySelector('.b8')



    let int = document.querySelector('.int')
    let confirm = document.querySelector('.confirm')
    let intText = document.querySelector('.intText')
    let y = false
    let p = false
    let r = false
    let b = false

    let click = document.querySelector('.click')
function gameStart() { 
    openDiv.volume = 0.8
    openDiv.currentTime = 0;
    openDiv.play()
    circuitDiv.style.display = 'flex'
    setTimeout(() => {
        innerCircuit.style.display= 'flex'
    },2000) 
    confirm.addEventListener('click', () => {
        click.volume = 0.4
        click.play()
        click.currentTime = 0
        let val = int.value
        if (val==2504) {
            drawLineBetweenBalls(b1,b7)
            b1.style.backgroundColor = 'grey'
            b7.style.backgroundColor = 'grey'
            int.value = ''
            y = true
            allTrue(y,p,b,r)
        }
        else if (val==2610) {
            drawLineBetweenBalls(b2,b5)
            b2.style.backgroundColor = 'grey'
            b5.style.backgroundColor = 'grey'
            p = true
            int.value = ''
            allTrue(y,p,b,r)
        }
        else if (val==2202) {
                drawLineBetweenBalls(b3,b8)
                b3.style.backgroundColor = 'grey'
                b8.style.backgroundColor = 'grey'
                r = true
                int.value = ''
                allTrue(y,p,b,r)
        }
        else if (val==3107) {
                drawLineBetweenBalls(b4,b6)
                b4.style.backgroundColor = 'grey'
                b6.style.backgroundColor = 'grey'
                b = true
                int.value = ''
                allTrue(y,p,b,r)
        }
        else { 
            
            intText.innerHTML = 'WRONG COMBINATION'
            intText.style.color = 'red'
            setTimeout(() => {
                intText.innerHTML = 'Enter the correct combination: '
                intText.style.color = 'white'
            },2000)
            int.value = ''}

       
    })}


function drawLineBetweenBalls(ball1, ball2) {
  const parent = document.querySelector('.circuitDiv');
  const line = document.querySelector('.line1');

  // get positions relative to parent
  const rectParent = parent.getBoundingClientRect();
  const rect1 = ball1.getBoundingClientRect();
  const rect2 = ball2.getBoundingClientRect();

  const x1 = rect1.left - rectParent.left + rect1.width/2;
  const y1 = rect1.top - rectParent.top + rect1.height/2;
  const x2 = rect2.left - rectParent.left + rect2.width/2;
  const y2 = rect2.top - rectParent.top + rect2.height/2;

  // calculate length and angle
  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  // set line style
  line.style.width = length + "px";
  line.style.left = x1 + "px";
  line.style.top = y1 + "px";
  line.style.transform = `rotate(${angle}deg)`;
  
}
let gameWon = document.querySelector('.gameWon')
function allTrue(y,p,b,r) {
    if (y*p*b*r) { 
        intText.innerHTML = 'SUCCESFULL COMBINATION'
        intText.style.color = 'lime'
        circuitDiv.style.backgroundColor = 'green'
        setTimeout(() => {
            circuitDiv.style.display = 'none'
            diag2()
        },3000)

        
        gameWon.volume = 0.3
        gameWon.play()
        gameWon.currentTime = 0

        
    }
}

let diags2 = [
  '<p class="speaker">Agent Koala:</p><p class="line">Ok I turned on the circuit, Your turn now</p>',
  '<p class="speaker">Agent lee:</p><p class="line">Ay that was quick, aight my turn!!</p>',
  '<p class="speaker">Agent Koala:</p><p class="line">I hope you can handle it...</p>',
  '<p class="speaker">Agent lee:</p><p class="line">count on me</p>'
]

let lol = 0
function diag2() {
    diagDiv.style.display = 'block'
    diag.style.display = 'block'
    sp.style.display = 'block'
    diag.innerHTML = diags2[lol]

    document.addEventListener('keydown', space2)
    document.addEventListener('pointerdown',space2)
}

function space2(s) {
    if (s.type==='keydown') { 
        if (s.code==='Space') {
            if (diags2[lol]!==undefined) { 
                next.volume = 0.4
                next.play()
                next.currentTime = 0
                if (lol%2===0) {
                    m2.volume = 0.4
                    m2.play()
                    setTimeout(() => {
                        m2.pause()
                        m2.currentTime = 4
                    },1500)

                }
                else {
                    m1.volume = 0.4
                    m1.play()
                    m1.currentTime = 0
                }
                diag.innerHTML = diags2[lol]
                lol++
            }
            else { 
                document.removeEventListener('keydown',space2)
                document.removeEventListener('pointerdown',space2)
                diagDiv.style.display = 'none'
                diag.style.display = 'none'
                sp.style.display = 'none'

                pressureGame()
            }
        } } 
    else {

            if (diags2[lol]!==undefined) { 
                next.volume = 0.4
                next.play()
                next.currentTime = 0
                if (lol%2===0) {
                    m2.volume = 0.4
                    m2.play()
                    setTimeout(() => {
                        m2.pause()
                        m2.currentTime = 4
                    },1500)

                }
                else {
                    m1.volume = 0.4
                    m1.play()
                    m1.currentTime = 0
                }
                diag.innerHTML = diags2[lol]
                lol++
            }
            else { 
                document.removeEventListener('keydown',space2)
                document.removeEventListener('pointerdown',space2)
                diagDiv.style.display = 'none'
                diag.style.display = 'none'
                sp.style.display = 'none'

                pressureGame()
            }}}

let pipeGameDiv = document.querySelector('.pipeGameDiv')
let prog1 = document.querySelector('.prog1')
let prog2 = document.querySelector('.prog2')
let prog3 = document.querySelector('.prog3')

let pb1 = document.querySelector('.pb1')
let pb2 = document.querySelector('.pb2')
let pb3 = document.querySelector('.pb3')

let br1 = document.querySelector('.br1')
let br2 = document.querySelector('.br2')
let br3 = document.querySelector('.br3')

let pb1c = 0
let pb2c = 0
let pb3c = 0

let ps1 = false 
let ps2 = false 
let ps3 = false

let innerPipeDiv = document.querySelector('.innerPipeDiv')

let electricConnected = document.querySelector('.electricConnected')
let pipeAudio = document.querySelector('.pipeAudio')
let mute = document.querySelector('.mute')


function pressureGame() {
        openDiv.volume = 0.8
        openDiv.currentTime = 0;
        openDiv.play()

        pipeAudio.volume = 0.2
        pipeAudio.currectTime = 0
        pipeAudio.loop = true;
        pipeAudio.play()
        st = true

        mute.addEventListener('click', () => {
            if (st) {
                st = false
                pipeAudio.loop = false;
                pipeAudio.pause()
                mute.innerHTML = 'Play Music' }
            else { 
                pipeAudio.volume = 0.2
                pipeAudio.loop = true;
                pipeAudio.play()
                st = true
                mute.innerHTML = 'Mute Music'
            }
        })


    

    pipeGameDiv.style.display = 'flex'
    setTimeout(() => {
        innerPipeDiv.style.display = 'flex'
},2200)
    pb1.addEventListener('pointerdown', () => {
        prog1.innerHTML = pb1c
        pb1c +=1
        prog1.style.width = (pb1c/165) * 100 + '%'
        if (pb1c===165) { 
            br1.style.backgroundColor = 'red'
            prog1.style.display = 'none'
            ps1 = true
            pipeState(ps1,ps2,ps3)
            electricConnected.volume = 0.5
            electricConnected.currectTime = 0
            electricConnected.play()
        }
    })
    pb2.addEventListener('pointerdown', () => {
        prog2.innerHTML = pb2c
        pb2c += 1
        prog2.style.width =  (pb2c/143) * 100 + '%'
        if (pb2c===143) { 
            br2.style.backgroundColor = 'darkslateblue'
            prog2.style.display = 'none'
            ps2 = true
            pipeState(ps1,ps2,ps3)
            electricConnected.volume = 0.5
            electricConnected.currectTime = 0
            electricConnected.play()
        }
    })

    pb3.addEventListener('pointerdown', () => {
        prog3.innerHTML = pb3c
        pb3c += 1
        prog3.style.width =  (pb3c/6) * 100 + '%'
        if (pb3c===6) { 
            br3.style.backgroundColor = 'darkmagenta'
            prog3.style.display = 'none'
            ps3 = true
            pipeState(ps1,ps2,ps3)
            electricConnected.volume = 0.5
            electricConnected.currectTime = 0
            electricConnected.play()
        }
    })

}

function pipeState(ps1,ps2,ps3) {
    if (ps1*ps2*ps3) {
        setTimeout(() => {
            gameWon.volume = 0.3
            gameWon.play()
            gameWon.currentTime = 0},2000)
        pipeGameDiv.style.backgroundColor = 'green'
        let pYap = document.querySelector('.pYap')
        pYap.innerHTML = 'PIPE PRESSURE STABILIZED!!'

        setTimeout(() => {
            pipeGameDiv.style.display = 'none'
        },3000)

        pipeChange()
    }
}


function pipeChange() { 
    let gameEle = document.querySelector('.gameEle')
    gameEle.innerHTML =  `<img src='images/pipeFLow.gif' alt="pipe" class="pipe p1" /> <img src='images/pipeFLow.gif' alt="pipe" class="pipe p2" /> <img src='images/pipeFLow.gif' alt="pipe" class="pipe p3" />`
    let pipe = document.querySelectorAll('.pipe')
    pipe.forEach((ind) => {
        ind.style.height= '25vh' 
    })
    let cont = document.querySelector('.cont')
    cont.style.animationName = 'bgColor'
    
    diag3()

}



let diags3 = [
  '<p class="speaker">Agent Koala:</p><p class="line">Wow you actually did it. </p>',
  '<p class="speaker">Agent lee:</p><p class="line">I mean ..duhh?? it was fairly easy.</p>',
  '<p class="speaker">Agent Koala:</p><p class="line">Well look the waters color changed yayy</p>',
  '<p class="speaker">Agent lee:</p><p class="line">hehe all thanks to us!!</p>',
  '<p class="speaker">Agent Koala:</p><p class="line">you know maybe you ARE a trustable agent </p>',
  '<p class="speaker">Agent lee:</p><p class="line">woahh seriously? at the end of the game..mhm I mean mission?? right..</p>',
  '<p class="speaker">Agent Koala:</p><p class="line">shh... dont make me take it back...</p>'
]

let lol3 = 0
function diag3() {
    diagDiv.style.display = 'block'
    diag.style.display = 'block'
    sp.style.display = 'block'
    diag.innerHTML = diags3[lol3]

    document.addEventListener('keydown', space3)
    document.addEventListener('pointerdown', space3)
}

function space3(s) {
    if (s.tyle==='keydown') { 
        if (s.code==='Space') {
            if (diags3[lol3]!==undefined) { 
                next.volume = 0.4
                next.play()
                next.currentTime = 0
                if (lol3%2===0) {
                    m2.volume = 0.4
                    m2.play()
                    setTimeout(() => {
                        m2.pause()
                        m2.currentTime = 4
                    },1500)

                }
                else {
                    m1.volume = 0.4
                    m1.play()
                    m1.currentTime = 0
                }
                diag.innerHTML = diags3[lol3]
                lol3++
            }
            else { 
                document.removeEventListener('keydown',space3)
                diagDiv.style.display = 'none'
                diag.style.display = 'none'
                sp.style.display = 'none'

                setTimeout(finalDivfunc,2000)
            }
        } } 

    else { 
        if (diags3[lol3]!==undefined) { 
                next.volume = 0.4
                next.play()
                next.currentTime = 0
                if (lol3%2===0) {
                    m2.volume = 0.4
                    m2.play()
                    setTimeout(() => {
                        m2.pause()
                        m2.currentTime = 4
                    },1500)

                }
                else {
                    m1.volume = 0.4
                    m1.play()
                    m1.currentTime = 0
                }
                diag.innerHTML = diags3[lol3]
                lol3++
            }
        else { 
                document.removeEventListener('keydown',space3)
                diagDiv.style.display = 'none'
                diag.style.display = 'none'
                sp.style.display = 'none'

                setTimeout(finalDivfunc,2000)
            }

    }
        
    } 

    let finalDiv = document.querySelector('.finalDiv')
    let innerCredit = document.querySelector('.innerCredit')
    let creditBtn = document.querySelector('.creditBtn')
function finalDivfunc() { 
    openDiv.volume = 0.5
    openDiv.currentTime = 0;
    openDiv.play()
    finalDiv.style.display = 'flex'
    setTimeout(() => {
        innerCredit.style.display = 'flex'
    },2200)
    creditBtn.addEventListener('click', () => [
        window.location.href = 'credits.html'
    ])


}



