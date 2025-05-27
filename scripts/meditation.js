let timerInterval;
let timeLeft = 300; // 5 minutes in seconds

function updateDisplay() {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  document.getElementById("timer-display").textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      return;
    }
    timeLeft--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = 300;
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", updateDisplay);
