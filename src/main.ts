//import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const app = createApp(App)

// cannot use let coz strings
const x = 'helxysx'
console.log(x)

app.use(createPinia())
app.use(router)

app.mount('#app')
