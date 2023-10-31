<template>
  <!-- TODO: Fix font and image sizes -->
  <div class="showcase">
    <img
      :src="showcaseImg"
      width="712"
      height="570"
      alt="4 Devices showcasing the Disney+ product on TV, Mobile, Laptop, and Tablet"
      loading="lazy"
    />
    <div class="showcase__text">
      <h2 class="text-big">{{props.title}}</h2>
      <ul class="text-secondary">
        <li v-for="item in content">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import showcaseImg from "@Assets/img/showcase.png"

const props = defineProps({
  content: Array,
  title: String
})
</script>
<style lang="scss" scoped>
@use "@Styles/generic" as g;
.showcase{
  display: flex;
  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
  &__text{
    // padding: 0 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 100;
  }
  img{
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
    aspect-ratio: initial;
    @media screen and (max-width: 920px) {
      flex: 1;
    }
  }
}
</style>
