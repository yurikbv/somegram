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

var closeCadr = function(event){
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




