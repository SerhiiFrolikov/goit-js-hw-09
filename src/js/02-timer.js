import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


let intervalId = null;
let selectedDate = null;
let currentDate = null;

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

flatpickr(datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            Notify.failure('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
        const setBackTimer = () => {
            selectedDate = selectedDates[0].getTime();
            timer.start();
        };
        startBtn.addEventListener('click', setBackTimer);
        }
    },
});

const timer = {
    rootSelector: document.querySelector('.timer'),

    addLeadingZero(value) {
    return String(value).padStart(2, 0);
    },

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    },

    start() {
        intervalId = setInterval(() => {
            startBtn.disabled = true;
            datetimePicker.disabled = true;
            currentDate = Date.now();
            const deltaTime = selectedDate - currentDate;
        
            if (deltaTime <= 0) {
                this.stop();
                return;
            }
        const { days, hours, minutes, seconds } = this.convertMs(deltaTime);
      this.rootSelector.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      this.rootSelector.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      this.rootSelector.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      this.rootSelector.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);  
        }, 1000);
    },

    stop() {
        clearInterval(intervalId);
        this.intervalId = null;
        startBtn.disabled = true;
        datetimePicker.disabled = false;
    },
};