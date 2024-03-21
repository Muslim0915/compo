import {defineStore} from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        countOfProducts: 0,
        priceOfProduct: 122566,
        isHovered: false,
    }),
    actions: {
        addTodCart() {
            this.countOfProducts++
        },
        removeToCart() {
            if (this.countOfProducts > 0) {
                this.countOfProducts--
            }
        }
    },
    getters:{
        totalPrice: (state) => {
            return state.priceOfProduct * state.countOfProducts
        }
    }
})
