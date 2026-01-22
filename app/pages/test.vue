<template>
</template>

<script>
  import * as THREE from 'three';
  import { Pane } from 'tweakpane';
    
  onNuxtReady(() => {
    let scene, camera, renderer;
    let toruses = [];
    
    const params = {
      numToruses: 15,
      speed: -0.003,
      radius: 12.5,
      tiltAngle: 85,
      cameraX: 12.5,
      cameraY: -8,
      cameraZ: 12.5,
      torusRadius: 1.5,
      torusTube: 0.15,
      objectScale: 1.0
    };

    function init() {
      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 15, 30);

      // Camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      updateCameraPosition();

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Create toruses
      createToruses();

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
      setupTweakpane();
    }

    function createToruses() {
      // Clear existing toruses
      toruses.forEach(obj => scene.remove(obj.mesh));
      toruses = [];

      for (let i = 0; i < params.numToruses; i++) {
        const geometry = new THREE.TorusGeometry(params.torusRadius, params.torusTube, 16, 100);
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(i / params.numToruses, 0.8, 0.6),
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

    function updateCameraPosition() {
      camera.position.set(params.cameraX, params.cameraY, params.cameraZ);
      camera.lookAt(0, 0, 0);
    }

    function setupTweakpane() {
      const pane = new Pane();

      // Motion settings
      const motionFolder = pane.addFolder({ title: 'Motion' });
      motionFolder.addBinding(params, 'speed', { min: -10, max: 0.05, step: 0.001 });
      motionFolder.addBinding(params, 'radius', { min: 2, max: 20, step: 0.5 });
      motionFolder.addBinding(params, 'tiltAngle', { min: 0, max: 360, step: 1 });

      // Camera settings
      const cameraFolder = pane.addFolder({ title: 'Camera' });
      cameraFolder.addBinding(params, 'cameraX', { min: -30, max: 30, step: 0.5 })
        .on('change', updateCameraPosition);
      cameraFolder.addBinding(params, 'cameraY', { min: -30, max: 30, step: 0.5 })
        .on('change', updateCameraPosition);
      cameraFolder.addBinding(params, 'cameraZ', { min: 5, max: 40, step: 0.5 })
        .on('change', updateCameraPosition);

      // Object settings
      const objectFolder = pane.addFolder({ title: 'Object' });
      objectFolder.addBinding(params, 'numToruses', { min: 1, max: 30, step: 1 })
        .on('change', createToruses);
      objectFolder.addBinding(params, 'torusRadius', { min: 0.3, max: 3, step: 0.1 })
        .on('change', createToruses);
      objectFolder.addBinding(params, 'torusTube', { min: 0.05, max: 0.5, step: 0.05 })
        .on('change', createToruses);
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

      toruses.forEach((torusObj) => {
        // Update angle
        torusObj.angle += params.speed;

        // Calculate position on vertical circular path (tilted)
        const x = Math.sin(torusObj.angle) * params.radius * Math.cos(tiltRad);
        const y = Math.cos(torusObj.angle) * params.radius;
        const z = Math.sin(torusObj.angle) * params.radius * Math.sin(tiltRad);

        torusObj.mesh.position.set(x, y, z);

        // Orient the torus to face along the path (tangent to the circle)
        // Calculate the tangent direction
        const tangentX = Math.cos(torusObj.angle) * params.radius * Math.cos(tiltRad);
        const tangentY = -Math.sin(torusObj.angle) * params.radius;
        const tangentZ = Math.cos(torusObj.angle) * params.radius * Math.sin(tiltRad);

        // Make the torus face the direction of movement
        torusObj.mesh.lookAt(x + tangentX, y + tangentY, z + tangentZ);

        // Calculate distance from camera
        const distance = camera.position.distanceTo(torusObj.mesh.position);

        // Fade based on distance (closer = more opaque)
        const maxDistance = 23;
        const minDistance = 15;
        const opacity = Math.max(
          0,
          Math.min(
            1,
            1 - (distance - minDistance) / (maxDistance - minDistance)
          )
        );

        torusObj.mesh.material.opacity = opacity;

        // Scale based on distance for depth perception
        const scale = (1 - (distance - minDistance) / (maxDistance - minDistance) * 0.3) * params.objectScale;
        torusObj.mesh.scale.set(
          Math.max(0.5, scale),
          Math.max(0.5, scale),
          Math.max(0.5, scale)
        );
      });

      renderer.render(scene, camera);
    }

    init();
    animate();
  })
</script>