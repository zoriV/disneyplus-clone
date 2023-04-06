<template>
  <div class="card">
    <!-- TODO: Fix image size -->
    <img :src="getImageURL()" :alt="title + ' icon'" loading="lazy"/>
    <h3 class="title">{{ title }}</h3>
    <ul>
      <li v-for="{ name, key } in dev" :key="key">{{ name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { v4 as UUIDv4 } from "uuid";

const props = defineProps({
  devices: Array,
  title: String,
  imgSrc: String,
});

function getImageURL(){
  return `/img/${props.imgSrc}`
}

const dev = ref([]);
props.devices.forEach((element) => {
  const current = {};
  current.key = UUIDv4;
  current.name = element;
  dev.value.push(current);
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    margin-block: 20px;
    padding: 0;
    color: #fff;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: rgb(192, 192, 192);
  }
}
</style>