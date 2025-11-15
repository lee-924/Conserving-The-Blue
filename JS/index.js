let PlayGame = document.querySelector(".levels");
let PlayGameBtn = document.querySelector(".playGameBtn");

PlayGameBtn.addEventListener("click", () => {
  PlayGame.style.display = "flex";
  PlayGame.style.animationPlayState = 'running'

});

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  PlayGame.style.display = "none";
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
