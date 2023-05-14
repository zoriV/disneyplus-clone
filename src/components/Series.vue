<template>
  <div class="series">
    <div class="nav" ref="navigation">
      <button
        ref="btns"
        aria-selected="true"
        @click="changeView($event, 'new')"
      >
        new on disney+
      </button>
      <button ref="btns" @click="changeView($event, 'trending')">
        trending
      </button>
      <button ref="btns" @click="changeView($event, 'coming')">
        coming soon
      </button>
    </div>
    <SeriesView :source="series[current]" />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import SeriesView from "./SeriesView.vue";

import antmanImage from "@Assets/img/series/antman.jpg";
import craterImage from "@Assets/img/series/crater.jpg";
import peterImage from "@Assets/img/series/peter.jpg";
import lightImage from "@Assets/img/series/light.jpg";
import spidermanImage from "@Assets/img/series/spiderman.jpg";
import mayhemImage from "@Assets/img/series/mayhem.jpg";

import mandoImage from "@Assets/img/series/mando.jpg";
import rennercationsImage from "@Assets/img/series/rennercations.jpg";
import sheeranImage from "@Assets/img/series/sheeran.jpg";
import spiderman2Image from "@Assets/img/series/spiderman2.jpg";
import sugaImage from "@Assets/img/series/suga.jpg";
import elephantsImage from "@Assets/img/series/elephants.jpg";

import avatarImage from "@Assets/img/series/avatar.jpg";
import invasionImage from "@Assets/img/series/invasion.jpg";
import ahsokaImage from "@Assets/img/series/ahsoka.jpg";
import indianajonesImage from "@Assets/img/series/indianajones.jpg";
import flaminImage from "@Assets/img/series/flamin.jpg";
import americanImage from "@Assets/img/series/american.jpg";

const series = {
  new: [
    antmanImage,
    craterImage,
    peterImage,
    lightImage,
    spidermanImage,
    mayhemImage,
  ],
  trending: [
    mandoImage,
    rennercationsImage,
    sheeranImage,
    spiderman2Image,
    sugaImage,
    elephantsImage,
  ],
  coming: [
    avatarImage,
    invasionImage,
    ahsokaImage,
    indianajonesImage,
    flaminImage,
    americanImage,
  ],
};

const current = ref("new");
const navigation = ref(undefined);

const changeView = (event, newView) => {
  const element = event.target;
  current.value = newView;
  navigation.value
    .querySelector("button[aria-selected='true']")
    .setAttribute("aria-selected", false);
  element.setAttribute("aria-selected", true);
};
</script>
<style lang="scss" scoped>
@use "@/styles/generic" as g;
.series {
  width: 100%;
  .nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    button {
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      font-weight: 300;
      font-size: 19px;
      padding-bottom: 8px;
      cursor: pointer;
      color: g.$text-primary;
      &[aria-selected="true"] {
        border-bottom: 6px solid g.$text-secondary;
      }
    }
  }
}
</style>
