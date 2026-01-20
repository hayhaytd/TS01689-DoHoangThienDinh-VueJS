import { createApp } from 'vue'
import App from './App.vue'
import tuoi from './components/tuoi.vue'
import './style.css'

const app = createApp(App)
app.component('tuoi', tuoi)
app.mount('#app')
