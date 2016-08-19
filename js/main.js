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
  var triggerBtn = document.querySelector('a#trigger-overlay');
  var overlay = document.querySelector('div.overlay');
  var closeBtn = overlay.querySelector('button.overlay-close');
  var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd',
      msTransition     : 'MSTransitionEnd',
      transition       : 'transitionend'
    };
  var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
  var support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if (classie.has(overlay, 'open')) {
      classie.remove(overlay, 'open');
      classie.add(overlay, 'close');

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

  triggerBtn.addEventListener('click', toggleOverlay);
  closeBtn.addEventListener('click', toggleOverlay);
})();
