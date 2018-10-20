<template>
    <transition
        name="item-anim"
        mode="out-in"
    ><slot></slot>
    </transition>
</template>

<script>
export default {
    props: {
        animPeriod: {
            type: Number,
            default: 0.6
        }
    }
};
</script>

<style scoped>
.item-anim-enter,
.item-anim-leave-to {
    opacity: 0;
}
.item-anim-enter-active,
.item-anim-leave-active {
    transition: all 0.5s ease;
}
</style>