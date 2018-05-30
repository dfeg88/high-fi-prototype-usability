$(document).ready(function() {
  calculateTimeTaken();
  removeRedundantLocalStorageVariables();  

  // output all key value pairs to results page
  for (let i = 0; i < localStorage.length; ++i) {
    $('#results').val($('#results').val() + localStorage.key(i) + ':\t' + localStorage.getItem(localStorage.key(i)) + '\n');
  }

  // sort results so experiment one and two data sets are grouped together -> easier when exporting
  const textarea = document.getElementById('results');
  textarea.value = textarea.value.split('\n').sort().join('\n');
});

function calculateTimeTaken() {
  // get time taken in milliseconds and assign to localStorage variable
  const exp1StartTime = localStorage.getItem('exp1-startTime');
  const exp1EndTime = localStorage.getItem('exp1-endTime');
  const exp2StartTime = localStorage.getItem('exp2-startTime');
  const exp2EndTime = localStorage.getItem('exp2-endTime');

  const exp1Diff = (exp1EndTime - exp1StartTime);
  const exp2Diff = (exp2EndTime - exp2StartTime);

  localStorage.setItem('exp1-timeTaken', exp1Diff);
  localStorage.setItem('exp2-timeTaken', exp2Diff);  
}

function removeRedundantLocalStorageVariables() {
  localStorage.removeItem('firstSystem');
  localStorage.removeItem('exp1-startTime');
  localStorage.removeItem('exp1-endTime');
  localStorage.removeItem('exp2-startTime');
  localStorage.removeItem('exp2-endTime');
  localStorage.removeItem('exp2-allImagesClicked');
}
