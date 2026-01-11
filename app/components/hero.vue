<template>
   <header class="bg-white dark:bg-black z-4">
      <nav class="bg-white relative dark:bg-black z-3">
         <div class="container flex flex-col items-center p-6 mx-auto">
            <a href="#" class="mx-auto ">
            <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
            </a>
            <div class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
               <a href="#" class="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6">home</a>
               <a href="#" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">features</a>
               <a href="#" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">pricing</a>
               <a href="#" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">blog</a>
               <a href="#" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z" fill="currentColor" />
                  </svg>
               </a>
               <a href="#" class="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z"/>
                     <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z"/>
                     <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z"/>
                  </svg>
               </a>
            </div>
         </div>
      </nav>
      <div class="container z-2 flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
         <div class="flex z-1 flex-col items-center ml-[3rem] w-full lg:flex-row lg:w-1/2">
            <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
               <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
               <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
               <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
               <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>
            <div class="max-w-lg lg:mx-12 lg:order-2">
               <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
               <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
               <div class="mt-6">
                  <a href="#" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</a>
               </div>
            </div>
         </div>
         <div class="flex z-0 items-center bg-transparent justify-center w-full h-96 lg:w-1/2">
            <dev class="max-w-2xl bg-transparent mr-[25rem]" id="container-webgl"></dev>
            <!-- Image to be used for particles -->
            <img id="source-image" src="https://images.unsplash.com/photo-1568283661163-c90193fd13f1?q=80&w=2340" crossorigin="anonymous" style="display: none;">
         </div>
      </div>
   </header>
</template>

<style scoped>
/*
Based on the great article on Codrops
https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/ requestanimationframe
*/

#container-webgl {
    width: 800px;
    height: 700px;
} 
</style>

