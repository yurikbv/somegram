'use strict';
var number = 1;
var commentsArr = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
function getUrlNumber() {
  return number++
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}
var dataPhotos = [{
  url: 'photos/' + getUrlNumber() + '.jpg',
  likes: getRandomNumber(15,200),
  comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
},
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  },
  {
    url: 'photos/' + getUrlNumber() + '.jpg',
    likes: getRandomNumber(15,200),
    comments: commentsArr[getRandomNumber(0,commentsArr.length-1)]
  }];

var picturesBlock = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content;
var fragment = document.createDocumentFragment();
var renderPhotos = function (arr) {
  var pictureTemplateItem = pictureTemplate.cloneNode(true);
  pictureTemplateItem.querySelector('img').setAttribute('src', arr.url);
  pictureTemplateItem.querySelector('.picture-likes').textContent = arr.likes;
  pictureTemplateItem.querySelector('.picture-comments').textContent = arr.comments;
  return pictureTemplateItem;
};
for(var i = 0; i < dataPhotos.length; i++){
  fragment.appendChild(renderPhotos(dataPhotos[i]));
}

picturesBlock.appendChild(fragment);
var allPicturesBlock = picturesBlock.querySelectorAll('.picture');
var gallery = document.querySelector('.gallery-overlay');
var galleryOverlayClose = gallery.querySelector('.gallery-overlay-close');
var ENTER_KEY = 13;
var ESC_KEY = 27;

var fullPictureFill = function (obj) {
  gallery.querySelector('.gallery-overlay-image').setAttribute('src', obj.url);
  gallery.querySelector('.likes-count').textContent = obj.likes;
  gallery.querySelector('.comments-count').textContent = getRandomNumber(1,commentsArr.length);
};
var openFullPicture = function (target) {
  event.preventDefault();
  fullPictureFill(dataPhotos[searchNumberOfPicture(target)]);
  gallery.classList.remove('hidden');
};

var closeFullPicture = function () {
  gallery.classList.add('hidden');
};

var searchNumberOfPicture = function(target){
  for(var i = 0; i < allPicturesBlock.length; i++){
    if(target.getAttribute('src') === allPicturesBlock[i].querySelector('img').getAttribute('src')){
      return i;
    }
  }
};

picturesBlock.addEventListener('click',function (event) {
    var target = event.target;
    if(target.tagName === 'IMG'){
      openFullPicture(target);
    }
});
picturesBlock.addEventListener('keydown',function (event) {
  var target = event.target;
  if(target.className === 'picture'){
    if(event.keyCode === ENTER_KEY){
      openFullPicture(target.querySelector('img'));
    }
  }
});

galleryOverlayClose.addEventListener('click', function () {
  closeFullPicture();
});
galleryOverlayClose.addEventListener('keydown',function (event) {
  if(event.keyCode === ENTER_KEY){
    closeFullPicture();
  }
});
document.addEventListener('keydown', function (event) {
  if(event.keyCode === ESC_KEY){
    closeFullPicture();
  }
});



