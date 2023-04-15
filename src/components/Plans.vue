<template>
  <div class="tab-container">
    <div class="tab-container__selector" ref="tabContainer">
      <button @click="changeTab($event, DisneyBundle)">Disney Bundle</button>
      <button @click="changeTab($event, Disney)">Disney+</button>
    </div>
    <component :is="tab"></component>
  </div>
</template>
<script setup>
import { shallowRef, ref } from 'vue';
import Disney from '@Components/plans/Disney.vue';
import DisneyBundle from '@Components/plans/DisneyBundle.vue';

const tab = shallowRef(Disney);
const tabContainer = ref(null);


const changeTab = (event, newTab) => {
  const clicked = event.target;
  tabContainer.value.querySelectorAll("button").forEach((c) => {
    c.classList.remove("activeTab");
  })
  clicked.classList.add("activeTab");

  tab.value = newTab;
}

</script>
<style lang="scss" scoped>
@use "@Styles/generic" as g;

.tab-container{
  &__selector{
    background-color: #2b2d37;
    border: 5px solid #2b2d37;
    border-radius: 21px;
    width: fit-content;
    margin-inline: auto;
    button {
      appearance: none;
      color: #fff;
      font-size: 16px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      border-radius: 19px;
      padding: 4px 15px;
      &.activeTab{
        background-color: g.$primary;
      }
    }
  }
}
</style>