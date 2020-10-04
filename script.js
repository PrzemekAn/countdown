const dateArr = [...document.querySelectorAll('.number')];
const newYear = '1 Jan 2021';

function timer() {
    const newYearsEve = new Date(newYear);
    const currentTime = new Date();
    let totalSeconds = (newYearsEve - currentTime) / 1000;

    let days = Math.floor(totalSeconds / (60 * 60 * 24));
    let hours = Math.floor(totalSeconds / (60 * 60)) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, seconds)

    dateArr[0].textContent = days;
    dateArr[1].textContent = hours < 10 ? '0' + hours : hours;
    dateArr[2].textContent = minutes < 10 ? '0' + minutes : minutes;
    dateArr[3].textContent = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(timer, 1000);