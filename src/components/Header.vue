<template>
  <div class="claim">
    <div class="plans">
      <div>
        <img :src="image_hulu" alt="duo bundle" />
        <a class="button">get them both</a>
        <p class="pricing">Starting at $9.99/month</p>
      </div>
      <div>
        <img :src="image_espn" alt="trio bundle" />
        <a class="button">get all three</a>
        <p class="pricing">Starting at $14.99/month</p>
      </div>
    </div>
    <div class="bottom">
      <a href="#">Terms Apply</a>
      <p class="text-secondary text-medium">
        All of these and more now streaming on Disney+, Hulu, and ESPN+ with the
        Disney Bundle.
      </p>
      <a href="#">View All Plan Options</a>
    </div>
  </div>
</template>
<script setup>
import image_hulu from "@Assets/img/header_hulu.png";
import image_espn from "@Assets/img/header_hulu+espn.png";
</script>
<style lang="scss" scoped>
@use "@/styles/generic" as g;

.claim {
  width: 100%;
  text-align: center;
  img {
    min-width: 450px;
    width: 36%;
    margin: 0 auto;
  }
  .plans {
    $padding: 16px;
    $border: 5px;

    margin-block: 12px 36px;
    color: g.$text-primary;
    width: minmax(400px, calc(100% - 400px));
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    column-gap: 12px;
    // @media screen and (max-width: 500px) {
    //   flex-direction: column;
    //   gap: 16px;
    // }
    & > div {
      display: grid;
      grid-template-columns: subgrid;
      a {
        text-transform: uppercase;
      }
    }
    // button {
    //   width: 100%;
    //   max-width: 700px;
    //   padding: $padding;
    //   cursor: pointer;
    //   border: 0;
    //   color: inherit;
    //   text-transform: uppercase;
    //   font-weight: 500;
    //   font-size: 18px;
    //   background-color: g.$primary;
    //   border-radius: 0 $border $border 0;
    //   @media screen and (max-width: 500px) {
    //     width: 100%;
    //     border-radius: $border;
    //   }
    // }
  }
  .bottom {
    & > p {
      margin: 0 18px 28px 0;
    }
    a:first-child {
      font-size: 14px;
    }
    a:last-child {
      font-size: 18px;
    }
  }
}
</style>
