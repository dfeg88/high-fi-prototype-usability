$(document).ready(function() {
  /* 
  init localStorage variable used for System B that is used to determine
  if user has clicked on all product images. Only then will the user be able
  to use the 'Add' button on product list page
  */
  let imagesClickedArr = [false, false, false];
  localStorage.setItem('exp2-allImagesClicked', JSON.stringify(imagesClickedArr));

  // init localStorage variables
    initErrorLogging();
    initTotalClicks();
});

function initErrorLogging() {
  if (!localStorage.getItem('exp1-errorCount') && !localStorage.getItem('exp2-errorCount')) {
    localStorage.setItem('exp1-errorCount', 0);
    localStorage.setItem('exp2-errorCount', 0);
  }
}

function initTotalClicks() {
  if (!localStorage.getItem('exp1-totalClicks') && !localStorage.getItem('exp2-totalClicks')) {
    localStorage.setItem('exp1-totalClicks', 0);
    localStorage.setItem('exp2-totalClicks', 0);
  }
}

function createStartTimestamp() {
  //set timer
  localStorage.setItem('exp1-startTime', new Date().getTime());
}

function createStartTimestampSystemB() {
  //set timer
  localStorage.setItem('exp2-startTime', new Date().getTime());
}