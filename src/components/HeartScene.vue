<template>
<div 
    class="scene-container"
    @mouseup="$emit('touchHeart')"
    @touchend="$emit('touchHeart')"
></div>
</template>

<script>
// import * as THREE from 'three'
import OBJLoader from "three-obj-loader";
import OrbitControls from "../js/OrbitControl.js";

export default {
    props: {
        modelSize: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            controls: null,
            autoRotateSpeed: 1.0
        };
    },
    mounted() {
        this.scene.add(new THREE.AmbientLight(0x444444));
        this.scene.add(this.light)
        this.initModel();
        this.initControls();
        this.animate();

        window.onresize = this.onWindowResizes;
    },
    methods: {
        initModel() {
            OBJLoader(THREE);
            let loader = new THREE.OBJLoader();
            let modelSize = this.modelSize;
            let scene = this.scene;
            var material = new THREE.MeshLambertMaterial({
                color: 0xff0000
            });
            loader.load("./src/assets/Heart.obj", function(loadedMesh) {
                loadedMesh.children.forEach(function(child) {
                    child.material = material;
                    child.geometry.computeFaceNormals();
                    child.geometry.computeVertexNormals();
                });
                loadedMesh.scale.set(modelSize, modelSize, modelSize);
                loadedMesh.rotation.x = -0.5;
                loadedMesh.rotation.y = 0.35;
                loadedMesh.rotation.z = 0.2;
                scene.add(loadedMesh);
            });
        },
        initControls() {
            this.controls = new OrbitControls(
                this.camera,
                this.renderer.domElement
            );
            this.controls.enableDamping = true;
            this.controls.enableZoom = true;
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = this.autoRotateSpeed;
            this.controls.enablePan = true;
        },
        render() {
            this.renderer.render(this.scene, this.camera);
        },
        animate() {
            this.render();
            this.controls.update();
            requestAnimationFrame(this.animate);
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.render();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    },
    computed: {
        scene() {
            return new THREE.Scene()
        },
        renderer() {
            let renderer = new THREE.WebGLRenderer({ antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setClearColor(0xffffff)
            this.$el.appendChild(renderer.domElement)
            return renderer
        },
        camera() {
            let camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.set(0, 40, 100);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            return camera
        },
        light() {
            let greyLevel = Math.floor(this.modelSize * 2550) 
            let light = new THREE.PointLight(`rgb(${ greyLevel }, ${ greyLevel }, ${ greyLevel })`);
            light.position.set(0, 0, 1000);
            light.castShadow = true;
            return light
        },
        canvasElement() {
            if (this.renderer !== null) {
                return this.renderer.domElement;
            } else {
                return document.createElement("div");
            }
        }
    },
    watch: {
        modelSize: function (val) {
            let modelSize = this.modelSize
            this.scene.children[1] = this.light
            this.scene.children[2].scale.set(modelSize, modelSize, modelSize)
        }
    }
};
</script>

<style>
</style>