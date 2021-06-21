import CountdownTimer from './timer.js';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

const timer = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
    onTick: updateClockFace,
  
});

function updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

timer.start();