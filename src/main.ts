import { createApp } from "vue";
import "./assets/style.css";
import globalComponents from "./components/";
import App from "./App.vue";

const app = createApp(App);

app.use(globalComponents);
app.mount("#app");
