<template >
  <div class="view">
    <img v-for="(src, index) in props.source" :src="src" :key="index" alt="preview image">
  </div>
</template>
<script setup>
const props = defineProps({
  source: Array
})
</script>
<style lang="scss" scoped>
@use "@/styles/generic" as g;
.view {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-top: 24px;
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    border-radius: 12px;
  }
}
</style>