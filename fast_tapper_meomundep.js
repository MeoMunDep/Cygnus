// ==UserScript==
// @name         MeoMunDep Clicker
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  MeoMunDep clicker
// @author       Meomundep_rabbit
// @match        https://i.cygnus.finance/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const clickCount = 100;
  const interval = 500;

  function autoClick() {
    const gameArea = document.querySelector(
      'div[class*="bg-[url(/images/play-bg.png)]"]'
    );
    if (gameArea) {
      for (let i = 0; i < clickCount; i++) {
        setTimeout(() => {
          console.log(
            `%c[MeoMunDep Clicker] %cClicking...`,
            'color: #ff1493; font-weight: bold;',
            'color: #00ff00;'
          );

          const pointerEvent = new PointerEvent('pointerdown', {
            bubbles: true,
            cancelable: true,
            view: window,
          });
          gameArea.dispatchEvent(pointerEvent);
        }, i * 50);
      }
    }
  }

  setInterval(autoClick, interval);
})();
