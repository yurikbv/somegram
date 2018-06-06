'use strict';

(function () {

  var template = document.querySelector('#picture-template').content.querySelector('.picture');
  var pictures = document.body.querySelector('.pictures');

  window.showErrorMessage = function (message) {
    var div = document.createElement('div');
    div.cssText = 'margin: 0 auto; background-color: red; position: fixed; top:0; left: 0; right: 0; padding: 5px;';
    div.style.textAlign = 'center';
    div.style.fontSize = '30px';
    div.textContent = message;
    document.body.insertAdjacentElement('afterbegin',div);
  };

  var renderImage = function (obj) {
    var clone = template.cloneNode(true);
    clone.querySelector('img').src = obj.url;
    clone.querySelector('.picture-comments').textContent = obj.comments.length;
    clone.querySelector('.picture-likes').textContent = obj.likes;
    return clone;
  };

  var renderImages = function (images) {
    var fragmentImage = document.createDocumentFragment();
    for(var i = 0; i < images.length; i++){
      fragmentImage.appendChild(renderImage(images[i]));
    }
    pictures.appendChild(fragmentImage);
  };

  window.backend.load(renderImages,window.showErrorMessage)

})();