import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.append = (path, pathToAppend) =>
    path
    + (path.endsWith('/') ? '' : '/')
    + pathToAppend

app.use(createPinia());
app.use(router);

app.mount("#app");
