<template>
  <div class="card">
    <p class="card__header">
      <span class="card__header-title">{{ props.title }}</span><br/>
      <span class="card__header-ads">{{ props.ads }}</span>
    </p>
    <ul class="text-secondary">
      <li v-for="offer in props.offer">{{ offer }}</li>
    </ul>
    <p class="card__price">
      <span class="card__price-value">${{ props.price }}</span>
      <span class="card__price-period">/month</span>
    </p>
    <a href="#" class="button">SELECT</a>
  </div>
</template>
<script setup>
const props = defineProps({
  image: String,
  title: String,
  ads: String,
  offer: Array,
  price: Number,
})
</script>
<style lang="scss" scoped>
@use "@Styles/generic" as g;
</style>