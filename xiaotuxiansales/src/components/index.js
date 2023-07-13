import imageView from '@/components/ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'

export  const componentPlugin = {
    install(app){
         app.component('XtxImageView',imageView)
         app.component('XtxSku',XtxSku) 

    }
}
