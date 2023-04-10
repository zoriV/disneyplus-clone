<template>
  <div class="tab-container">
    <div class="tab-container__selector">
      <button>Disney Bundle</button>
      <button>Disney+</button>
    </div>
    <PlanCard title="Duo Basic" ads="With Ads" :offer="['Thousands of shows, movies, and Originals on Disney+ and Hulu']" price="9.99"/>
  </div>
</template>
<script setup>
import PlanCard from './PlanCard.vue';
</script>
<style lang="scss" scoped>
.tab-container{
  &__selector{
    background-color: #2b2d37;
    border-radius: 20px;
    width: fit-content;
  }
}
</style>