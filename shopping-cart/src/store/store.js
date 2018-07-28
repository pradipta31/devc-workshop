import Vue from 'vue'
import data from '../api/products'

export const store = new Vue({
    data(){
        return {
            products : data,
            cart : []
        }
    },
    methods : {
        addToCart(product){
            const index = this.cart.findIndex(item => {
                return item.details.id === product.id
            })
            if(index === -1){
                this.cart.push({
                    details : product,
                    quantity : 1
                })
            }else{
                this.cart[index].quantity++
            }
            
        }
    }
})