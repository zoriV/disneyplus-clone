import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/router";
import { useTitle } from "@vueuse/core";

const title = useTitle("Stream Disney, Pixar, Marvel, Star Wars, Nat Geo", {
  titleTemplate: "%s | Disney+",
});

const app = createApp(App);
app.use(router);
app.mount("#app");
