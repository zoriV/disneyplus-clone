<template>
  <footer>
    <img :src="logo" alt="logo" class="logo">
    <ul class="fine">
      <li><a href="#">Lorem</a></li>
      <li><a href="#">Ad</a></li>
      <li><a href="#">Dicta aliquid</a></li>
      <li><a href="#">A possimus</a></li>
      <li><a href="#">Laudantium</a></li>
      <li><a href="#">Molestiae</a></li>
      <li><a href="#">Alias error</a></li>
      <li><a href="#">Porro!</a></li>
      <li><a href="#">Voluptatem quibusdam</a></li>
    </ul>
    <p class="fine-text">&copy; <span ref="yearRef"></span> Disney-. Wszelkie prawa zastrzeżone</p>
  </footer>
</template>
<script setup>
import {ref, onMounted} from "vue";
import logo from "@/assets/img/logo.svg"
const year = new Date().getFullYear();

const yearRef = ref(null);
onMounted(() => {
    yearRef.value.innerText = year;
})
</script>
<style lang="scss" scoped>
@use "@/styles/generic.scss" as g;

footer {
  background-color: g.$bg;
  color: g.$text-secondary;
  position: relative;
  bottom: 0px;
  padding: 12px 8px;
  .logo {
    width: 90px;
    position: relative;
    left: 50%;
    translate: -50% 0;
    margin-bottom: 8px;
  }
  .fine {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0 auto 14px;
    flex-wrap: wrap;
    max-width: 600px;
    top: 100%;
    li {
      padding-inline: 4px;
      a,
      a:link,
      a:visited {
        color: inherit;
        text-decoration: none;
      }
      &:hover {
        color: lighten(g.$text-secondary, 10);
      }
    }
    &-text {
      color: g.$text-secondary;
      text-align: center;
    }
  }
}
</style>
