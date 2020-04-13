<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:54:00
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 22:58:21
 * @Description:
 -->
<template>
  <div>
  <h1>商品one</h1>
  <ul>
    <li v-for="product in saleProducts" :key="product.id"> {{ product.name }} : money {{ product.money }} </li>
  </ul>
  <button @click="addPrice(50)">涨价</button>
  <!-- <button @click="">涨价</button> -->
</div>
</template>
<script>

export default {
  created () {
    console.log(this.$store)
  },
  computed: {
    // saleProducts () {
    //   return this.$store.state.productList
    // }
    saleProducts () {
      return this.$store.getters.saleProducts
    }

  },
  methods: {
    addPrice (num) {
      // this.$store.commit('add', num)
      this.$store.dispatch('addAction', num)
    }
  }
}
</script>

<style>

</style>
