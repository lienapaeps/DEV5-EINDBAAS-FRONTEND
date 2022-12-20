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
        fileInput.addEventListener("change", function(e) {
            const reader = new FileReader();
            stopturning = true;
            reader.addEventListener("load", () => {
                const uploadedImage = reader.result;
                let texture = new THREE.TextureLoader().load( uploadedImage );

                // set uploadedImage in localstorage
                localStorage.setItem("uploadedImage", uploadedImage);

                // rectanglecard
                const rectangleGeometry = new THREE.BoxGeometry(3, .1, 1.5);
                const rectangleMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
                rectangleMaterial.map = texture;
                const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
                rectangle.name = "rectangle";
                if (window.innerWidth < 768) {
                    rectangle.scale.set(.8, 1, .8);
                    rectangle.position.set(0, 6, 3.3)
                } else {
                    rectangle.position.set(0, 2, 4.5)
                }
                rectangle.rotation.x = 1.65;
                rectangle.rotation.y = -.03;

                const checkboxRectangle = document.querySelector(".logo--rectangle");
                checkboxRectangle.addEventListener("click", () => {
                    if (scene.getObjectByName('rectangle')) {
                        scene.remove(rectangle);
                    } else {
                        scene.add(rectangle);
                        scene.remove(square);
                        scene.remove(circle);
                        scene.remove(ellipse);
                    }
                });

                // squarecard
                const squareGeometry = new THREE.BoxGeometry(2.5, .1, 2.5);
                const squareMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
                squareMaterial.map = texture;
                const square = new THREE.Mesh(squareGeometry, squareMaterial);
                square.name = "square";
                if (window.innerWidth < 768) {
                    square.scale.set(.8, 1, .8);
                    square.position.set(0, 6, 3.3)
                } else {
                    square.position.set(0, 2, 4.5)
                }
                square.rotation.x = 1.65;
                square.rotation.y = -.03;

                const checkboxsquare = document.querySelector(".logo--square");
                checkboxsquare.addEventListener("click", () => {
                    if (scene.getObjectByName('square')) {
                        scene.remove(square);
                    } else {
                        scene.add(square);
                        scene.remove(rectangle);
                        scene.remove(circle);
                        scene.remove(ellipse);
                    }
                });

                // circlecard
                const circleGeometry = new THREE.CylinderGeometry(1.5, 1.5, .2, 32);
                const circleMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
                circleMaterial.map = texture;
                const circle = new THREE.Mesh(circleGeometry, circleMaterial);
                circle.name = "circle";
                if (window.innerWidth < 768) {
                    circle.scale.set(.8, 1, .8);
                    circle.position.set(0, 6, 3.3)
                } else {
                    circle.position.set(0, 2, 4.5)
                }
                circle.rotation.x = 1.65;
                circle.rotation.y = 1.57;

                const checkboxcircle = document.querySelector(".logo--circle");
                checkboxcircle.addEventListener("click", () => {
                    if (scene.getObjectByName('circle')) {
                        scene.remove(circle);
                    } else {
                        scene.add(circle);
                        scene.remove(rectangle);
                        scene.remove(square);
                        scene.remove(ellipse);
                    }
                });

                // ellipsecard
                const ellipseGeometry = new THREE.CylinderGeometry(2, 2, .2, 32);
                // const ellipseGeometry = new THREE.EllipseCurve(
                //     0,  0,            // ax, aY
                //     1.5, 1.5,           // xRadius, yRadius
                //     0,  2 * Math.PI,  // aStartAngle, aEndAngle
                //     false,            // aClockwise
                //     0                 // aRotation
                // );
                // const points = ellipseGeometry.getPoints( 50 );
                // const ellipseGeometry2 = new THREE.BufferGeometry().setFromPoints( points );
                // const ellipsePath = new THREE.Path(ellipseGeometry.getPoints(50));
                // const ellipseGeometry2 = ellipsePath.createPointsGeometry(50);
                const ellipseMaterial = new THREE.MeshLambertMaterial( { color : 0xffffff, side: THREE.DoubleSide } );
                ellipseMaterial.map = texture;
                const ellipse = new THREE.Mesh(ellipseGeometry, ellipseMaterial);
                ellipse.name = "ellipse";
                if (window.innerWidth < 768) {
                    ellipse.position.set(0, 6, 3.3)
                } else {
                    ellipse.position.set(0, 2, 4.5)
                }
                ellipse.rotation.x = 1.65;
                ellipse.rotation.y = 1.57;
                ellipse.scale.set(.5, 1, .8);

                const checkboxellipse = document.querySelector(".logo--ellipse");
                checkboxellipse.addEventListener("click", () => {
                    console.log('ellipse');
                    if (scene.getObjectByName('ellipse')) {
                        scene.remove(ellipse);
                    } else {
                        scene.add(ellipse);
                        scene.remove(rectangle);
                        scene.remove(square);
                        scene.remove(circle);
                    }
                });
            });
            // document.getElementById("imageContainer").style.backgroundImage = 'url('+uploadedImage+')';
            // document.getElementById("base64Container").innerHTML = uploadedImage;
            reader.readAsDataURL(this.files[0]);

            let checkboxes = document.querySelectorAll('.logo');
            checkboxes.forEach(checkbox => {

                checkbox.addEventListener('click', () => {
                    let ImageUrl = new Image();
                    renderer.render(scene, camera);
                    ImageUrl.src = renderer.domElement.toDataURL();

                    localStorage.setItem('ImageUrl', ImageUrl.src);
                });
            });   
                    
            // LogoUrl.src = document.querySelector("input[name=company_logo]").files[0].name;
            // localStorage.setItem('LogoUrl', LogoUrl.src);
        });
    });

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