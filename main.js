const iconConatiner = document.querySelector(".icon-conatiner");
const initialBtns = document.querySelectorAll(".initial");

var timeInterval = 400;

iconConatiner.addEventListener("click", (e) => {
  iconConatiner.classList.toggle("initial");
  initialBtns[5].classList.toggle("initial");
  initialBtns.forEach((initialBtn, key) => {
    if (key != 0 && key != 5) {    
      var timeout = key*timeInterval
      setTimeout(() => {       
        initialBtn.classList.toggle("initial")
      }, timeout);
    }
  })
})