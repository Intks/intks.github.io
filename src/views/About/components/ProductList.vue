<template>
  <div class="product-list">
    <div class="product-item" v-for="(product, index) in productList" :key="index">
      <div class="product-img">
        <img :src="`${product.img}`" alt="">
        <img src="@/assets/images/filterpost.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    productList: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
