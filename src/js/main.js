/**
 *   Copyright 2011 - 2017 OSBI Ltd
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
  var btnTrigger = document.querySelector('#trigger-overlay');
  var overlay = document.querySelector('.overlay');
  var btnClose = overlay.querySelector('.overlay-close');
  var btnOtherValue = document.querySelector('#btn-other-value');
  var inputOtherValue = document.querySelector('#other-value');
  var btnPay = document.querySelector('#btn-pay');
  var boxOtherValue = document.querySelector('.box-other-value');
  var transEndEventNames = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd',
    msTransition     : 'MSTransitionEnd',
    transition       : 'transitionend'
  };
  var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
  var support = { transitions : Modernizr.csstransitions };

  function toggleOverlay(event) {
    if (event) {
      event.preventDefault();
    }

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

  function escKeyCloseOverlay() {
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
  }

  function toggleBtnOtherValue(event) {
    event.preventDefault();

    if (classie.has(boxOtherValue, 'hide')) {
      classie.remove(boxOtherValue, 'hide');
      classie.add(boxOtherValue, 'show');
    }
    else {
      classie.remove(boxOtherValue, 'show');
      classie.add(boxOtherValue, 'hide');
    }
  }

  function goPayCustom(event) {
    event.preventDefault();

    var customValue = inputOtherValue.value;
    var windowOpen;

    if (customValue != null && customValue > 0) {
      windowOpen = window.open('http://sites.fastspring.com/meteoriteconsulting/product/cedownloadcustom?tags=total=' + (customValue * 100), '_blank')

      if (windowOpen) {
        // Browser has allowed it to be opened
        windowOpen.focus;
      }
      else {
        // Broswer has blocked it
        alert('Please allow popups for this site!');
      }
    }
    else if (customValue != null && customValue == 0) {
      window.location.href = 'http://downloads.meteorite.bi/saiku3/saiku-latest.zip';
    }
    else {
      alert('Invalid value!');
    }
  }

  escKeyCloseOverlay();

  btnTrigger.addEventListener('click', toggleOverlay);
  btnClose.addEventListener('click', toggleOverlay);
  btnOtherValue.addEventListener('click', toggleBtnOtherValue);
  btnPay.addEventListener('click', goPayCustom);
})();
