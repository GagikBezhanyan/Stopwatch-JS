'use strict';
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
let msecEl = document.getElementById('msec');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;
let isStarted = true;

start.addEventListener('click', function() {
  if (isStarted) {
    isStarted = false;
    timer();
  }
});

reset.addEventListener('click', function() {
  clearInterval(interval);
  isStarted = true;
  minEl.innerHTML = '00';
  secEl.innerHTML = '00';
  msecEl.innerHTML = '00';
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
});

stop.addEventListener('click', function() {
  clearInterval(interval);
  isStarted = true;
});

function timer() {
  interval = setInterval(function() {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    minEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    msecEl.innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds;
  }, 10);
}
