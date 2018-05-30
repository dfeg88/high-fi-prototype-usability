$(document).ready(function() {

  let errorCount = parseInt(localStorage.getItem('exp1-errorCount'));
  let totalClicks = parseInt(localStorage.getItem('exp1-totalClicks'));

  // Error count and total clicks logging to local storage
  $('body').on('click', function(e) {
    // assign boolean value to html element click
    let cbOne = $(e.target).is('#compareCheck1') || $(e.target).is('#compareLabel1');
    let cbTwo = $(e.target).is('#compareCheck2') || $(e.target).is('#compareLabel2');
    let cbThree = $(e.target).is('#compareCheck5') || $(e.target).is('#compareLabel5');
    let compareButton = $(e.target).is('#compare-btn');
    let lowestSugarGranola = $(e.target).is('#strawb-apple');
    let backButton = $(e.target).is('#back-btn');
    let quitButton = $(e.target).is('#quit');
  
    if (!cbOne && !cbTwo && !cbThree && !compareButton && !lowestSugarGranola && !backButton && !quitButton) {
      // increase error count and assign to local storage
      errorCount++;

      // Label 'for' attribute that links to checkbox causes increment of 2 - reduce by one in this instance
      if ($(e.target).is('label')) {
        errorCount--;
      }

      localStorage.setItem('exp1-errorCount', errorCount);
    }

    //log each click so long as not 'Give Up' button..
    if (!quitButton) {
      totalClicks++;
    }

    // Label 'for' attribute that links to checkbox causes increment of 2 - reduce by one in this instance
    if ($(e.target).is('label')) {
      totalClicks--;
    }
    
    localStorage.setItem('exp1-totalClicks', totalClicks);
  });

  $('#quit').on('click', function() {
    let firstSystem = localStorage.getItem('firstSystem');

    if (firstSystem === 'A') {
      window.location.href = 'system-b/part-two-instructions.html';
    } else {
      window.location.href = 'questionnaire.html';
    }

    //stop timer
    localStorage.setItem('exp1-endTime', new Date().getTime());
    // task not completed
    localStorage.setItem('exp1-taskCompleted', 0);
    localStorage.setItem('exp1-userGaveUp', true);
  });

});