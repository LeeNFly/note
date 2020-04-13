<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:54:00
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 23:16:07
 * @Description:
 -->
<template>
  <div>
  <h1>商品two</h1>
  <ul>
    <li v-for="product in productList" :key="product.id"> {{ product.name }} : money {{ product.money }} </li>
  </ul>

  <ul>
    <li v-for="product in saleProducts" :key="product.id"> {{ product.name }} : money {{ product.money }} </li>
  </ul>
  <button @click="addAction(50)">涨价</button>
  <!-- <button @click="">涨价</button> -->
</div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  created () {
  },
  computed: {
    ...mapState([
      'productList'
    ]),
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    ...mapMutations([
      'add'
    ]),
    ...mapActions([
      'addAction'
    ])
  }
}
</script>

<style>

</style>
