import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import Gui from 'gui'
import '@gui/theme/index.css'

createApp(App)
  .use(Gui)
  .mount('#app')