<template>
    <audio 
        class="audio" 
        controls="controls" 
        height="100" 
        width="100"
        :style="audioStyle"
    ><source :src="mp3Url" type="audio/mp3" /></audio>
</template>

<script>
export default {
    props: ["mp3Url", "show", "animPeriod"],
    data() {
        return {}
    },
    computed: {
        audioStyle() {
            return {
                transition: `all ${ this.animPeriod }s`,
                width: this.show ? '300px' : '0',
                opacity: this.show ? '1' : '0'
            }
        }
    }
}
</script>

<style scoped>
.audio {
    transition: all 0.6s
}
</style>