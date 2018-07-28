<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="product.imageSrc" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{product.name}}</p>
                    <div class="content">
                        {{product.desc}}
                    </div>
                    
                    <h5>{{product.price | currency}}</h5>
                    <button class="button is-primary" @click="addToCart(product)">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {store} from '../store/store'
export default {
    name : 'Product',
    props : {
        product : Object
    },
    methods : {
        addToCart(product){
            store.addToCart(product)
        }
    }
}
</script>
