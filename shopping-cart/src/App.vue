<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="columns">
      <div class = "column is-three-quarters">
        <h1>Product List</h1>
        <ProductList></ProductList>
      </div>
      <div class = "column">
        <h1>Shopping Cart</h1>
        <ShoppingCart />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    ProductList,
    ShoppingCart
  }
}
</script>
