import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/style/global.less";

const app = createApp(App);
app.use(router);
app.mount("#app");
