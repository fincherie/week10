var $popoverTrigger = $('.popover__trigger');
$popover - $('.popover');
popoverActive = 'popover--active';

$popoutTrigger.on('click', function (e) {
  e.preventDefault();
  console.log('hey');
  $(this).toggleClass(popoverActive);
  $(this).parent($popoverContainer).
});
