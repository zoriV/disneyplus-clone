<template>
  <div class="claim">
    <img :src="image" alt="header image">
    <p class="text-secondary">Enter your email to create or restart your subscription.</p>
    <div class="register">
      <input type="mail" placeholder="Email">
      <button>continue</button>
    </div>
    <div class="bottom">
      <a href="#">Terms Apply</a>
      <p class="text-secondary text-medium">All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle.</p>
      <a href="#">View All Plan Options</a>
    </div>
  </div>
</template>
<script setup>
import image from "@Assets/img/header.svg"
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
  .register{
    $padding: 16px;
    $border: 5px;

    margin-block: 12px 36px;
    color: g.$text-primary;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 16px;
    }
    input {
      background-color: #31343e;
      flex: 1;
      padding: $padding;
      border-radius: $border 0 0 $border;
      color: g.$text-secondary;
      border: 1px solid #585858;
      max-width: 500px;
      @media screen and (max-width: 1020px){
        max-width: none;
      }
      @media screen and (max-width: 500px) {
        border-radius: $border;
      }
    }
    input::placeholder{
      color: inherit;
    }
    button {
      width: 200px;
      padding: $padding;
      cursor: pointer;
      border: 0;
      color: inherit;
      text-transform: uppercase;
      font-weight: 700;
      background-color: g.$primary;
      border-radius: 0 $border $border 0;
      @media screen and (max-width: 500px) {
        width: 100%;
        border-radius: $border;
      }
    }
  }
  .bottom {
    & > p {
      margin: 0 18px 28px 0;
    }
    a:first-child{
      font-size: 14px;
    }
    a:last-child{
      font-size: 18px;
    }
  }
}
</style>