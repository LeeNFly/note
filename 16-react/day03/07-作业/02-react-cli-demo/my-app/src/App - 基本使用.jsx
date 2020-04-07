// 之后我们在react脚手架生成的项目中, 约定一个js文件, 就是一个react组件, 即一个js文件, 就只写一个组件的内容
// 在react项目中, 各个组件都是一个独立的模块, 数据不互通, 需要使用其他模块或组件, 需要使用ES6 import语法进行导入
// .jsx文件和.js文件一样, 作用也一样, 没有区别, 仅仅是后缀名不同, .jsx文件其实就是.js文件, 也是js的运行环境
// 一个jsx文件也是一个react组件,  就只写一个组件的内容
// 有些编辑器，看到jsx文件，提供一些高亮，提示等等
// 每个jsx文件都可以看作一个node模块, 各个模块之间数据互相独立, 所以在每个模块中都需要引入React
import React from 'react'; // 导入react
import './App.css'; 

function App() {
  return (
    <div className="App">
      Hello React
    </div>
  );
}

export default App; // 必须要将组件导出, 这样在其他地方才可以通过import导入组件并使用组件
