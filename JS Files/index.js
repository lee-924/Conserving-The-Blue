
let cont = document.querySelector('.container')
let box1 = document.querySelector('.box1')

let x = 10;
let y = 10;
const speed = 50;

let contWidth = cont.clientWidth;
let contHeight = cont.clientHeight;
let boxWidth = box1.clientWidth;
let boxHeight = box1.clientHeight;


window.addEventListener("keydown",(e) => {
    if (e.key === "w") y -= speed;
    if (e.key === "s") y += speed;
    if (e.key === "a") x -= speed;
    if (e.key === "d") x += speed;

    if(x >= 0 && x <= contWidth - boxWidth) newX = x
    if(y >=0 && y <= contHeight - boxHeight) newY = y

    box1.style.top = newY + 'px';
    box1.style.left = newX + "px";
})

console.log('lol')