'use strict';

(function () {
  var galleryOverlay = document.body.querySelector('.gallery-overlay');

  window.showFullPicture = function(obj){
    galleryOverlay.querySelector('.gallery-overlay-image').src = obj.querySelector('img').src;
    galleryOverlay.querySelector('.likes-count').textContent = obj.querySelector('.picture-likes').textContent;
    galleryOverlay.querySelector('.comments-count').textContent = obj.querySelector('.picture-comments').textContent;
  };
})();