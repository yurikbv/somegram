'use strict';

(function () {
  var getRandomNumber = function (max,min) {
    return Math.floor((min || 0) + Math.random() * max)
  };
  var comments = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
    ,'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

  window.data = {
    photos: [{
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
  };
})();