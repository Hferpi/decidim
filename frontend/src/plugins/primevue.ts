import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

export function setupPrimeVue(app:any){
  app.use(PrimeVue,{
    theme:{
      preset: Aura
    }
  })

  app.use(ToastService)
}