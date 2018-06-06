'use strict';

(function () {

  var URL_LOAD = 'https://js.dump.academy/kekstagram/data';
  var URL_SAVE = 'https://js.dump.academy/kekstagram';

  var makeXhr = function(xhr,onLoad,onError){
    xhr.responseType = 'json';
    xhr.addEventListener('load',function () {
      if(xhr.status === 200) {
        onLoad(xhr.response)
      } else {
        onError('Ошибка ' + xhr.status + ' ' + xhr.statusText)
      }
    });
    xhr.addEventListener('error',function () {
      onError('Произошла ошибка соединения.');
    });
    xhr.timeout = 10000;
    xhr.addEventListener('timeout',function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'mc')
    });
  };

  window.backend = {
    load: function (onLoad,onError) {
      var xhr = new XMLHttpRequest();
      makeXhr(xhr,onLoad,onError);
      xhr.open('GET',URL_LOAD);
      xhr.send();
    },
    save: function (data,onLoad,onError) {
      var xhr = new XMLHttpRequest();
      makeXhr(xhr,onLoad,onError);
      xhr.open('POST',URL_SAVE);
      xhr.send(data);
    }
  }

})();