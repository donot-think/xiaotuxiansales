import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
import { componentPlugin } from   '@/components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentPlugin)
app.use(lazyPlugin)
app.mount('#app')

