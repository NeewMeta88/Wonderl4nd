// boolean a = false;

$('#b1').click(function() {
  $('#f1').show();
  $('#f2').hide();
  $('#f3').hide();
  $('#f4').hide();
  $('#f5').hide();
  $(this).toggleClass('megaclass');
  $('#b2').removeClass('megaclass');
  $('#b3').removeClass('megaclass');
  $('#b4').removeClass('megaclass');
  $('#b5').removeClass('megaclass');
});

$('#b2').click(function() {
  $('#f2').show();
  $('#f1').hide();
  $('#f3').hide();
  $('#f4').hide();
  $('#f5').hide();
  $(this).toggleClass('megaclass');
  $('#b1').removeClass('megaclass');
  $('#b3').removeClass('megaclass');
  $('#b4').removeClass('megaclass');
  $('#b5').removeClass('megaclass');
});
$('#b3').click(function() {
  $('#f3').show();
  $('#f2').hide();
  $('#f1').hide();
  $('#f4').hide();
  $('#f5').hide();
  $(this).toggleClass('megaclass');
  $('#b2').removeClass('megaclass');
  $('#b1').removeClass('megaclass');
  $('#b4').removeClass('megaclass');
  $('#b5').removeClass('megaclass');
});
$('#b4').click(function() {
  $('#f4').show();
  $('#f2').hide();
  $('#f3').hide();
  $('#f1').hide();
  $('#f5').hide();
  $(this).toggleClass('megaclass');
  $('#b2').removeClass('megaclass');
  $('#b3').removeClass('megaclass');
  $('#b1').removeClass('megaclass');
  $('#b5').removeClass('megaclass');
});
$('#b5').click(function() {
  $('#f5').show();
  $('#f2').hide();
  $('#f3').hide();
  $('#f4').hide();
  $('#f1').hide();
  $(this).toggleClass('megaclass');
  $('#b2').removeClass('megaclass');
  $('#b3').removeClass('megaclass');
  $('#b4').removeClass('megaclass');
  $('#b1').removeClass('megaclass');
});