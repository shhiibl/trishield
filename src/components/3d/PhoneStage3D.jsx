import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePresentation } from '../../context/PresentationContext';

export default function PhoneStage3D() {
  const canvasRef = useRef(null);
  const {
    currentSlide,
    activeFeature,
    hoveredLayer,
    mousePos,
    reducedMotion
  } = usePresentation();

  // Store 3D scene references
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const phoneGroupRef = useRef(null);
  const layersGroupRef = useRef([]);

  // Target animation state
  const targetStateRef = useRef({
    rotX: 0,
    rotY: Math.PI,
    rotZ: 0,
    posX: 0,
    posY: 0,
    posZ: 0,
    scale: 1,
    exploded: 0
  });

  const currentStateRef = useRef({
    rotX: 0,
    rotY: Math.PI,
    rotZ: 0,
    posX: 0,
    posY: 0,
    posZ: 0,
    scale: 1,
    exploded: 0
  });

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(-5, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xff5500, 0.6);
    dirLight2.position.set(5, -3, 4);
    scene.add(dirLight2);

    // Phone Back Cover Model Group
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    const caseW = 2.15;
    const caseH = 4.25;
    const caseD = 0.22;
    const borderRadius = 0.38;

    const createRoundedRectShape = (w, h, r) => {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x + r, y);
      shape.lineTo(x + w - r, y);
      shape.quadraticCurveTo(x + w, y, x + w, y + r);
      shape.lineTo(x + w, y + h - r);
      shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      shape.lineTo(x + r, y + h);
      shape.quadraticCurveTo(x, y + h, x, y + h - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      return shape;
    };

    const shape = createRoundedRectShape(caseW, caseH, borderRadius);
    const extrudeSettings = {
      depth: caseD / 5,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.03
    };

    // Anatomy Distinct Layer Materials
    const outerBackShellMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d26,
      metalness: 0.85,
      roughness: 0.2
    });

    const liquidCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      opacity: 0.95,
      transparent: true,
      roughness: 0.06,
      ior: 1.45,
      reflectivity: 0.85
    });

    const elastomerMatrixMat = new THREE.MeshStandardMaterial({
      color: 0x282c3a,
      metalness: 0.2,
      roughness: 0.6
    });

    const thermalSpreaderMat = new THREE.MeshStandardMaterial({
      color: 0x111318,
      metalness: 0.95,
      roughness: 0.15
    });

    const innerCaseLiningMat = new THREE.MeshStandardMaterial({
      color: 0x08090c,
      metalness: 0.4,
      roughness: 0.7
    });

    const materials = [
      outerBackShellMat,
      liquidCoreMat,
      elastomerMatrixMat,
      thermalSpreaderMat,
      innerCaseLiningMat
    ];

    layersGroupRef.current = [];

    // Create 5 Floating Back Cover Hardware Layers
    for (let i = 0; i < 5; i++) {
      const layerGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      layerGeo.center();

      const mesh = new THREE.Mesh(layerGeo, materials[i].clone());
      mesh.position.z = (i - 2) * 0.07;

      // Add REAR CAMERA ISLAND & LENSES on the Outer Back Cover (Layer 0)
      if (i === 0) {
        const camPlateGeo = new THREE.BoxGeometry(0.75, 0.85, 0.08);
        const camPlateMat = new THREE.MeshStandardMaterial({ color: 0x0c0d12, roughness: 0.1, metalness: 0.9 });
        const camPlate = new THREE.Mesh(camPlateGeo, camPlateMat);
        camPlate.position.set(-0.48, 1.15, -0.06);
        mesh.add(camPlate);

        const lensGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.05, 32);
        const lensMat = new THREE.MeshPhysicalMaterial({ color: 0x050505, roughness: 0.0, transmission: 0.8 });

        const lens1 = new THREE.Mesh(lensGeo, lensMat);
        lens1.rotation.x = Math.PI / 2;
        lens1.position.set(-0.6, 1.35, -0.11);
        mesh.add(lens1);

        const lens2 = new THREE.Mesh(lensGeo, lensMat);
        lens2.rotation.x = Math.PI / 2;
        lens2.position.set(-0.6, 0.95, -0.11);
        mesh.add(lens2);

        const lens3 = new THREE.Mesh(lensGeo, lensMat);
        lens3.rotation.x = Math.PI / 2;
        lens3.position.set(-0.35, 1.15, -0.11);
        mesh.add(lens3);

        const bumperMat = new THREE.MeshStandardMaterial({ color: 0xff5500, roughness: 0.4 });
        const bumperGeo = new THREE.BoxGeometry(0.15, 0.15, 0.1);

        const b1 = new THREE.Mesh(bumperGeo, bumperMat);
        b1.position.set(-caseW / 2 + 0.05, caseH / 2 - 0.05, -0.02);
        mesh.add(b1);

        const b2 = new THREE.Mesh(bumperGeo, bumperMat);
        b2.position.set(caseW / 2 - 0.05, caseH / 2 - 0.05, -0.02);
        mesh.add(b2);
      }

      // Add Hydro-Seal Perimeter Gasket Accent on Layer 4
      if (i === 4) {
        const ringGeo = new THREE.BoxGeometry(caseW * 0.95, caseH * 0.95, 0.02);
        const ringMat = new THREE.MeshStandardMaterial({ color: 0x0088ff, roughness: 0.2 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.z = 0.04;
        mesh.add(ringMesh);
      }

      const layerHolder = new THREE.Group();
      layerHolder.add(mesh);
      layerHolder.userData = { layerIndex: i, baseZ: (i - 2) * 0.07 };

      layersGroupRef.current.push(layerHolder);
      phoneGroup.add(layerHolder);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const curr = currentStateRef.current;
      const targ = targetStateRef.current;

      const lerp = reducedMotion ? 1.0 : 0.06;

      curr.rotX += (targ.rotX - curr.rotX) * lerp;
      curr.rotY += (targ.rotY - curr.rotY) * lerp;
      curr.rotZ += (targ.rotZ - curr.rotZ) * lerp;

      curr.posX += (targ.posX - curr.posX) * lerp;
      curr.posY += (targ.posY - curr.posY) * lerp;
      curr.posZ += (targ.posZ - curr.posZ) * lerp;

      curr.scale += (targ.scale - curr.scale) * lerp;
      curr.exploded += (targ.exploded - curr.exploded) * lerp;

      const mouseParallaxX = reducedMotion ? 0 : mousePos.y * 0.025;
      const mouseParallaxY = reducedMotion ? 0 : mousePos.x * 0.025;

      if (phoneGroupRef.current) {
        phoneGroupRef.current.rotation.x = curr.rotX + mouseParallaxX;
        phoneGroupRef.current.rotation.y = curr.rotY + mouseParallaxY;
        phoneGroupRef.current.rotation.z = curr.rotZ;

        phoneGroupRef.current.position.x = curr.posX;
        phoneGroupRef.current.position.y = curr.posY;
        phoneGroupRef.current.position.z = curr.posZ;

        phoneGroupRef.current.scale.set(curr.scale, curr.scale, curr.scale);
      }

      // Layer explosion update for Slide 3 (Layer Anatomy)
      if (layersGroupRef.current.length === 5) {
        const explodedDisplacements = [0.75, 1.4, -0.4, -1.1, -1.8];

        layersGroupRef.current.forEach((layerHolder, idx) => {
          const targetZ = layerHolder.userData.baseZ + explodedDisplacements[idx] * curr.exploded;
          layerHolder.position.z += (targetZ - layerHolder.position.z) * lerp;

          const mesh = layerHolder.children[0];
          if (mesh) {
            if (curr.exploded > 0.3 && hoveredLayer === idx) {
              mesh.material.color = new THREE.Color(0xff5500);
            } else {
              mesh.material.color = new THREE.Color(materials[idx].color);
            }
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update target states per slide for 8 slides
  useEffect(() => {
    const targ = targetStateRef.current;

    switch (currentSlide) {
      case 0: // 01 / THE PROBLEM
        targ.rotX = 0.12;
        targ.rotY = Math.PI - 0.25;
        targ.rotZ = 0.05;
        targ.posX = 0;
        targ.posY = 0;
        targ.posZ = 0;
        targ.scale = 1.0;
        targ.exploded = 0;
        break;

      case 1: // 02 / PRODUCT REVEAL
        targ.rotX = 0;
        targ.rotY = Math.PI + 0.15;
        targ.rotZ = 0;
        targ.posX = 0;
        targ.posY = 0;
        targ.posZ = 0.3;
        targ.scale = 1.08;
        targ.exploded = 0;
        break;

      case 2: // 03 / LAYER ANATOMY (Technical Exploded Diagram View)
        targ.rotX = 0.25;
        targ.rotY = Math.PI - 0.45;
        targ.rotZ = 0.05;
        targ.posX = 0.1;
        targ.posY = 0.05;
        targ.posZ = -0.1;
        targ.scale = 0.88;
        targ.exploded = 1.0;
        break;

      case 3: // 04 / THERMAL DYNAMICS (Focus on Graphite & Fluid Buffer Layer)
        targ.rotX = 0.15;
        targ.rotY = Math.PI + 0.35;
        targ.rotZ = 0;
        targ.posX = -1.0;
        targ.posY = 0;
        targ.posZ = 0.1;
        targ.scale = 0.92;
        targ.exploded = 0.2;
        break;

      case 4: // 05 / IMPACT & HYDRO-SEAL (Focus on Honeycomb & Gasket)
        targ.rotX = -0.18;
        targ.rotY = Math.PI - 0.2;
        targ.rotZ = 0;
        targ.posX = -1.0;
        targ.posY = 0;
        targ.posZ = 0.1;
        targ.scale = 0.92;
        targ.exploded = 0.35;
        break;

      case 5: // 06 / APPLICATION
        targ.rotX = 0.05;
        targ.rotY = Math.PI + 0.2;
        targ.rotZ = 0;
        targ.posX = 1.1;
        targ.posY = 0;
        targ.posZ = 0.1;
        targ.scale = 0.95;
        targ.exploded = 0;
        break;

      case 6: // 07 / FINANCIAL MODEL
        targ.rotX = 0.05;
        targ.rotY = Math.PI - 0.25;
        targ.rotZ = 0;
        targ.posX = -1.3;
        targ.posY = -0.1;
        targ.posZ = -0.3;
        targ.scale = 0.82;
        targ.exploded = 0;
        break;

      case 7: // 08 / THE REVEAL & CTA
        targ.rotX = 0;
        targ.rotY = Math.PI;
        targ.rotZ = 0;
        targ.posX = 0;
        targ.posY = 0.1;
        targ.posZ = 0.4;
        targ.scale = 1.05;
        targ.exploded = 0;
        break;

      default:
        break;
    }
  }, [currentSlide, activeFeature]);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: currentSlide === 2 ? 'auto' : 'none'
      }}
    />
  );
}
