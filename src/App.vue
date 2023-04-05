<script setup>
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <RouterView/>
        <Footer/>
    </main>
</template>

<style lang="scss">
@import "@/styles/generic";
</style>
