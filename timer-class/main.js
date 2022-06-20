class Clock {
    constructor() {
        document.querySelector('.stop')
            .addEventListener('click', function () {
                clearInterval(timerID)
            })
        let timerID = setInterval(() => {
            const date = new Date();
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
}
new Clock()

