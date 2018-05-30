$(document).ready(function() {
  countChecked();  
});

function countChecked() {
  let n = $( "input:checked" ).length;

  $.each($('input[type=checkbox]'), function() {
    let label = $("label[for='"+$(this).attr('id')+"']");

    if (areCorrectCheckboxesChecked()) {
      // Disable other checkboxes as only three products can be compared
      $("input[type=checkbox]").not(':checked').attr('disabled',true);

      // Enable compare button
      $('#compare-btn').attr('disabled', false);
      $('#compare-btn').addClass('btn-success');
    } else if (n === 3) {
      $("input[type=checkbox]").not(':checked').attr('disabled',true);

      // Disable compare button
      $('#compare-btn').attr('disabled', true);
      $('#compare-btn').removeClass('btn-success');
    } else {
      $("input[type=checkbox]").not(':checked').attr('disabled',false);

      // Disable compare button
      $('#compare-btn').attr('disabled', true);
      $('#compare-btn').removeClass('btn-success');
    }

    if ($('#'+$(this).attr('id')).is(':checked') && $( "input:checked" ).length < 4) {
      $('#'+$(this).attr('id')).parent().parent().addClass('selected-listing');
      label.html('Added to compare').css('color', 'green');
    } else {
      $('#'+$(this).attr('id')).parent().parent().removeClass('selected-listing');
      label.html('Select to compare').css('color', '#212529');
    }
  });
}

function areCorrectCheckboxesChecked() {
  let cbOne = $('#compareCheck1').is(':checked');
  let cbTwo = $('#compareCheck2').is(':checked');
  let cbThree = $('#compareCheck5').is(':checked');

  if ((cbOne && cbTwo && cbThree) && $( "input:checked" ).length === 3)  {
    return true;
  }
  return false;
}

function goToCompare() {
  window.location.href = 'compare.html';
}