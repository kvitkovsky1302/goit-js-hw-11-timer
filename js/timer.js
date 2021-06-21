export default class CountdownTimer {
    constructor({selector, onTick, recordingTime}) {
        this.intervalId = null;
        this.selector = selector;
        this.isActive = false;
        this.onTick = onTick;
        this.deltaTime = this.deltaTime;
        this.recordingTime = recordingTime;
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
        const time = this.recordingTime();
        this.onTick(time);
        }, 100);
    }
    
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const currentTime = Date.now();
        const selectedDate = this.recordingTime();
        localStorage.setItem('currentTime', JSON.stringify(selectedDate));
    }

    



    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs}
    }

    pad(value) {
        return value < 10 ? '0' + value : value;
    }
}