$(function() {
  $('#targetA').on('on.toggler', function(event) {
    console.log('add');
  });
  $('#targetA').on('off.toggler', function(event) {
    console.log('remove');
  });
});
