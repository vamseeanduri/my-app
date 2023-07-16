import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import MainTable from "./components/MainTable";

const app = createApp(App);

app.component("MainTable", MainTable);

app.mount('#app');
