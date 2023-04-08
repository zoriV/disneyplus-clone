<template>
  <footer>
    <img :src="logo" alt="logo" class="logo">
    <ul class="fine">
      <li><a href="#">Subscriber Agreement</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">UK & EU Privacy Rights</a></li>
      <li><a href="#">Cookies Policy</a></li>
      <li><a href="#">Interest-Based Ads</a></li>
      <li><a href="#">Supported Devices</a></li>
      <li><a href="#">Help Centre</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Manage Preferences</a></li>
    </ul>
    <p class="fine-text">&copy; <span ref="yearRef"></span> Disney and its related entities. All Rights Reserved.</p>
  </footer>
</template>
<script setup>
import {ref, onMounted} from "vue";
import logo from "@Assets/img/logo.svg"
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
  color: silver;
  position: relative;
  font-size: 12px;
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
    margin: .5em auto 2em;
    flex-wrap: wrap;
    max-width: 944px;
    top: 100%;
    gap: 14px 24px;
    text-align: left;
    li {
      padding-inline: 4px;
      text-align: -webkit-match-parent;
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
      margin-bottom: 20px;
    }
  }
}
</style>
