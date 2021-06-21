import CountdownTimer from './timer.js';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    inputDate: document.querySelector('#date'),
}



const timer = new CountdownTimer({
  selector: '#timer-1',
    onTick: updateClockFace,
    recordingTime,
  
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer))

function updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

function savedTime() {
    const time = localStorage.getItem('currentTime');
    updateClockFace(JSON.parse(time));
    refs.inputDate.valueAsNumber = localStorage.getItem('selectedDate');
}

function recordingTime() {
        const currentTime = Date.now();
    const selectedDate = refs.inputDate.valueAsNumber;
    localStorage.setItem('selectedDate', selectedDate);
    const deltaTime = selectedDate - currentTime;
    return timer.getTimeComponents(deltaTime);

    }

if (localStorage.getItem('currentTime')) {
    savedTime();
}