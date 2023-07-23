let stopwatchInterval;
let startTime;
let isRunning = false;

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

function formatTime(time) {
  const ms = String(time % 1000).slice(0, 2);
  time = Math.floor(time / 1000);
  const seconds = String(time % 60).padStart(2, '0');
  time = Math.floor(time / 60);
  const minutes = String(time % 60).padStart(2, '0');
  const hours = String(Math.floor(time / 60)).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}.${ms}`;
}

function updateTime() {
  const now = new Date();
  const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);