<script async setup>
import * as THREE from "three";
import { GUI } from "dat.gui";
//import Stats from "https://esm.sh/stats.js@0.17.0";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
//import { UnrealBloomPass } from '~/assets/js/UnrealBloomPassWithTransparency.js';
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Shaders
const vertexShader = `
precision highp float;

// Attributes
attribute vec3 position;
attribute vec2 uv;
attribute float pindex;
attribute vec3 offset;
attribute float angle;

// Uniforms
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uRandom;
uniform float uDepth;
uniform float uSize;
uniform vec2 uTextureSize;
uniform sampler2D uTexture;
uniform sampler2D uTouch;
uniform vec2 uMouse;
uniform float uMouseSize;
uniform float uMouseForce;
uniform float uEasingFactor;
uniform float uIdleMovement;
uniform float uIdleSpeed;
uniform float uIdleIntensity;
uniform float uParticleSpring;

// Varying
varying vec2 vPUv;
varying vec2 vUv;
varying float vGrey;
varying float vDistance;

// Function to generate random value
float random(float n) {
  return fract(sin(n) * 43758.5453123);
}

// Simplex noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise_1_2(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Cubic easing function
float easeCubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

// Exponential easing function
float easeExpoOut(float t) {
  return t == 1.0 ? 1.0 : 1.0 - pow(2.0, -10.0 * t);
}

// Elastic easing function (more natural)
float easeElasticOut(float t) {
  float p = 0.3;
  return pow(2.0, -10.0 * t) * sin((t - p / 4.0) * (2.0 * 3.14159) / p) + 1.0;
}

void main() {
  vUv = uv;
  
  // Pixel UV coordinates within the texture
  vec2 puv = offset.xy / uTextureSize;
  vPUv = puv;
  
  // Sample the image pixel color
  vec4 colA = texture2D(uTexture, puv);
  float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
  vGrey = grey;
  
  // Original position (home position)
  vec3 homePosition = vec3(offset.xy, 0.0);
  
  // Displacement
  vec3 displaced = homePosition;
  
  // Randomize position slightly
  displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;
  
  // Calculate random z value for depth variation
  float rndz = (random(pindex) + snoise_1_2(vec2(pindex * 0.1, uTime * 0.1)));
  displaced.z += rndz * (random(pindex) * 2.0 * uDepth);
  
  // Apply touch interaction from texture
  float t = texture2D(uTouch, puv).r;
  displaced.z += t * 10.0 * rndz;
  displaced.x += cos(angle) * t * 10.0 * rndz;
  displaced.y += sin(angle) * t * 10.0 * rndz;
  
  // IDLE ANIMATION - subtle movement when no mouse interaction
  // Each particle moves in a unique pattern based on its index
  if (uIdleMovement > 0.0) {
    float idleTime = uTime * uIdleSpeed;
    float noise1 = snoise_1_2(vec2(pindex * 0.01, idleTime * 0.1));
    float noise2 = snoise_1_2(vec2(pindex * 0.02, idleTime * 0.15 + 100.0));
    float noise3 = snoise_1_2(vec2(pindex * 0.03, idleTime * 0.05 + 300.0));
    
    // Create a breathing effect
    float breathe = sin(idleTime * 0.2 + pindex * 0.01) * 0.5 + 0.5;
    
    // Apply subtle movement
    displaced.x += noise1 * uIdleIntensity * uIdleMovement * (1.0 - min(1.0, t * 2.0));
    displaced.y += noise2 * uIdleIntensity * uIdleMovement * (1.0 - min(1.0, t * 2.0));
    displaced.z += noise3 * uIdleIntensity * 2.0 * uIdleMovement * breathe * (1.0 - min(1.0, t * 2.0));
  }
  
  // DIRECT MOUSE INTERACTION
  // Calculate distance from this particle to mouse position
  float dist = distance(offset.xy, uMouse * uTextureSize);
  vDistance = dist;
  
  // If within mouse influence radius, apply force
  if (dist < uMouseSize) {
    // Calculate force based on distance (closer = stronger)
    float forceFactor = 1.0 - dist/uMouseSize;
    
    // Apply easing for smoother effect
    float easedForce = easeExpoOut(forceFactor) * uMouseForce;
    
    // Get direction from mouse to particle (for pushing away effect)
    vec2 dir = normalize(offset.xy - uMouse * uTextureSize);
    
    // Apply force with spring-like behavior
    float springFactor = uParticleSpring;
    float dampingFactor = 0.6;
    
    // Create a more organic movement with noise
    float uniqueness = snoise_1_2(vec2(pindex * 0.1, uTime * 0.2));
    float organicFactor = 0.8 + uniqueness * 0.4;
    
    // Apply force with organic variation
    displaced.x += dir.x * easedForce * 8.0 * organicFactor;
    displaced.y += dir.y * easedForce * 8.0 * organicFactor;
    
    // Z-axis movement for depth effect
    float zForce = easedForce * 15.0 * rndz * organicFactor;
    
    // Particles closer to the center move more in Z
    float centerFactor = 1.0 - min(1.0, dist / (uMouseSize * 0.5));
    displaced.z += zForce * (0.5 + centerFactor * 0.5);
  }
  
  // Calculate particle size with subtle variation
  float psize = (snoise_1_2(vec2(uTime * 0.3, pindex) * 0.5) * 0.3 + 1.7);
  psize *= max(grey, 0.2);
  psize *= uSize;
  
  // Position of the vertex within the particle quad
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  mvPosition.xyz += position * psize;
  
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
uniform float uMouseSize;
uniform vec2 uMouse;
uniform vec2 uTextureSize;
uniform float uGlowStrength;
uniform float uColorVariation;

varying vec2 vPUv;
varying vec2 vUv;
varying float vGrey;
varying float vDistance;

void main() {
  // Sample the pixel color from the original image
  vec4 colA = texture2D(uTexture, vPUv);
  
  // Convert to greyscale using luminosity method
  float grey = vGrey;
  
  // Add subtle color variation based on time and position
  float r = grey;
  float g = grey;
  float b = grey;
  
  if (uColorVariation > 0.0) {
    float colorNoise = sin(vPUv.x * 10.0 + uTime * 0.2) * sin(vPUv.y * 8.0 - uTime * 0.1) * 0.5 + 0.5;
    float colorShift = colorNoise * uColorVariation;
    
    // Subtle color tinting
    r = grey * (1.0 + colorShift * 0.1);
    g = grey * (1.0 + colorShift * 0.05);
    b = grey * (1.0 + colorShift * 0.15);
  }
  
  vec4 colB = vec4(r, g, b, 1.0);
  
  // Create circle shape for the particle with soft edge
  float border = 0.35;
  float radius = 0.5;
  float dist = radius - distance(vUv, vec2(0.5));
  float t = smoothstep(0.0, border, dist);
  
  // Add subtle glow effect near mouse
  float mouseProximity = 1.0 - min(1.0, vDistance / uMouseSize);
  float glow = mouseProximity * uGlowStrength;
  
  // Final color with glow
  vec4 color = colB;
  color.rgb += glow * 0.2; // Subtle brightness increase near mouse
  color.a = t;
  
  gl_FragColor = color;
}
`;

