<template>
    <div>
        <div class="columns">
            <div :key="product.id" v-for="product in products" class="column">
                <!-- <Product :imageSrc = "product.imageSrc" :name="product.name" :desc="product.desc" :price="product.price"/> -->
                <Product :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>
    import {store} from '../store/store'
    import Product from './Product.vue'
    export default {
        name : 'ProductList',
        components : {
            Product
        },
        data : function(){
            return {
                products : store.$data.products
            }
        }
    }
</script>

