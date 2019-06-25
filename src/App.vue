<template>
  <div id="app">
    <div class="main-container">
        <AnimItem>
            <Talker
            :message="currentMessage"
            :key="currentMessage"
            ></Talker>
        </AnimItem>
        <AnimItem :animPeriod=Number(0.2)>
            <AMap
                v-if="showMap"
                key="amap"
            ></AMap>
        </AnimItem>
    </div>
    <div class="tool-container">
        <Player 
            :mp3Url="audioUrl"
            :show="showAudio"
            animPeriod=0.5
        ></Player>
        <div>
            <AnimList>
            <Tool
                v-for="tool in visibleToolList"
                :key="tool.id"
                :name="tool.name"
                :vis="tool.visible"
                :clickValue="tool.clickValue"
                @toggleTool="toggleTool"
                @calHP="calHP"
                @toggleMap="toggleMap"
                @toggleAudio="showAudio = !showAudio"
            ></Tool>
        </AnimList>
        </div>
    </div>
    <Scene
        :modelSize="HP / 1000"
        @touchHeart="touchHeart"
    ></Scene>
  </div>
</template>

<script>
import Scene from "./components/HeartScene.vue"
import Talker from "./components/HeartTalker.vue"
import Tool from "./components/HeartTool.vue"
import AMap from "./components/HeartMap.vue"
import Player from "./components/HeartPlayer.vue"
import AnimList from "./components/AnimList.vue"
import AnimItem from "./components/AnimItem.vue"

import { myName, herName, defaultMessageList, satisfiedMessageList, sadMessageList } from "./js/Message.js"
import DataHandler from './js/DataHandler.js'

export default {
    name: "app",
    data() {
        return {
            dataHandler: new DataHandler(),
            HP: 100,
            xixiPngUrl: "./src/assets/xixi.png",
            audioUrl: "./src/assets/littleStar.mp3",
            showMap: false,
            showAudio: false,
            currentMessage: defaultMessageList[0],
            toolList: [
                {
                    id: 1,
                    name: "util",
                    visible: true,
                    clickValue: 0
                },
                {
                    id: 2,
                    name: "sad",
                    visible: false,
                    clickValue: -1
                },
                {
                    id: 3,
                    name: "love",
                    visible: false,
                    clickValue: 10
                },
                {
                    id: 4,
                    name: "locate",
                    visible: false,
                    clickValue: 0
                },
                {
                    id: 5,
                    name: "sleep",
                    visible: false,
                    clickValue: 0
                }
            ]
        }
    },
    mounted() {
        // this.dataHandler.addTimeTrack()
        let vm = this
        setInterval(function() {
            vm.setCurrentMessage(vm.getRndMsg(defaultMessageList))
        }, 5000)
    },
    methods: {
        getRndMsg(msgList) {
            let rndIndex = Math.floor(Math.random() * msgList.length)
            return msgList[rndIndex]
        },
        setCurrentMessage(msg) {
            this.currentMessage = msg
        },
        toggleTool() {
            this.shouldHiddenToolList.forEach(
                tool => (tool.visible = !tool.visible)
            )
        },
        calHP(hpChange) {
            this.HP = Math.min(this.HP + hpChange, 100)
            let hpChangeStr =
                hpChange > 0 ? "+" + String(hpChange) : String(hpChange)
            if (this.HP < 20) {
                this.setCurrentMessage(this.getRndMsg(sadMessageList))
            } else {
                this.setCurrentMessage(`${myName}开心${hpChangeStr}`)
            }
        },
        toggleMap() {
            this.showMap = !this.showMap
            if (this.showMap) this.setCurrentMessage(`${myName}在这里↓`)
        },
        touchHeart() {
            this.setCurrentMessage(this.getRndMsg(satisfiedMessageList))
        }
    },
    computed: {
        visibleToolList() {
            return this.toolList.filter(tool => {
                return tool.visible
            })
        },
        shouldHiddenToolList() {
            return this.toolList.filter(tool => {
                return tool.name !== "util"
            })
        }
    },
    components: {
        Scene,
        Talker,
        Tool,
        AMap,
        Player,
        AnimList,
        AnimItem
    }
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
}

html,
body {
    margin: 0;
    height: 100%;
}

* {
    box-sizing: border-box;
    overflow: hidden;
}

a {
    color: #42b983;
}

.main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;
}

.tool-container {
    position: absolute;
    bottom: 3%;
    width: 100%;
}

.xixi {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
}

.clearfix {
    overflow: auto;
}
</style>
