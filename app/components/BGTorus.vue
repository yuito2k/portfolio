<template>
    <canvas class="bg-torus-canvas"></canvas>
</template>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>

<script>
    import * as THREE from 'three';
    import { Pane } from 'tweakpane';

    onNuxtReady(() => {
        let scene, camera, renderer;
    let toruses = [];
    let smallToruses = [];
    let spheres = [];
    
    const params = {
      numToruses: 15,
      numSmallToruses: 15,
      numSpheres: 15,
      speed: -0.002,
      smallTorusSpeed: 0.002,
      sphereSpeed: -0.003,
      radius: 11,
      tiltAngle: 85,
      cameraX: 11.5,
      cameraY: -8,
      cameraZ: 12.0,
      torusRadius: 1.8,
      torusTube: 0.15,
      smallTorusSize: 1.2,
      smallTorusTube: 0.15,
      sphereSize: 0.5,
      objectScale: 1.0,
      centerX: 2,
      centerY: 0,
      centerZ: 0
    };

    function init() {
      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 10, 30);
      const canvas = document.querySelector(".bg-torus-canvas");

      // Camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      updateCameraPosition();

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvas });
      renderer.setSize(window.innerWidth, window.innerHeight);
      //document.body.appendChild(renderer.domElement);

      // Create toruses
      createToruses();
      createSmallToruses();
      createSpheres();

      // Ambient light
      const light = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(light);

      // Directional light for better solid mesh visibility
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(5, 10, 5);
      scene.add(dirLight);

      // Handle window resize
      window.addEventListener('resize', onWindowResize, false);

      // Setup Tweakpane
      //setupTweakpane();
    }

    function createToruses() {
      // Clear existing toruses
      toruses.forEach(obj => scene.remove(obj.mesh));
      toruses = [];

      for (let i = 0; i < params.numToruses; i++) {
        const geometry = new THREE.TorusGeometry(params.torusRadius, params.torusTube, 16, 100);
        const material = new THREE.MeshStandardMaterial({
          //color: new THREE.Color().setHSL(i / params.numToruses, 0.8, 0.6),
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          wireframe: false,
          metalness: 0.3,
          roughness: 0.4
        });
        
        const torus = new THREE.Mesh(geometry, material);
        
        // Initial angle for each torus
        const angle = (i / params.numToruses) * Math.PI * 2;
        
        toruses.push({
          mesh: torus,
          angle: angle
        });
        
        scene.add(torus);
      }
    }

    function createSmallToruses() {
      // Clear existing small toruses
      smallToruses.forEach(obj => scene.remove(obj.mesh));
      smallToruses = [];

      for (let i = 0; i < params.numSmallToruses; i++) {
        const geometry = new THREE.TorusGeometry(params.smallTorusSize, params.smallTorusTube, 16, 100);
        const material = new THREE.MeshStandardMaterial({
          //color: new THREE.Color().setHSL(0.5 + i / params.numSmallToruses * 0.3, 0.7, 0.5),
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          wireframe: false,
          metalness: 0.4,
          roughness: 0.3
        });
        
        const torus = new THREE.Mesh(geometry, material);
        
        // Initial angle for each small torus (offset from big ones)
        const angle = (i / params.numSmallToruses) * Math.PI * 2 + Math.PI / 6;
        
        smallToruses.push({
          mesh: torus,
          angle: angle
        });
        
        scene.add(torus);
      }
    }

    function createSpheres() {
      // Clear existing spheres
      spheres.forEach(obj => scene.remove(obj.mesh));
      spheres = [];

      for (let i = 0; i < params.numSpheres; i++) {
        const geometry = new THREE.SphereGeometry(params.sphereSize, 32, 32);
        const material = new THREE.MeshStandardMaterial({
          //color: new THREE.Color().setHSL(0.1 + i / params.numSpheres * 0.2, 0.9, 0.6),
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          wireframe: false,
          metalness: 0.5,
          roughness: 0.2
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        
        // Initial angle for each sphere
        const angle = (i / params.numSpheres) * Math.PI * 2;
        
        spheres.push({
          mesh: sphere,
          angle: angle
        });
        
        scene.add(sphere);
      }
    }

    function updateCameraPosition() {
      camera.position.set(params.cameraX, params.cameraY, params.cameraZ);
      camera.lookAt(0, 0, 0);
    }

    function setupTweakpane() {
      const pane = new Pane();

      // Motion settings
      const motionFolder = pane.addFolder({ title: 'Motion' });
      motionFolder.addBinding(params, 'speed', { min: -0.05, max: 0.05, step: 0.001, label: 'Big Torus Speed' });
      motionFolder.addBinding(params, 'smallTorusSpeed', { min: -0.05, max: 0.05, step: 0.001, label: 'Small Torus Speed' });
      motionFolder.addBinding(params, 'sphereSpeed', { min: -0.05, max: 0.05, step: 0.001, label: 'Sphere Speed' });
      motionFolder.addBinding(params, 'radius', { min: 2, max: 20, step: 0.5, label: 'Path Radius' });
      motionFolder.addBinding(params, 'tiltAngle', { min: 0, max: 360, step: 1 });

      // Camera settings
      const cameraFolder = pane.addFolder({ title: 'Camera' });
      cameraFolder.addBinding(params, 'cameraX', { min: -30, max: 30, step: 0.5 })
        .on('change', updateCameraPosition);
      cameraFolder.addBinding(params, 'cameraY', { min: -30, max: 30, step: 0.5 })
        .on('change', updateCameraPosition);
      cameraFolder.addBinding(params, 'cameraZ', { min: 5, max: 40, step: 0.5 })
        .on('change', updateCameraPosition);

      // Center settings
      const centerFolder = pane.addFolder({ title: 'Center Position' });
      centerFolder.addBinding(params, 'centerX', { min: -20, max: 20, step: 0.5, label: 'Center X' });
      centerFolder.addBinding(params, 'centerY', { min: -20, max: 20, step: 0.5, label: 'Center Y' });
      centerFolder.addBinding(params, 'centerZ', { min: -20, max: 20, step: 0.5, label: 'Center Z' });

      // Object settings
      const objectFolder = pane.addFolder({ title: 'Object' });
      objectFolder.addBinding(params, 'numToruses', { min: 1, max: 30, step: 1, label: 'Big Toruses' })
        .on('change', createToruses);
      objectFolder.addBinding(params, 'numSmallToruses', { min: 1, max: 30, step: 1, label: 'Small Toruses' })
        .on('change', createSmallToruses);
      objectFolder.addBinding(params, 'numSpheres', { min: 1, max: 30, step: 1, label: 'Spheres' })
        .on('change', createSpheres);
      objectFolder.addBinding(params, 'torusRadius', { min: 0.3, max: 3, step: 0.1, label: 'Big Torus Size' })
        .on('change', createToruses);
      objectFolder.addBinding(params, 'torusTube', { min: 0.05, max: 0.5, step: 0.05, label: 'Big Torus Tube' })
        .on('change', createToruses);
      objectFolder.addBinding(params, 'smallTorusSize', { min: 0.2, max: 2, step: 0.1, label: 'Small Torus Size' })
        .on('change', createSmallToruses);
      objectFolder.addBinding(params, 'smallTorusTube', { min: 0.05, max: 0.3, step: 0.05, label: 'Small Torus Tube' })
        .on('change', createSmallToruses);
      objectFolder.addBinding(params, 'sphereSize', { min: 0.1, max: 1.5, step: 0.1, label: 'Sphere Size' })
        .on('change', createSpheres);
      objectFolder.addBinding(params, 'objectScale', { min: 0.1, max: 2, step: 0.1 });
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      const tiltRad = params.tiltAngle * Math.PI / 180;

      // Animate big toruses
      toruses.forEach((torusObj) => {
        torusObj.angle += params.speed;

        const x = Math.sin(torusObj.angle) * params.radius * Math.cos(tiltRad) + params.centerX;
        const y = Math.cos(torusObj.angle) * params.radius + params.centerY;
        const z = Math.sin(torusObj.angle) * params.radius * Math.sin(tiltRad) + params.centerZ;

        torusObj.mesh.position.set(x, y, z);

        const tangentX = Math.cos(torusObj.angle) * params.radius * Math.cos(tiltRad);
        const tangentY = -Math.sin(torusObj.angle) * params.radius;
        const tangentZ = Math.cos(torusObj.angle) * params.radius * Math.sin(tiltRad);

        torusObj.mesh.lookAt(x + tangentX, y + tangentY, z + tangentZ);

        const distance = camera.position.distanceTo(torusObj.mesh.position);
        const maxDistance = 20;
        const minDistance = 5;
        const opacity = Math.max(0, Math.min(1, 1 - (distance - minDistance) / (maxDistance - minDistance)));
        torusObj.mesh.material.opacity = opacity;

        const scale = (1 - (distance - minDistance) / (maxDistance - minDistance) * 0.3) * params.objectScale;
        torusObj.mesh.scale.set(Math.max(0.5, scale), Math.max(0.5, scale), Math.max(0.5, scale));
      });

      // Animate small toruses (opposite direction)
      smallToruses.forEach((torusObj) => {
        torusObj.angle += params.smallTorusSpeed;

        const x = Math.sin(torusObj.angle) * params.radius * Math.cos(tiltRad) + params.centerX;
        const y = Math.cos(torusObj.angle) * params.radius + params.centerY;
        const z = Math.sin(torusObj.angle) * params.radius * Math.sin(tiltRad) + params.centerZ;

        torusObj.mesh.position.set(x, y, z);

        const tangentX = Math.cos(torusObj.angle) * params.radius * Math.cos(tiltRad);
        const tangentY = -Math.sin(torusObj.angle) * params.radius;
        const tangentZ = Math.cos(torusObj.angle) * params.radius * Math.sin(tiltRad);

        torusObj.mesh.lookAt(x + tangentX, y + tangentY, z + tangentZ);

        const distance = camera.position.distanceTo(torusObj.mesh.position);
        const maxDistance = 20;
        const minDistance = 5;
        const opacity = Math.max(0, Math.min(1, 1 - (distance - minDistance) / (maxDistance - minDistance)));
        torusObj.mesh.material.opacity = opacity;

        const scale = (1 - (distance - minDistance) / (maxDistance - minDistance) * 0.3) * params.objectScale;
        torusObj.mesh.scale.set(Math.max(0.5, scale), Math.max(0.5, scale), Math.max(0.5, scale));
      });

      // Animate spheres (same direction as big toruses)
      spheres.forEach((sphereObj) => {
        sphereObj.angle += params.sphereSpeed;

        const x = Math.sin(sphereObj.angle) * params.radius * Math.cos(tiltRad) + params.centerX;
        const y = Math.cos(sphereObj.angle) * params.radius + params.centerY;
        const z = Math.sin(sphereObj.angle) * params.radius * Math.sin(tiltRad) + params.centerZ;

        sphereObj.mesh.position.set(x, y, z);

        const distance = camera.position.distanceTo(sphereObj.mesh.position);
        const maxDistance = 20;
        const minDistance = 5;
        const opacity = Math.max(0, Math.min(1, 1 - (distance - minDistance) / (maxDistance - minDistance)));
        sphereObj.mesh.material.opacity = opacity;

        const scale = (1 - (distance - minDistance) / (maxDistance - minDistance) * 0.3) * params.objectScale;
        sphereObj.mesh.scale.set(Math.max(0.5, scale), Math.max(0.5, scale), Math.max(0.5, scale));
      });

      renderer.render(scene, camera);
    }

    init();
    animate();
    })
</script>