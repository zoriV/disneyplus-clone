<template>
  <div class="card">
    <picture class="device"
      ><source
        media="(min-width: 1025px)"
        :srcset="getImageURL()" />
      <img
        :src="getImageURL()"
        :alt="title + ' icon'"
        width="800"
        height="400"
        loading="lazy"
    /></picture>
    <!-- <img :src="getImageURL()" :alt="title + ' icon'" loading="lazy" /> -->
    <h3 class="title">{{ title }}</h3>
    <ul class="text-medium text-secondary no-margin">
      <li v-for="{ name, key } in dev" :key="key">{{ name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as UUIDv4 } from "uuid";

const props = defineProps({
  devices: Array,
  title: String,
  imgSrc: String,
});

function getImageURL() {
  return `/img/${props.imgSrc}`;
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
@use "@Styles/generic" as g;

.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  // TODO fix flex
  // justify-items: center;
  // flex: 0 0 calc(25% - 18px);
  // width: calc(25% - 18px);
  h3 {
    margin-block: 20px;
    padding: 0;
    color: #fff;
    font-weight: 700;
    font-size: 1.75em;
  }
  picture, img {
    display: block;
    height: auto;
    width: 400px;
    min-height: 1px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}
</style>
