'use strict';

(function () {

  var template = document.querySelector('#picture-template').content.querySelector('.picture');
  var pictures = document.body.querySelector('.pictures');
  var fragmentImage = document.createDocumentFragment();

  var renderImage = function (obj) {
    var clone = template.cloneNode(true);
    clone.querySelector('img').src = obj.url;
    clone.querySelector('.picture-comments').textContent = obj.comments.length;
    clone.querySelector('.picture-likes').textContent = obj.likes;
    return clone;
  };

  var renderImages = function () {
    for(var i = 0; i < window.data.photos.length; i++){
      fragmentImage.appendChild(renderImage(window.data.photos[i]));
    }
    return fragmentImage;
  };
  pictures.appendChild(renderImages());
})();