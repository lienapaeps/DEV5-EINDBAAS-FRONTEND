<script setup>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted } from 'vue';
    // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 3, 1000 );
    let camera = new THREE.OrthographicCamera( window.innerWidth / - 150, window.innerWidth / 150, window.innerHeight / 150, window.innerHeight / -150, 1, 1000); 
    camera.position.z = 10;
    camera.position.y = 3;

    let stopturning = false;

    const renderer = new THREE.WebGLRenderer();
    if (window.innerWidth < 768) {
        renderer.setSize( window.innerWidth, window.innerHeight )
    } else {
        renderer.setSize( window.innerWidth / 2, window.innerHeight/2 )
    }

    // const controls = new OrbitControls( camera, renderer.domElement );
    // only orbit around the x axis
    // controls.minPolarAngle = Math.PI/2;
    // controls.maxPolarAngle = Math.PI/2;

    function resize() {
        window.location.reload();
    }; 

    window.addEventListener("resize", resize);

    onMounted (() => {
        document.querySelector(".donut").appendChild(renderer.domElement);

        //sprinkles
        const sprinklescheck = document.querySelector(".topping--sprinkles");
        sprinklescheck.addEventListener("click", () => {
            if(donut.children[1].visible == true) {
                donut.children[1].visible = false;
            } else {
                const border = document.querySelector(".topping--sprinkles")
                border.style.border = "3px solid var(--strawberry-pink))";
                donut.children[1].visible = true;
            }
        })

        //crumbles
        const crumblescheck = document.querySelector(".topping--crumbles");
        crumblescheck.addEventListener("click", () => {
            if(donut.children[3].visible == true) {
                donut.children[3].visible = false;
            } else {
                donut.children[3].visible = true;
            }
        })

        //marshmallows
        const marshmallowscheck = document.querySelector(".topping--marshmallow");
        marshmallowscheck.addEventListener("click", () => {
            if(donut.children[2].visible == true) {
                donut.children[2].visible = false;
            } else {
                donut.children[2].visible = true;
            }
        })

        //malteser
        const maltesercheck = document.querySelector(".topping--malteser");
        maltesercheck.addEventListener("click", () => {
            if(donut.children[3].visible == true) {
                donut.children[3].visible = false;
            } else {
                donut.children[3].visible = true;
            }
        })

        //icing color
        const icing = document.querySelectorAll(".icinginput");
        //foreach icing log the color
        icing.forEach(ice => {
            ice.addEventListener("click", (e) => {
                donut.children[0].material.color.set(e.target.value);
                // console.log(e.target.value)
            })
        });

        let fileInput = document.getElementById('company_logo');
        var rectangleTexture;
        fileInput.addEventListener("change", function(e) {
            stopturning = true;
            const reader = new FileReader();
            reader.addEventListener("load", () => {
            const uploadedImage = reader.result;
            console.log(uploadedImage)
            rectangleTexture = new THREE.TextureLoader().load( uploadedImage );
            console.log(rectangleTexture)

            // rectanglecard
            const rectangleGeometry = new THREE.BoxGeometry(3, .1, 1.5);
            const rectangleMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
            rectangleMaterial.map = rectangleTexture;
            const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
            rectangle.name = "rectangle";
            if (window.innerWidth < 768) {
                rectangle.scale.set(.8, 1, .8);
                rectangle.position.set(0, 6, 3.3)
            } else {
                rectangle.position.set(0, 2, 4.5)
            }
            rectangle.rotation.x = 1.65; //1.5
            rectangle.rotation.y = -.03; //1.5

            const checkboxRectangle = document.querySelector(".logo--rectangle");
            checkboxRectangle.addEventListener("click", () => {
                if (scene.getObjectByName('rectangle')) {
                    // scene.remove(square);
                    // scene.remove(circle);
                    // scene.remove(oval);
                    scene.remove(rectangle);
                } else {
                    scene.add(rectangle);
                }
            });

            // document.getElementById("imageContainer").style.backgroundImage = 'url('+uploadedImage+')';
            // document.getElementById("base64Container").innerHTML = uploadedImage;
        });
        reader.readAsDataURL(this.files[0]);
        });

        
    })

    //load DonutMix.glb
    const gltfLoader = new GLTFLoader();
    let donut;
    gltfLoader.load('/DEZE.glb', ( glb ) => {
        donut = glb.scene;
        if (window.innerWidth < 768) {
            donut.scale.set(55, 55, 55);
            donut.position.set(-.35, 5 , 0);
        } else {
            donut.scale.set(80, 80, 80);
            donut.position.set(-.5, 1 , 0);
        }
        donut.rotateX(0.3);
        donut.rotateZ(-0.10);
        donut.children[0].material.color.set("#ce4670"); //glace
        donut.children[1].visible = false; //sprinkles
        donut.children[2].visible = false; //marshmallows
        donut.children[2].material.color.set("rgb(225, 225, 225)");
        donut.children[2].material.emissive.set("rgb(200, 200, 200)");
        donut.children[3].visible = false; //maltesers
        donut.children[3].position.set(0.0326, 0.0467, 0.002);
        donut.children[3].rotateX(-.1);
        donut.children[3].children[0].material.emissive.set("rgb(70, 40, 40)");
        donut.children[3].children[0].material.color.set("rgb(70, 40, 40)");
        donut.children[3].children[1].material.emissive.set("rgb(70, 40, 40)");
        donut.children[3].children[1].material.color.set("rgb(70, 40, 40)");
        donut.children[3].children[2].material.emissive.set("rgb(70, 40, 40)");
        donut.children[3].children[2].material.color.set("rgb(70, 40, 40)");
        donut.children[3].children[3].material.emissive.set("rgb(70, 40, 40)");
        donut.children[3].children[3].material.color.set("rgb(70, 40, 40)");
        donut.children[3].children[4].material.emissive.set("rgb(70, 40, 40)");
        donut.children[3].children[4].material.color.set("rgb(70, 40, 40)");
        // console.log(donut)
        scene.add( donut );
    });

    const DirectionalLight = new THREE.DirectionalLight(0xfffffff, .5);
    DirectionalLight.position.set(2, 4, 2);
    scene.add(DirectionalLight);

    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.7 );
    scene.add( ambientLight );

    
    function animate() {
    requestAnimationFrame(animate);
    if (donut) {
        if(stopturning == false) {
            donut.rotation.y += 0.002;
        }
    }
    renderer.render(scene, camera);
    }

    animate();
    
</script>

<template>
    
</template>

<style scoped>

</style>