<template>
    <div class="spiral">
		<div id="ui">
            <div class="bg"></div>
            <div class="rings">
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
              <div class="ring">
                <div class="border"></div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .spiral {
      background: transparent;
      height: 100vh;
      overflow: hidden;
      display: flex;
      font-family: "Anton", sans-serif;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
    }

    .spiral div {
      transform-style: preserve-3d;
      position: absolute;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    #ui {
      transform: rotateX(75deg);
    }

    #ui .bg {
      width: 480px;
      height: 480px;
      background: #101010;
      background: linear-gradient(to bottom, white 0%, #101010 100%);
      transform: translate(-50%, -50%) translateZ(-1px);
      border-radius: 100%;
    }

    #ui .rings .ring {
      transform: translate(-50%, -50%);
      border-radius: 100%;
    }

    #ui .rings .ring:nth-child(1) {
      width: 60px;
      height: 60px;
      -webkit-animation: rotation 3549ms -4000ms linear infinite;
      animation: rotation 3549ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(2) {
      width: 120px;
      height: 120px;
      -webkit-animation: rotation 2791ms -4000ms linear infinite;
      animation: rotation 2791ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(3) {
      width: 180px;
      height: 180px;
      -webkit-animation: rotation 1323ms -4000ms linear infinite;
      animation: rotation 1323ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(4) {
      width: 240px;
      height: 240px;
      -webkit-animation: rotation 3257ms -4000ms linear infinite;
      animation: rotation 3257ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(5) {
      width: 300px;
      height: 300px;
      -webkit-animation: rotation 2626ms -4000ms linear infinite;
      animation: rotation 2626ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(6) {
      width: 360px;
      height: 360px;
      -webkit-animation: rotation 3000ms -4000ms linear infinite;
      animation: rotation 3000ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(7) {
      width: 420px;
      height: 420px;
      -webkit-animation: rotation 1163ms -4000ms linear infinite;
      animation: rotation 1163ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(8) {
      width: 480px;
      height: 480px;
      -webkit-animation: rotation 3515ms -4000ms linear infinite;
      animation: rotation 3515ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(9) {
      width: 540px;
      height: 540px;
      -webkit-animation: rotation 2121ms -4000ms linear infinite;
      animation: rotation 2121ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(10) {
      width: 600px;
      height: 600px;
      -webkit-animation: rotation 1765ms -4000ms linear infinite;
      animation: rotation 1765ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(11) {
      width: 660px;
      height: 660px;
      -webkit-animation: rotation 3401ms -4000ms linear infinite;
      animation: rotation 3401ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(12) {
      width: 720px;
      height: 720px;
      -webkit-animation: rotation 3510ms -4000ms linear infinite;
      animation: rotation 3510ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(13) {
      width: 780px;
      height: 780px;
      -webkit-animation: rotation 1321ms -4000ms linear infinite;
      animation: rotation 1321ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(14) {
      width: 840px;
      height: 840px;
      -webkit-animation: rotation 3446ms -4000ms linear infinite;
      animation: rotation 3446ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(15) {
      width: 900px;
      height: 900px;
      -webkit-animation: rotation 1275ms -4000ms linear infinite;
      animation: rotation 1275ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(16) {
      width: 960px;
      height: 960px;
      -webkit-animation: rotation 3903ms -4000ms linear infinite;
      animation: rotation 3903ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(17) {
      width: 1020px;
      height: 1020px;
      -webkit-animation: rotation 3129ms -4000ms linear infinite;
      animation: rotation 3129ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(18) {
      width: 1080px;
      height: 1080px;
      -webkit-animation: rotation 2753ms -4000ms linear infinite;
      animation: rotation 2753ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(19) {
      width: 1140px;
      height: 1140px;
      -webkit-animation: rotation 3225ms -4000ms linear infinite;
      animation: rotation 3225ms -4000ms linear infinite;
    }

    #ui .rings .ring:nth-child(20) {
      width: 1200px;
      height: 1200px;
      -webkit-animation: rotation 3138ms -4000ms linear infinite;
      animation: rotation 3138ms -4000ms linear infinite;
    }

    #ui .rings .ring .border {
      width: 100%;
      height: 100%;
      border: 27px solid #101010;
      box-sizing: border-box;
      border-radius: 100%;
      transform-origin: 0 50%;
      transform: rotateY(-2deg);
    }

    @-webkit-keyframes rotation {
      0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
      }
    }

    @keyframes rotation {
      0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
      }
    }
</style>