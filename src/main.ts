import { createApp } from "vue";
import "./assets/style.css";
import globalComponents from "./components/";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);

app.use(axios);
app.use(globalComponents);
app.mount("#app");
