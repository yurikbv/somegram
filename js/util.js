'use strict';

(function () {
  var ESC_PRESS = 27;
  var ENTER_PRESS = 13;
  window.util = {
    isEscEvent: function (event,action) {
      if(event.keyCode === ESC_PRESS) action()
    },
    isEnterEvent: function (event,action) {
      if(event.keyCode === ENTER_PRESS) action()
    }
  }
})();