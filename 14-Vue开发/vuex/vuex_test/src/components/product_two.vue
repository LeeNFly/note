<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:54:00
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-14 20:30:04
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
    // 直接获取Store中存储的state中数据, 可以直接在插值表达式 和 指令中 当作变量使用
    ...mapState([
      'productList'
    ]),
    // 直接获取Store中存储的getters中数据, 可以直接在插值表达式 和 指令中 当作计算属性使用
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    // 直接获取Store中存储的mutations中函数, 可以直接在插值表达式 和 指令中 当作函数使用
    ...mapMutations([
      'add'
    ]),
    // 直接获取Store中存储的actions中函数, 可以直接在插值表达式 和 指令中 当作函数使用
    ...mapActions([
      'addAction'
    ])
  }
}
</script>

<style>

</style>
