<script setup>
import DeviceCard from "@/components/DeviceCard.vue";

const data = [
  {
    name: "TV",
    devices: [
      "Amazon Fire TV",
      "Android TV",
      "Apple TV",
      "Chromecast",
      "Hisense",
      "LG",
      "Panasonic",
      "Samsung",
    ],
    imgName: "tv.png",
  },
  {
    name: "Komputer",
    devices: ["Chrome OS", "MacOS", "Windows PC"],
    imgName: "comp.png",
  },
  {
    name: "Telefony komórkowe i tablety",
    devices: [
      "Tablety Amazon Fire",
      "Telefony i tablety Android",
      "iPhone oraz iPad",
    ],
    imgName: "phone.png",
  },
  {
    name: "Konsole",
    devices: ["PS4", "PS5", "Xbox One", "Xbox Series X", "Xbox Series S"],
    imgName: "gamepad.png",
  },
];
</script>

<template>
    <main>
        <section class="devices">
            <DeviceCard
            v-for="{ name, devices, imgName } in data"
            :title="name"
            :devices="devices"
            :key="name"
            :imgSrc="imgName"
          />
        </section>
    </main>
</template>

<style lang="scss" scoped>
main{
    .devices{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
}
</style>
