$('.task-input button').click(function () {
  const input = $('.task-input input');
  const value = input.val();

  if (value.length > 0) {
    $('.task-list').append($('<li>').text(value));

    input.val('');
  }
});

$('.decider button').click(function () {
  const statusElement = $('.decider .status');
  statusElement.toggleClass('active');

  if (statusElement.hasClass('active')) {
    statusElement.text('on');
    $('.decider button').text('Turn Off');
    $('.decider img').attr(
      'src',
      'https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif'
    );
  } else {
    statusElement.text('off');
    $('.decider button').text('Turn On');
    $('.decider img').attr(
      'src',
      'https://si.wsj.net/public/resources/images/BN-WB523_1109RO_12S_20171109172506.jpg'
    );
  }
});

$('.cool-kids button').click(function () {
  $('.cool-kids main').css('background', $(this).css('background'));
});
