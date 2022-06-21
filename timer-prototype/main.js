function Clock() {
  this.timerID = setInterval(() => {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }
    const clock = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".clock").innerHTML = clock;
  }, 1000)
}

const person = new Clock()

document.querySelector('.stop')
.addEventListener('click', ()=> {
  person.stop()
})

Clock.prototype.stop = function () {
  clearInterval(this.timerID)
}

