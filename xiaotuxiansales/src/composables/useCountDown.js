import { dayjs } from 'element-plus'
import { computed, onUnmounted, ref }  from 'vue'
export const useCountDown = ()=>{
    let timer = null
    const time = ref(0)
    //格式化时间为xx分xx秒
    const formateTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime)=>{
        // 开始倒计时的逻辑
        // 核心逻辑的编写：每隔1s就减一
        time.value = currentTime 
         timer = setInterval(()=>{
          time.value--
        },1000)   
    }
    onUnmounted(()=>{
        timer && clearInterval(timer)
    })
    return{
        start,
        formateTime
    }
}