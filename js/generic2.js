$(document).ready(function() {

  let errorCount = parseInt(localStorage.getItem('exp2-errorCount'));
  let totalClicks = parseInt(localStorage.getItem('exp2-totalClicks'));

  $('body').on('click', function(e) {
    
    // error logging
    const button = $(e.target).is('button');
    const granolaImage = $(e.target).is('.granola-img');
    const backButton = $(e.target).is('#back-btn');
    const quitButton = $(e.target).is('#quit');
    
    if (!button && !granolaImage && !backButton && !quitButton) {
      errorCount++;
      localStorage.setItem('exp2-errorCount', errorCount);
    }
    
    //  increment total number of clicks if not 'I Give Up'
    if (!quitButton) {
      totalClicks++;
    }

    localStorage.setItem('exp2-totalClicks', totalClicks);
  });

  $('#quit').on('click', function() {
    let firstSystem = localStorage.getItem('firstSystem');

    if (firstSystem === 'B') {
      window.location.href = '../part-one-instructions.html';
    } else {
      window.location.href = '../questionnaire.html';
    }

    //stop timer
    localStorage.setItem('exp2-endTime', new Date().getTime());
    // task not completed
    localStorage.setItem('exp2-taskCompleted', 0);
    localStorage.setItem('exp2-userGaveUp', true);
  });

});

function stopTimerAndSetTaskCompleted() {
  localStorage.setItem('exp2-endTime', new Date().getTime());
  localStorage.setItem('exp2-taskCompleted', 1);

  whichPage();
}

function stopTimerAndSetTaskNotCompleted() {
  localStorage.setItem('exp2-endTime', new Date().getTime());
  localStorage.setItem('exp2-taskCompleted', 0);

  whichPage();
}

function whichPage() {
  const firstSystem = localStorage.getItem('firstSystem');

  if (firstSystem === 'B') {
    window.location.href = '../part-one-instructions.html';
  } else {
    window.location.href = '../questionnaire.html';
  }
}