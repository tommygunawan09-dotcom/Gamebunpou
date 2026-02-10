var day = ["て + ください", "て + います", "ましょうか", "て + もいいです", "て + はいけません", "て + から", "(ない) + でください", "(ない) + なければなりません", "(ない) + なくてもいいです", "ことができます", "ことです", "まえに", "とおもいます", "といいます", "でしょう", "とき", "て + あげます", "て + くれます", "て + もらいます", "た + ら", "て +  も", " んです", "て + いただけませんか"],
  allDays = day.length,
  firstDay = 0,
  change = $('.day'),
  changeDay = function() {
    change.html(day[firstDay]);
    firstDay = (firstDay + 1) % allDays;
  }

function ohNo() {
  ohYeah = setInterval(changeDay, 120);//must match css animation
};

$('.day').hover(function() {
  $('body').removeClass('uhoh');
  $('#cube').removeClass('live');
  ohNo();
}, function() {
  clearInterval(ohYeah);
  if ($('.day').text() == 'dooms') {
    $('body').addClass('uhoh');
  } else if ($('.day').text() == 'Fri') {
    $('#cube').addClass('live');
  }
});