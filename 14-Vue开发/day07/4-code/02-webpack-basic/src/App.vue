<!--
  一个单文件组件, 就是vue中的一个组件, 是局部组件, 包含三个部分 template, script, style
  组件如何使用, vue实例如何使用, 在单文件中就如何使用
  各个组件互相独立, 互不影响; 一个组件多次复用, 多次复用的组件之间也是互相独立, 互不影响的
-->
<template>
  <!-- 模板 (该组件页面部分)
          template里放模板部分, 相当于组件中的视图, 用来展示页面的
          最外层必须要有 且 只能有 一个根标签
          不能为空
          该组件实例的管理范围为本组件的模板, 在模板中可以使用vue特性
   -->
  <div>
    <h1>这是第一个 单文件组件 -- {{ msg }}</h1>
  </div>
</template>

<script>
// JS逻辑代码  (该组件逻辑部分)
// script标签内可以为空
export default {
  // 里面类似于vue组件中的js部分, 包含有data, methods, computed, .. 等等
  // 作用范围为本组件的模板部分
  // 各个组件之间的数据是独立的
  data() {
    // 和组件一样, 返回一个新的对象
    return {
      msg: 'msg'
    }
  }
}
</script>

<style>
/* 样式 (该组件css部分)
   写css代码, 作用域本组件的模板
 */
h1 {
  color: green;
}
</style>
