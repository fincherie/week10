var $modalTrigger = $('.trigger');
$modal = $('.modal');
$modalClose = $('.modal__close');
$modalActive = 'modal--active';

$modalTrigger.on('click', function(e) {
  e.preventDefault();
  console.log('hello');

  $(this).siblings($modal).addClass($modalActive);
$modal.attr('aria-hidden', 'false');

});

$modalClose.on('click', function(e) {
  e.preventDefault();
  console.log('Closing');
  $(this).parents($modal).removeClass($modalActive);
});
