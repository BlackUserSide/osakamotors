import type {Ref} from "vue";
export interface SFilters {
    mainFilters : Ref<MainFilters>
    changeMainFilters: (filter: 'new'|'premium'|'clearance') => MainFilters
    cars: Ref<ICars[]>
    filterForBrand : (filter: string) => void
}
type MainFilters = {
    new:boolean
    premium: boolean
    clearance:boolean
}
type ICars = {
    id: number
    name: string
    price: string
    km: string
    photo: string
    new: boolean
    premium: boolean
    clearance: boolean
    make: string
}
export const useFilters = defineStore('filters', () => {
    const mainFilters:Ref<MainFilters> = ref({
        new: false,
        premium: false,
        clearance: false
    })
    const cars: Ref<ICars[]> = ref([{id:0, name: "BMW", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "BMW"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"}])
    const defaultCars:Ref<ICars[]> = ref([{id:0, name: "BMW", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "BMW"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"},{id:1, name: "Mazda", price:"8 000$", km: "22 000", photo:"", new:true, premium:true, clearance: false, make: "Mazda"}])
    function changeMainFilters(filter: 'new'|'premium'|'clearance') {
        cars.value = defaultCars.value
        mainFilters.value[filter] = !mainFilters.value[filter]
        cars.value = cars.value.filter(e =>  e[filter])
        return mainFilters.value
    }
    function filterForBrand(filter:string) {
        if(filter === '') {
            cars.value = defaultCars.value
            return
        }
        cars.value = cars.value.filter(e => e.make === filter)
    }
    return {
        mainFilters,
        changeMainFilters,
        cars,
        filterForBrand
    } as SFilters
})
