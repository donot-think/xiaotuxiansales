import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
//引入初始化样式文件
import '@/styles/common.scss'
import { componentPlugin } from   '@/components/index'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.use(lazyPlugin)
app.mount('#app')

