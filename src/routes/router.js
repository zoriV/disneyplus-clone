import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routerData"

const router = createRouter({history: createWebHashHistory(), routes})

export default router;