// Initialize when everything is loaded
onNuxtReady(() => {
  //const THREE = await import('three');
  //const GUI = await import("dat.gui");
  //import Stats from "https://esm.sh/stats.js@0.17.0";
  //const EffectComposer = await import("three/examples/jsm/postprocessing/EffectComposer.js");
  //const RenderPass = await import("three/examples/jsm/postprocessing/RenderPass.js");
  //const UnrealBloomPass = await import("three/examples/jsm/postprocessing/UnrealBloomPass.js");

  if (process.client) { // Nuxt specific way to check
    class App {
  constructor() {
    this.container = document.getElementById("container-webgl");

    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.composer = null;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    //this.width = 800;
    //this.height = 700;
    this.mouse = new THREE.Vector2(0.5, 0.5); // Center of screen
    this.targetMouse = new THREE.Vector2(0.5, 0.5); // For smooth mouse movement
    this.mouseVelocity = new THREE.Vector2(0, 0);
    this.lastMouse = new THREE.Vector2(0.5, 0.5);
    this.mouseSpeed = 0;

    this.image = document.getElementById("source-image");
    this.imageTexture = null;
    this.imageWidth = 320;
    this.imageHeight = 180;
    this.numPoints = this.imageWidth * this.imageHeight;
    this.numVisiblePoints = 0;
    this.threshold = 34;

    this.touchCanvas = null;
    this.touchContext = null;
    this.touchTexture = null;

    this.time = 0;
    this.isRunning = true;
    this.isMouseMoving = false;
    this.mouseMovingTimeout = null;

    //this.stats = new Stats(); ----------------------------------
    //this.stats.showPanel(0); ----------------------------------
    //this.container.appendChild(this.stats.dom);   ----------------------------------

    this.gui = null;
    this.guiParams = {
      particleSize: 1.0,
      randomness: 0.6, // Reduced for more subtle effect
      depth: 3.0,
      mouseSize: 80, // Increased for wider influence
      mouseForce: 0.8, // Reduced for subtlety
      mouseSmoothing: 0.12, // Smoother movement
      idleMovement: 0.4, // Subtle movement when idle
      idleSpeed: 2,
      idleIntensity: 0.8,
      particleSpring: 0.7, // Spring-like behavior
      glowStrength: 0.3, // Subtle glow effect
      colorVariation: 0.15, // Subtle color variation
      fadeSpeed: 0.08, // Slower fade for smoother trails
      debug: false
    };

    this.init();
  }

  init() {
    this.initRenderer();
    this.initScene();
    this.initCamera();
    this.initLights();
    this.initPostprocessing();
    this.loadTexture();
    this.initGUI();
    this.initTouchTexture();

    this.addListeners();
    this.animate();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
  }

  initScene() {
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color("#101010");
    this.scene.background = null;
  }

  initCamera() {
    const fov = 45;
    const aspect = this.width / this.height;
    const near = 1;
    const far = 1000;

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 300);
    this.camera.position.z -= 50; 
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);
  }

  initPostprocessing() {
    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.width, this.height),
      1.2, // strength (reduced for subtlety)
      0.5, // radius (increased for smoother bloom)
      0.85 // threshold
    );
    //this.composer.addPass(bloomPass);
  }

  initGUI() {
    this.gui = new GUI();
    this.gui.hide();
    this.gui
      .add(this.guiParams, "particleSize", 0.1, 3.0)
      .name("Particle Size");
    this.gui.add(this.guiParams, "randomness", 0.0, 5.0).name("Randomness");
    this.gui.add(this.guiParams, "depth", 1.0, 10.0).name("Depth");
    this.gui.add(this.guiParams, "mouseSize", 20, 150).name("Mouse Radius");
    this.gui.add(this.guiParams, "mouseForce", 0.1, 3.0).name("Mouse Force");
    this.gui
      .add(this.guiParams, "mouseSmoothing", 0.01, 0.5)
      .name("Mouse Smoothing");

    // New parameters
    const advancedFolder = this.gui.addFolder("Advanced");
    advancedFolder
      .add(this.guiParams, "idleMovement", 0.0, 1.0)
      .name("Idle Movement");
    advancedFolder
      .add(this.guiParams, "idleSpeed", 0.1, 2.0)
      .name("Idle Speed");
    advancedFolder
      .add(this.guiParams, "idleIntensity", 0.1, 2.0)
      .name("Idle Intensity");
    advancedFolder
      .add(this.guiParams, "particleSpring", 0.1, 2.0)
      .name("Spring Effect");
    advancedFolder
      .add(this.guiParams, "glowStrength", 0.0, 1.0)
      .name("Glow Strength");
    advancedFolder
      .add(this.guiParams, "colorVariation", 0.0, 0.5)
      .name("Color Variation");
    advancedFolder
      .add(this.guiParams, "fadeSpeed", 0.01, 0.3)
      .name("Fade Speed");

    this.gui.add(this.guiParams, "debug").name("Debug Mode");
  }

  loadTexture() {
    this.image.onload = () => {
      this.imageTexture = new THREE.Texture(this.image);
      this.imageTexture.needsUpdate = true;
      this.initParticles();
    };

    // If image is already loaded
    if (this.image.complete) {
      this.imageTexture = new THREE.Texture(this.image);
      this.imageTexture.needsUpdate = true;
      this.initParticles();
    }
  }

  initTouchTexture() {
    this.touchCanvas = document.createElement("canvas");
    this.touchCanvas.width = this.imageWidth;
    this.touchCanvas.height = this.imageHeight;
    this.touchContext = this.touchCanvas.getContext("2d");

    // Create grayscale image
    this.touchContext.fillStyle = "black";
    this.touchContext.fillRect(0, 0, this.imageWidth, this.imageHeight);

    // Create texture
    this.touchTexture = new THREE.Texture(this.touchCanvas);
    this.touchTexture.minFilter = THREE.LinearFilter;
    this.touchTexture.magFilter = THREE.LinearFilter;
    this.touchTexture.needsUpdate = true;

    // Debug: Add canvas to body to see what's happening
    if (this.guiParams.debug) {
      this.touchCanvas.style.position = "absolute";
      this.touchCanvas.style.top = "0";
      this.touchCanvas.style.left = "0";
      this.touchCanvas.style.zIndex = "9999";
      this.touchCanvas.style.border = "1px solid red";
      this.touchCanvas.style.width = "320px";
      this.touchCanvas.style.height = "180px";
      document.body.appendChild(this.touchCanvas);
    }
  }

  initParticles() {
    // Filter image pixels to keep only those above threshold
    let originalColors;
    let numVisible = 0;
    const imgData = this.getImageData();
    originalColors = Float32Array.from(imgData.data);

    for (let i = 0; i < this.numPoints; i++) {
      if (originalColors[i * 4] > this.threshold) numVisible++;
    }

    this.numVisiblePoints = numVisible;

    // Create geometry
    const geometry = new THREE.InstancedBufferGeometry();

    // Positions (vertices of quad)
    const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
    positions.setXYZ(0, -0.5, 0.5, 0.0);
    positions.setXYZ(1, 0.5, 0.5, 0.0);
    positions.setXYZ(2, -0.5, -0.5, 0.0);
    positions.setXYZ(3, 0.5, -0.5, 0.0);
    geometry.setAttribute("position", positions);

    // UVs
    const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
    uvs.setXY(0, 0.0, 0.0);
    uvs.setXY(1, 1.0, 0.0);
    uvs.setXY(2, 0.0, 1.0);
    uvs.setXY(3, 1.0, 1.0);
    geometry.setAttribute("uv", uvs);

    // Index
    geometry.setIndex(
      new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
    );

    // Instanced attributes
    const indices = new Uint16Array(this.numVisiblePoints);
    const offsets = new Float32Array(this.numVisiblePoints * 3);
    const angles = new Float32Array(this.numVisiblePoints);

    for (let i = 0, j = 0; i < this.numPoints; i++) {
      if (originalColors[i * 4] <= this.threshold) continue;

      offsets[j * 3 + 0] = i % this.imageWidth;
      offsets[j * 3 + 1] = Math.floor(i / this.imageWidth);
      offsets[j * 3 + 2] = 0;

      indices[j] = i;
      angles[j] = Math.random() * Math.PI;

      j++;
    }

    geometry.setAttribute(
      "pindex",
      new THREE.InstancedBufferAttribute(indices, 1, false)
    );
    geometry.setAttribute(
      "offset",
      new THREE.InstancedBufferAttribute(offsets, 3, false)
    );
    geometry.setAttribute(
      "angle",
      new THREE.InstancedBufferAttribute(angles, 1, false)
    );

    // Material
    const uniforms = {
      uTime: { value: 0 },
      uRandom: { value: this.guiParams.randomness },
      uDepth: { value: this.guiParams.depth },
      uSize: { value: this.guiParams.particleSize },
      uTextureSize: {
        value: new THREE.Vector2(this.imageWidth, this.imageHeight)
      },
      uTexture: { value: this.imageTexture },
      uTouch: { value: this.touchTexture },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseSize: { value: this.guiParams.mouseSize },
      uMouseForce: { value: this.guiParams.mouseForce },
      uEasingFactor: { value: 0.2 },
      uIdleMovement: { value: this.guiParams.idleMovement },
      uIdleSpeed: { value: this.guiParams.idleSpeed },
      uIdleIntensity: { value: this.guiParams.idleIntensity },
      uParticleSpring: { value: this.guiParams.particleSpring },
      uGlowStrength: { value: this.guiParams.glowStrength },
      uColorVariation: { value: this.guiParams.colorVariation }
    };

    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthTest: false,
      transparent: true
    });

    // Create mesh
    this.particles = new THREE.Mesh(geometry, material);
    this.scene.add(this.particles);

    // Center the particles
    this.particles.position.x = -this.imageWidth / 2;
    this.particles.position.y = -this.imageHeight / 2;
  }

  getImageData() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = this.imageWidth;
    canvas.height = this.imageHeight;
    ctx.scale(1, -1); // Flip y
    ctx.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight * -1);

    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  updateTouchTexture() {
    // Clear canvas with fade effect for smoother trails
    this.touchContext.fillStyle = `rgba(0, 0, 0, ${this.guiParams.fadeSpeed})`;
    this.touchContext.fillRect(0, 0, this.imageWidth, this.imageHeight);

    // Draw mouse position with velocity-based intensity
    const x = this.mouse.x * this.imageWidth;
    const y = this.mouse.y * this.imageHeight;
    const size = this.guiParams.mouseSize;

    // Calculate intensity based on mouse speed
    const speedFactor = Math.min(1, this.mouseSpeed * 15);
    const intensity = this.isMouseMoving ? 0.7 + speedFactor * 0.3 : 0.5;

    // Create gradient with more natural falloff
    const gradient = this.touchContext.createRadialGradient(
      x,
      y,
      0,
      x,
      y,
      size
    );

    gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity})`);
    gradient.addColorStop(0.3, `rgba(255, 255, 255, ${intensity * 0.6})`);
    gradient.addColorStop(0.7, `rgba(255, 255, 255, ${intensity * 0.2})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.0)");

    this.touchContext.fillStyle = gradient;
    this.touchContext.beginPath();
    this.touchContext.arc(x, y, size, 0, Math.PI * 2);
    this.touchContext.fill();

    // Add a smaller, more intense center for better definition
    if (this.isMouseMoving) {
      const centerGradient = this.touchContext.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        size * 0.3
      );

      centerGradient.addColorStop(0, `rgba(255, 255, 255, ${intensity * 1.2})`);
      centerGradient.addColorStop(1, "rgba(255, 255, 255, 0.0)");

      this.touchContext.fillStyle = centerGradient;
      this.touchContext.beginPath();
      this.touchContext.arc(x, y, size * 0.3, 0, Math.PI * 2);
      this.touchContext.fill();
    }

    this.touchTexture.needsUpdate = true;
  }

  animate() {
    if (!this.isRunning) return;

    //this.stats.begin(); --------------------------------------------
    this.time += 0.05;

    // Calculate mouse velocity
    this.mouseVelocity.x = this.targetMouse.x - this.lastMouse.x;
    this.mouseVelocity.y = this.targetMouse.y - this.lastMouse.y;
    this.mouseSpeed = Math.sqrt(
      this.mouseVelocity.x * this.mouseVelocity.x +
        this.mouseVelocity.y * this.mouseVelocity.y
    );
    this.lastMouse.copy(this.targetMouse);

    // Smooth mouse movement with adaptive smoothing
    // Faster mouse movement = less smoothing for more responsive feel
    const adaptiveSmoothing =
      this.guiParams.mouseSmoothing * (1 - Math.min(0.8, this.mouseSpeed * 5));
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * adaptiveSmoothing;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * adaptiveSmoothing;

    // Update touch texture for traditional method
    this.updateTouchTexture();

    if (this.particles) {
      // Update uniforms
      this.particles.material.uniforms.uTime.value = this.time;
      this.particles.material.uniforms.uRandom.value = this.guiParams.randomness;
      this.particles.material.uniforms.uDepth.value = this.guiParams.depth;
      this.particles.material.uniforms.uSize.value = this.guiParams.particleSize;

      // Direct mouse uniforms
      this.particles.material.uniforms.uMouse.value.copy(this.mouse);
      this.particles.material.uniforms.uMouseSize.value = this.guiParams.mouseSize;
      this.particles.material.uniforms.uMouseForce.value = this.guiParams.mouseForce;
      this.particles.material.uniforms.uIdleMovement.value = this.guiParams.idleMovement;
      this.particles.material.uniforms.uIdleSpeed.value = this.guiParams.idleSpeed;
      this.particles.material.uniforms.uIdleIntensity.value = this.guiParams.idleIntensity;
      this.particles.material.uniforms.uParticleSpring.value = this.guiParams.particleSpring;
      this.particles.material.uniforms.uGlowStrength.value = this.guiParams.glowStrength;
      this.particles.material.uniforms.uColorVariation.value = this.guiParams.colorVariation;
    }

    this.composer.render();
    //this.stats.end(); -------------------------------------

    window.requestAnimationFrame(this.animate.bind(this));
  }

  addListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this), {
      passive: false
    });

    // Track when mouse is moving vs idle
    window.addEventListener("mousemove", () => {
      this.isMouseMoving = true;

      // Clear any existing timeout
      if (this.mouseMovingTimeout) {
        clearTimeout(this.mouseMovingTimeout);
      }

      // Set timeout to detect when mouse stops moving
      this.mouseMovingTimeout = setTimeout(() => {
        this.isMouseMoving = false;
      }, 100);
    });

    // Debug: Toggle debug view when GUI changes
    if (this.gui) {
      this.gui.__controllers.forEach((controller) => {
        if (controller.property === "debug") {
          controller.onChange((value) => {
            if (value && this.touchCanvas) {
              document.body.appendChild(this.touchCanvas);
              this.touchCanvas.style.position = "absolute";
              this.touchCanvas.style.top = "0";
              this.touchCanvas.style.left = "0";
              this.touchCanvas.style.zIndex = "9999";
              this.touchCanvas.style.border = "1px solid red";
              this.touchCanvas.style.width = "320px";
              this.touchCanvas.style.height = "180px";
            } else if (this.touchCanvas && this.touchCanvas.parentNode) {
              document.body.removeChild(this.touchCanvas);
            }
          });
        }
      });
    }
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
  }

  onMouseMove(e) {
    const canvasBounds = this.renderer.domElement.getBoundingClientRect();

    // Project onto 3D scene
    const mouseX =
      ((e.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    const mouseY =
      -((e.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    // Create raycaster and set it from camera
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), this.camera);

    // Define a plane at z=0
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    // Find intersection point
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);

    // Convert to image space (0-1)
    const imgX = (intersection.x + this.imageWidth / 2) / this.imageWidth;
    const imgY = (intersection.y + this.imageHeight / 2) / this.imageHeight;

    // Update target mouse position
    this.targetMouse.set(
      Math.max(0, Math.min(1, imgX)),
      Math.max(0, Math.min(1, imgY))
    );

    // Debug output
    if (this.guiParams.debug) {
      console.log(
        `Mouse: ${this.targetMouse.x.toFixed(2)}, ${this.targetMouse.y.toFixed(
          2
        )}`
      );
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    this.onMouseMove(touch);
  }
}
    // Access window and requestAnimationFrame here
    new App();
    // ... rest of your three.js setup
  } else {
    console.warn('Three.js component is not running on the client');
  }
});
</script>