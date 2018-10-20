<template>
    <div class="amap">
        <el-amap 
            vid="amapDemo"
            :center="center"
            :zoom="zoom"
            :plugin="plugins"
        >
            <el-amap-circle-marker
                v-for="marker in markers"
                :key="'marker' + marker.id"
                :center="marker.center"
                :radius="marker.radius"
                :strokeColor="marker.strokeColor"
                :fill-color="marker.fillColor"
                class="marker"
            ></el-amap-circle-marker>
            <el-amap-text
                v-for="text in texts"
                :key="'text' + text.id"
                :text="text.text"
                :offset="text.offset"
                :position="text.position"
            ></el-amap-text>
        </el-amap>
    </div>
</template>

<script>
import AMap from "vue-amap"
import Vue from "vue"
Vue.use(AMap)

export default {
    props: {
        myName: String,
        herName: String
    },
    data() {
        return {
            MAPKEY: "ba878bb94ed7625ac538aa176cc28593s",
            center: [114.360282, 30.525103],
            zoom: 16,
            plugins: [],
            markers: [
                {
                    id: 1,
                    center: [114.360282, 30.525103],
                    radius: 10,
                    strokeColor: "#fff",
                    fillColor: "rgb(255, 0, 0)"
                }
            ],
            texts: [
                {
                    id: 1,
                    text: "李子园",
                    position: [114.360282, 30.525103],
                    offset: [-10, 0]
                }
            ]
        }
    },
    created() {
        AMap.initAMapApiLoader({
            key: this.MAPKEY
        })
    }
}
</script>

<style scoped>
.amap {
    margin: 0 auto;
    margin-top: 10px;
    width: 80%;
    height: 66%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px #ccc;
    pointer-events: auto;
}
.marker {
    box-shadow: 3px 3px 3px #ddd;
}
</style>    