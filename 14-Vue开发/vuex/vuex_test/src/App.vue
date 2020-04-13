<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:47:37
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 20:49:56
 * @Description:
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
