<template>
    <table class="table">
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in cart" :key="product.id">
                <td>{{ product.details.name }}</td>
                <td>{{ product.details.price | currency }}</td>
                <td>{{ product.quantity }}</td>
                <button class="button is-danger">Hapus</button>
            </tr>
        </tbody>
    </table>
</template>
<script>
import {store} from '../store/store'
export default {
    name : 'ShoppingCart',
    computed : {
        cart(){
            return store.$data.cart
        }
    }
}
</script>
