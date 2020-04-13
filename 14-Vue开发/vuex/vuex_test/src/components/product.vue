<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:59:56
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 21:58:56
 * @Description:
 -->
<template>
  <p>
    <Productone />
    <Producttwo />
  </p>
</template>

<script>
import Productone from '@/components/product_one'
import Producttwo from '@/components/product_two'
export default {
  components: {
    Productone,
    Producttwo
  }
}
</script>

<style scoped>
</style>
