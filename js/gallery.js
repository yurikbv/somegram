'use strict';

(function () {

  var pictures = document.body.querySelector('.pictures');
  var galleryOverlay = document.body.querySelector('.gallery-overlay');
  var overlayClose = galleryOverlay.querySelector('.gallery-overlay-close');

  var onPopupEscPress = function (event) {
    window.util.isEscEvent(event,closePopup);
  };

  var closePopup = function(){
    galleryOverlay.classList.add('hidden');
    document.removeEventListener('keydown',onPopupEscPress);
  };

  var openPopup = function(target){
    window.showFullPicture(target);
    document.addEventListener('keydown',onPopupEscPress);
  };

  pictures.addEventListener('click',function (event) {
    event.preventDefault();
    var target = event.target;
    if(target.closest('.picture')){
      galleryOverlay.classList.remove('hidden');
      openPopup(target.closest('.picture'));
    }
  });

  overlayClose.addEventListener('click',function () {
    closePopup();
  });

  overlayClose.addEventListener('keydown',function (event) {
    window.util.isEnterEvent(event,closePopup);
  });

})();