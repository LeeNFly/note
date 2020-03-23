<template>
  <!-- 模板 -->
  <div>
    <h1>这是第一个 单文件组件 -- {{ msg }}</h1>
  </div>
</template>

<script>
// JS逻辑代码
export default {
  data() {
    return {
      msg: 'msg'
    }
  }
}
</script>

<style>
/* 样式 */
h1 {
  color: green;
}
</style>
