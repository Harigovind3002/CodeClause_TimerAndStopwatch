let stopwatchInterval;
let startTime;
let isRunning = false;

let countdownInterval;
let endTime;
let isCountdownRunning = false;

function updateTime() {
  const now = new Date();
  const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  document.getElementById('time').textContent = time;
}

function formatTime(time) {
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((time / 1000 / 60) % 60)).padStart(2, '0');
    const hours = String(Math.floor(time / 1000 / 60 / 60)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - (stopwatchInterval ? stopwatchInterval : 0);
    stopwatchInterval = setInterval(updateStopwatch, 10);
  }
}

function stopStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(stopwatchInterval);
  }
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById('stopwatch').textContent = '00:00:00';
}

function updateStopwatch() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('stopwatch').textContent = formattedTime;
}

function startCountdown() {
  if (!isCountdownRunning) {
    const inputMinutes = document.getElementById('countdown-input').value;
    if (!inputMinutes || isNaN(inputMinutes) || inputMinutes <= 0) {
      alert('Please enter a valid positive number of minutes.');
      return;
    }
    const countdownTime = inputMinutes * 60 * 1000;
    endTime = Date.now() + countdownTime;
    isCountdownRunning = true;
    countdownInterval = setInterval(updateCountdown, 10);
  }
}

function stopCountdown() {
  if (isCountdownRunning) {
    isCountdownRunning = false;
    clearInterval(countdownInterval);
  }
}

function resetCountdown() {
  stopCountdown();
  const formattedTime = formatTime(0); // Reset to 00:00:00
  document.getElementById('countdown-timer').textContent = formattedTime;
}

function updateCountdown() {
  const currentTime = Date.now();
  const timeRemaining = endTime - currentTime;
  if (timeRemaining > 0) {
    const formattedTime = formatTime(timeRemaining);
    document.getElementById('countdown-timer').textContent = formattedTime;
  } else {
    document.getElementById('countdown-timer').textContent = "00:00:00";
    stopCountdown();
  }
}

setInterval(updateTime, 1000);
function formatCountdownTime(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    time %= 1000 * 60 * 60;
    const minutes = Math.floor(time / (1000 * 60));
    time %= 1000 * 60;
    const seconds = Math.floor(time / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function updateCountdown() {
    const currentTime = Date.now();
    const timeRemaining = endTime - currentTime;
    if (timeRemaining > 0) {
      const formattedTime = formatCountdownTime(timeRemaining);
      document.getElementById('countdown-timer').textContent = formattedTime;
    } else {
      document.getElementById('countdown-timer').textContent = "00:00:00";
      stopCountdown();
    }
  }

function startCountdown() {
    if (!isCountdownRunning) {
      const inputMinutes = document.getElementById('countdown-input').value;
      if (!inputMinutes || isNaN(inputMinutes) || inputMinutes <= 0) {
        alert('Please enter a valid positive number of minutes.');
        return;
      }
      const countdownTime = inputMinutes * 60 * 1000;
      endTime = Date.now() + countdownTime;
      isCountdownRunning = true;
      countdownInterval = setInterval(updateCountdown, 10);
      document.getElementById('countdown-timer').classList.add('running'); // Add class for animation
    }
  }
  
  function stopCountdown() {
    if (isCountdownRunning) {
      isCountdownRunning = false;
      clearInterval(countdownInterval);
      document.getElementById('countdown-timer').classList.remove('running'); // Remove class to stop animation
    }
  }
