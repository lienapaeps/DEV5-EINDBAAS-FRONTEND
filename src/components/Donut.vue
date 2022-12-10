<script setup>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted } from 'vue';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 3, 1000 );
    const camera = new THREE.OrthographicCamera( window.innerWidth / - 150, window.innerWidth / 150, window.innerHeight / 150, window.innerHeight / -150, 1, 1000); 
    camera.position.z = 10;
    camera.position.y = 3;
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight )

    onMounted (() => {
        document.querySelector(".donut").appendChild(renderer.domElement);

    })

    //load DonutMix.glb
    const gltfLoader = new GLTFLoader();
    let donut;
    gltfLoader.load('/DonutMix.glb', ( glb ) => {
        donut = glb.scene;
        donut.scale.set(70, 70, 70);
        donut.position.set(-.4, 5, 0);
        donut.rotateX(0.3);
        donut.rotateZ(-0.10);
        scene.add( donut );
    });

    const DirectionalLight = new THREE.DirectionalLight(0xfffffff, 1.2);
    DirectionalLight.position.set(2, 4, 2);
    scene.add(DirectionalLight);

    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.7 );
    scene.add( ambientLight );

    function animate() {
    requestAnimationFrame(animate);
    if (donut) {
        donut.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
    }

animate();
    
</script>

<template>
    <div>

    </div>
</template>

<style scoped>

</style>