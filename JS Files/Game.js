let cont = document.querySelector('.cont')
let player = document.querySelector('.player')
const grapple = document.createElement("div");
grapple.id = "grapple";
document.body.appendChild(grapple);

let trashCount = 0
function spawnTrash() {
    const trash = document.createElement('div')
    trash.className='trash'
    trash.style.top = Math.random() * (window.innerHeight -150) + 'px'
    trash.style.left = Math.random() * (window.innerWidth - 150) + 'px'
    cont.appendChild(trash)
    trashCount+=1
    
    if (trashCount===10) {
        clearInterval(interval);
    }

    trash.addEventListener("click", (e) => startGrapple(e, trash));
   
    
}

let interval = setInterval(spawnTrash,1000);
let scoreHTML = document.querySelector('.score')
let score = 0
function startGrapple(e,trash) {
    
     setTimeout(() => {
        grapple.style.display = 'none'
    },500)
    score += 1
    scoreHTML.innerHTML = 'Score: '+score


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
 

