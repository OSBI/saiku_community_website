/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

(function() {
  var btnTrigger = document.querySelector('a#trigger-overlay');
  var overlay = document.querySelector('div.overlay');
  var btnClose = overlay.querySelector('button.overlay-close');
  var btnOtherValue = document.querySelector('a#btn-other-value');
  var inputOtherValue = document.querySelector('input#other-value');
  var boxOtherValue = document.querySelector('div.box-other-value');
  var transEndEventNames = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd',
    msTransition     : 'MSTransitionEnd',
    transition       : 'transitionend'
  };
  var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
  var support = { transitions : Modernizr.csstransitions };

  function toggleOverlay(isEscape) {
    if (classie.has(overlay, 'open')) {
      classie.remove(overlay, 'open');
      classie.add(overlay, 'close');
      classie.remove(boxOtherValue, 'show');
      classie.add(boxOtherValue, 'hide');
      inputOtherValue.value = '';

      var onEndTransitionFn = function(event) {
        if (support.transitions) {
          if(event.propertyName !== 'visibility') {
            return;
          }

          this.removeEventListener(transEndEventName, onEndTransitionFn);
        }
        classie.remove(overlay, 'close');
      };

      if (support.transitions) {
        overlay.addEventListener(transEndEventName, onEndTransitionFn);
      }
      else {
        onEndTransitionFn();
      }
    }
    else if (!classie.has(overlay, 'close')) {
      classie.add(overlay, 'open');
    }
  }

  function toggleBtnOtherValue() {
    if (classie.has(boxOtherValue, 'hide')) {
      classie.remove(boxOtherValue, 'hide');
      classie.add(boxOtherValue, 'show');
    }
    else {
      classie.remove(boxOtherValue, 'show');
      classie.add(boxOtherValue, 'hide');
    }
  }

  // Capturing the `ESC` key and close overlay
  document.onkeydown = function(event) {
    var isEscape = false;
    event = event || window.event;

    if ('key' in event) {
      isEscape = event.key === 'Escape';
    }
    else {
      isEscape = event.keyCode === 27;
    }

    if (isEscape && classie.has(overlay, 'open')) {
      toggleOverlay();
    }
  };

  btnTrigger.addEventListener('click', toggleOverlay);
  btnClose.addEventListener('click', toggleOverlay);
  btnOtherValue.addEventListener('click', toggleBtnOtherValue);
})();
