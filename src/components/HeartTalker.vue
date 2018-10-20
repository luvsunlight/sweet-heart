<template>
    <div 
        class="message"
    >{{ message }}</div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
    .message {
        margin: 5% auto 0 auto;
        color: #485768;
        font-size: 30px;
    }
</style>