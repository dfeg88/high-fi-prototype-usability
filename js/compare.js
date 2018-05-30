function stopTimerAndSetTaskCompleted() {
  localStorage.setItem('exp1-endTime', new Date().getTime());
  localStorage.setItem('exp1-taskCompleted', 1);

  whichPage();
}

function stopTimerAndSetTaskNotCompleted() {
  localStorage.setItem('exp1-endTime', new Date().getTime());
  localStorage.setItem('exp1-taskCompleted', 0);

  whichPage();
}

function whichPage() {
  const firstSystem = localStorage.getItem('firstSystem');

  if (firstSystem === 'A') {
    window.location.href = 'system-b/part-two-instructions.html';
  } else {
    window.location.href = 'questionnaire.html';
  }
}