function onClear() {
  $('form').trigger('reset');
}

function onSubmit() {
  // ensure all fields have been filled in
  if (!$('input[name="systemACompareSatisfaction"]:checked').val() ||
      !$('input[name="systemBCompareSatisfaction"]:checked').val() ||
      !$('input[name="systemAUseAgain"]:checked').val() ||
      !$('input[name="systemBUseAgain"]:checked').val() ||
      !$('input[name="mostIntuitiveSystem"]:checked').val() ||
      !$('input[name="systemACompareEase"]:checked').val() ||
      !$('input[name="systemBCompareEase"]:checked').val() ||
      !$('input[name="systemChoice"]:checked').val() ||
      !$('input[name="systemAFrustration"]:checked').val() ||
      !$('input[name="systemBFrustration"]:checked').val() ||
      !$('input[name="participantGender"]:checked').val() ||
      !$('input[name="participantAgeGroup"]:checked').val() ||
      !$('input[name="systemAQuickness"]:checked').val() ||
      !$('input[name="systemBQuickness"]:checked').val()
    ) {
    alert(`Please provide an answer for each question`);
  } else {
    // assign each field name and value to localStorage and navigate to results page
    $('input:checked').each(function() {
      let name = $(this).attr('name');
      let value = $(this).val();
  
      localStorage.setItem(name, value);
    });
  
    //navigate to results page
    window.location.href = 'results.html';
  }

}