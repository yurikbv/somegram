var form = document.querySelector('#upload-select-image');
var uploadFile = form.querySelector('#upload-file');
var uploadOverlay = form.querySelector('.upload-overlay');
var formCancel = form.querySelector('.upload-form-cancel');
var formDescription = form.querySelector('.upload-form-description');

var onEscPressCadr = function(event){
  if(event.keyCode === 27){
    closeCadr()
  }
};

var closeCadr = function(){
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown',onEscPressCadr);
};

var onFocusDescription = function () {
  formDescription.addEventListener('focus',function () {
    document.removeEventListener('keydown',onEscPressCadr)
  });
  formDescription.addEventListener('blur',function () {
    document.addEventListener('keydown',onEscPressCadr);
  })
};

var openCadr = function(event){
  event.preventDefault();
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown',onEscPressCadr);
  onFocusDescription();
};

uploadFile.addEventListener('click',function (event) {
  openCadr(event)
});

uploadFile.nextElementSibling.addEventListener('keydown',function (event) {
  if(event.keyCode === 13) openCadr(event);
});

formCancel.addEventListener('click',function (event) {
  closeCadr(event);
});

formCancel.addEventListener('keydown',function (event) {
  if(event.keyCode === 13) closeCadr(event)
});

var resizeControl = form.querySelector('.upload-resize-controls');
var resizeControlValue =  resizeControl.querySelector('.upload-resize-controls-value');
var effectImage = form.querySelector('.effect-image-preview');
var effectControls =form.querySelector('.upload-effect-controls');

var scaleImage = function(value){
  (value !== 100) ? effectImage.style.transform = 'scale(0.' + value + ')' : effectImage.style.transform = 'scale(1)';
};

resizeControl.addEventListener('click',function (event) {
  var target = event.target;
  var resizeButtonDec = resizeControl.querySelector('.upload-resize-controls-button-dec');
  var resizeButtonInc = resizeControl.querySelector('.upload-resize-controls-button-inc');
  if(target === resizeButtonDec && parseInt(resizeControlValue.value) > 25){
    resizeControlValue.value = parseInt(resizeControlValue.value) - 25 + '%'
  }
  if(target === resizeButtonInc && parseInt(resizeControlValue.value) < 100 ) {
    resizeControlValue.value = parseInt(resizeControlValue.value) + 25 + '%'
  }
  scaleImage(parseInt(resizeControlValue.value));
});
scaleImage(parseInt(resizeControlValue.value));

effectControls.addEventListener('change',function (event) {
  var effect = event.target.value ;
  if(effect === 'none') {
    effectImage.className = 'effect-image-preview';
  } else {
    effectImage.className = 'effect-image-preview';
    effectImage.classList.add('effect-' + effect)
  }
});

var hashtag = form.querySelector('.upload-form-hashtags');

var verifyErrors = function (target,hashtags) {
  var hashArray = hashtags.split(' ');
  var cloneHash = [];
  for(var i = 0; i < hashArray.length; i++){
    if(hashArray[i][0] !== '#'){
      target.setCustomValidity('Хэштег должен начинатся со знака #.');
    } else if(hashArray[i].length > 21){
      target.setCustomValidity('Хэштег превышает 20 символов.');
    } else if(cloneHash.indexOf(hashArray[i].toLowerCase()) !== -1){
      target.setCustomValidity('Имеются одинаковые хэштеги.');
    }
    else {
      target.setCustomValidity('');
    }
    cloneHash.push(hashArray[i].toLowerCase())
  }
};

hashtag.addEventListener('input',function (event) {
  var target = event.target;
  if(target.value.length){
    verifyErrors(target,target.value)
  }
});






