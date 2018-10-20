<template>
    <div class="tool">
        <img
            :src="toolSrc"
            :alt="toolAlt"
            @click="toggle"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        name: String,
        vis: Boolean,
        clickValue: Number
    },
    methods: {
        toggle() {
            if (this.clickValue !== 0) this.$emit("calHP", this.clickValue)
            if (this.name == "util") this.$emit("toggleTool")
            if (this.name == "locate") this.$emit("toggleMap")
            if (this.name == "sleep") this.$emit("toggleAudio")
        }
    },
    computed: {
        toolSrc() {
            let name = this.name;
            return `./src/assets/${this.name}.png`;
        },
        toolAlt() {
            return `${this.name}.png`;
        }
    }
};
</script>

<style scoped>
.tool {
    display: inline-block;
    margin: 15px 5px;
    width: 50px;
    height: 50px;
    border: 5px solid #fff;
    border-radius: 50%;
    background: #fff;
    box-shadow: 3px 3px 10px #ddd;
}
.tool img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>