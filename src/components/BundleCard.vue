<template>
  <div class="card">
    <picture class="sidealign-image"
      ><source
        media="(max-width: 768px)"
        :srcset="imageSmall" />
      <source
        media="(min-width: 769px) and (max-width: 1024px)"
        :srcset="imageMedium" />
      <source
        media="(min-width: 1025px)"
        :srcset="imageLarge" />
      <img
        :src="imageLarge"
        width="2160"
        height="740"
        alt="Bundle Trio"
        loading="lazy"
    /></picture>
    <div class="card__text">
      <h4 class="card__text-claim">Get your favorite stories, originals and live sports with Disney+, Hulu, and ESPN+</h4>
      <a href="#" class="button">GET ALL THREE</a>
      <a href="#" class="card__text-terms">Terms apply</a>
    </div>
  </div>
</template>
<script setup>
import imageLarge from "@/assets/img/disneybundle-large.png";
import imageMedium from "@/assets/img/disneybundle-medium.png";
import imageSmall from "@/assets/img/disneybundle-small.png";
</script>
<style lang="scss" scoped>
@use "@/styles/generic" as g;

.card{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  picture, img {
    display: block;
    height: auto;
    width: 100%;
    min-height: 1px;
  }
  &__text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 769px) {
      padding: 0 2vw;
      width: 50%;
      height: 100%;
      // right: 5vw;
      top: 0;
      bottom: 0;
      position: absolute;
      left: 50%;
    }
    @media screen and (max-width: 769px) {
      text-align: center;
    }

    &-claim{
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
    }
    &-terms{
      font-size: 12px;
      font-weight: 100;
      margin-top: 24px;
    }
  }
}
</style>
