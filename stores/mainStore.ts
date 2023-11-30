import {defineStore} from "pinia";
import {type Ref, ref} from "vue";

export interface MainStore {
    currency: Ref<string>
    getCurrencyData: () => void
    hiddenHeader: Ref<string>
}

export const useMainStore = defineStore('mainStore', () => {
    const currency: Ref<string> = ref('')
    const hiddenHeader: Ref<string> = ref('')

    function getCurrencyData() {
        currency.value = Math.random().toFixed(2).toString()
    }

    return {
        currency,
        getCurrencyData,
        hiddenHeader
    } as MainStore
})
