import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './assets/main.css'

const app = createApp(App)

library.add(fas, far, fab)
dom.watch()

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)

app.mount('#app')
