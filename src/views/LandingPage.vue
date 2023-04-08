<script setup>
import DeviceCard from "@Components/DeviceCard.vue";
import AccordionItem from "@Components/AccordionItem.vue";
import BundleCard from "@Components/BundleCard.vue";

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
    name: "Computer",
    devices: ["Chrome OS", "MacOS", "Windows PC"],
    imgName: "comp.png",
  },
  {
    name: "Mobile & Tablet",
    devices: [
      "Tablety Amazon Fire",
      "Telefony i tablety Android",
      "iPhone oraz iPad",
    ],
    imgName: "phone.png",
  },
  {
    name: "Game consoles",
    devices: ["PS4", "PS5", "Xbox One", "Xbox Series X", "Xbox Series S"],
    imgName: "gamepad.png",
  },
];
</script>
<template>
  <main>
    <section>
      <h1 class="section-title">Watch the way you want</h1>
      <p>Enjoy the world's greatest stories - anytime, anywhere.</p>
    </section>
    <section>
      <BundleCard />
    </section>
    <section class="devices">
      <h2 class="section_title">Available on your favourite devices</h2>
      <div class="devices__wrapper">
        <DeviceCard
          v-for="{ name, devices, imgName } in data"
          :title="name"
          :devices="devices"
          :key="name"
          :imgSrc="imgName"
        />
      </div>
    </section>
    <section class="FAQ">
      <h2 class="section_title">Frequently Asked Questions</h2>
      <div class="FAQ__wrapper">
        <AccordionItem title="What is Disney+">
          <p>
            Disney+ is the streaming home for entertainment from Disney, Pixar,
            Marvel, Star Wars, National Geographic and more. <br />
            <br />
            Disney+ has a number of benefits included in the standard
            subscription price;
          </p>
          <ul>
            <li>
              Exclusive Originals you can’t see anywhere else, blockbuster
              movies, bingeable shows, snackable shorts, and inspiring
              documentaries
            </li>
            <li>
              Unlimited downloads on up to 10 devices and up to 7 different
              profiles
            </li>
            <li>
              4K UHD streaming with Dolby Vision and Dolby Atmos support on
              compatible device
            </li>
            s for no extra cost
            <li>
              A robust parental controls system including dedicated kids
              profiles
            </li>
            <li>Up to 4 screens can stream simultaneously</li>
            <li>
              Host virtual viewing parties for up to 6 personal friends with
              GroupWatch
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="How much does Disney+ cost?">
          <p>
            Disney+ subscription costs 28,99 zł a month. Alternatively, choose
            an annual plan (289,90 zł) and get 12 months for the price of 10!*
            <br />
            <br />
            *Savings in the first year compared to 12 months of the monthly
            price. Renews automatically after 1 year to 28,99 zł/month.
          </p>
        </AccordionItem>
        <AccordionItem title="What can I watch on Disney+?">
          With thousands of films and series from the greatest storytellers
          around the globe and more added each month, you will always find
          something to watch on Disney+
          <ul>
            <li>
              The latest live action and animated blockbusters from Disney, like
              Cruella and Encanto
            </li>
            <li>
              Heart-warming storytelling for all ages from the masterminds at
              Pixar such as Luca or Turning Red
            </li>
            <li>
              Experience the ever-growing story of the Marvel Cinematic Universe
              like never before with must-see exclusive Original series from
              Marvel Studios like Moon Knight, WandaVision and Loki
            </li>
            <li>
              Stream epic cinema-quality stories from a galaxy far, far away
              including Obi-Wan Kenobi and The Mandalorian
            </li>
            <li>
              Open your eyes to the beauty of our planet with fearless National
              Geographic explorers and insightful documentaries
            </li>
            <li>
              With Star you will find bingeable series that everyone is talking
              about like the global phenomenon The Walking Dead
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="What devices are supported?">
          <p>
            Disney+ supports mobile devices, web browsers, game consoles,
            set-top boxes, and smart TVs. Click <a href="#">here</a> for the
            full list.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Is there any commitment when signing up for Disney+?"
        >
          <p>
            Your subscription to the Disney+ Service includes enrolment into an
            ongoing payment plan, you can cancel anytime, effective at the end
            of your current billing period. Just follow the below 5 easy steps:
          </p>
          <ol>
            <li>Go to www.disneyplus.com and log in</li>
            <li>Select your Profile</li>
            <li>Select Account</li>
            <li>Select Cancel Subscription</li>
            <li>Select Complete Cancellation to confirm</li>
          </ol>
          For more information click <a href="#">here</a>.
        </AccordionItem>
        <AccordionItem title="What's included on the Disney+ plans with and without ads?">
          <p>
            You can now get the following plans with Disney+ and choose your streaming experience: 
            Disney+ Basic: Disney+ (With Ads) for $7.99/month
          </p>
<li>Thousands of award-winning classics and Originals</li>
<li>The ability to watch on four screens at once at no extra cost</li>
<li>Over 300 titles in 4K UHD and HDR</li>
<p>Disney+ Premium: Disney+ (No Ads) for $10.99/month or $109.99/year</p>
<li>Thousands of award-winning classics and Originals</li>
<li>The ability to watch on four screens at once at no extra cost</li>
<li>Over 300 titles in 4K UHD and HDR</li>
<li>Unlimited downloads on up to 10 devices</li>
<li>Groupwatch</li>
<li>Dolby Atmos</li>
        </AccordionItem>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
@use "@/styles/generic" as g;

main {
  section{
    padding: 5.6vw;
  }
  .section_title {
    text-align: center;
    font-size: 2.5em;
  }
  .FAQ {
    display: flex;
    flex-direction: column;
  }
  .devices {
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
</style>
