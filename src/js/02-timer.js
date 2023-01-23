import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  counterDays: document.querySelector('[data-days]'),
  counterHours: document.querySelector('[data-hours]'),
  counterMin: document.querySelector('[data-minutes]'),
  counterSec: document.querySelector('[data-seconds]'),
};
refs.btnStart.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
let interval = null;

function onClick() {
  interval = setInterval(getRestTime, 1000);

  refs.btnStart.disabled = true;
}
function getRestTime() {
  const currentTime = new Date();
  const selectedDate = new Date(refs.input.value);
  const counter = selectedDate - currentTime;

  if (counter >= 0) {
    let counterData = convertMs(counter);

    refs.counterDays.textContent = counterData.days;
    refs.counterHours.textContent = counterData.hours;
    refs.counterMin.textContent = counterData.minutes;
    refs.counterSec.textContent = counterData.seconds;
  }
}
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
