// vscode在js文件中，对jsx语法非常友好
const element = (
  <div>
    {/* 我是注释 */}
    <h1>这是一个标题</h1>
    <p>这是内容</p>
  </div>
)

// react的组件： 函数组件    类组件
function Hello() {
  return <div>hello react</div>
}

class World extends React.Component {
  // 类组件一定需要有一个方法，render
  constructor(props) {
    super(props)
    // 类组件中，可以通过state属性，提供一些状态
    this.state = {
      msg: '哈哈'
    }
  }
  render() {
    return (
      <div>
        这是world组件---
        {this.state.msg} --- {this.props.name}
      </div>
    )
  }
}

// 函数组件和类组件的区别
// 函数组件：无状态组件
// 类组件： 状态组件， 在类组件中，可以有自己的状态
// 将来，如果某个组件不需要有自己状态，这个组件的内容是固定死的，直接使用函数组件就行
// 如果组件有自己的状态，需要定义一个类组件即可。
ReactDOM.render(<World name="zs" age="18" />, document.getElementById('app'))
