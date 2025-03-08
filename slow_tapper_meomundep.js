// ==UserScript==
// @name         MeoMunDep Slow Tapper
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Slow tapper with auto-stop feature
// @author       Meomundep_Sloth
// @match        https://i.cygnus.finance/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const interval = 1000; 
  const duration = 30000; 
  let tapInterval;

  function autoTap() {
    const gameArea = document.querySelector(
      'div[class*="bg-[url(/images/play-bg.png)]"]'
    );

    if (gameArea) {
      console.log('%c[MeoMunDep Tapper] %cStarted...', 'color: #ff1493; font-weight: bold;', 'color: #00ff00;');

      tapInterval = setInterval(() => {
        console.log('%c[MeoMunDep Tapper] %cTapping...', 'color: #ff1493; font-weight: bold;', 'color: #00ff00;');

        const pointerEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          view: window,
        });

        gameArea.dispatchEvent(pointerEvent);
      }, interval);

      setTimeout(() => {
        clearInterval(tapInterval);
        console.log('%c[MeoMunDep Tapper] %cStopped.', 'color: #ff1493; font-weight: bold;', 'color: red;');
      }, duration);
    }
  }

  autoTap();
})();
