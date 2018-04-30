'use strict';

var getRandomNumber = function (max,min) {
  return Math.floor((min || 0) + Math.random() * max)
};

var comments = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
  ,'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var photos = [{
    url: 'photos/1.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/2.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/3.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/4.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/5.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/6.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/7.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/8.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/9.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/10.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/11.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/12.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/13.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/14.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/15.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/16.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/17.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/18.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/19.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/20.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/21.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/22.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/23.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/24.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)]]
  },
  {
    url: 'photos/25.jpg',
    likes: getRandomNumber(200,15),
    comments: [comments[getRandomNumber(comments.length)],comments[getRandomNumber(comments.length)]]
  }
  ]
;

var pictures = document.body.querySelector('.pictures');
var fragmentImage = document.createDocumentFragment();
var template = document.querySelector('#picture-template').content.querySelector('.picture');
var galleryOverlay = document.body.querySelector('.gallery-overlay');


var renderImage = function (obj) {
  var clone = template.cloneNode(true);
  clone.querySelector('img').src = obj.url;
  clone.querySelector('.picture-comments').textContent = obj.comments.length;
  clone.querySelector('.picture-likes').textContent = obj.likes;
  return clone;
};
var renderImages = function () {
  for(var i = 0; i < photos.length; i++){
    fragmentImage.appendChild(renderImage(photos[i]))
  }
  return fragmentImage;
};
var showDefaultPicture = function(){
  galleryOverlay.querySelector('.gallery-overlay-image').src = photos[0].url;
  galleryOverlay.querySelector('.likes-count').textContent = photos[0].likes;
  galleryOverlay.querySelector('.comments-count').textContent = photos[0].comments.length
};

galleryOverlay.classList.remove('hidden');
pictures.appendChild(renderImages());
showDefaultPicture();