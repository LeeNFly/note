// react操作表单的元素，操作表单的目的： 获取到用户输入的内容
// react操作表单： 受控组件  非受控组件

// 受控组件： 在当前组件中的表单元素受到了react的控制，
//1. 当表单元素的内容发生改变，react对应的状态也要发生改变
//2. 当react对应的状态发生改变，表单元素的内容也要发生改变。
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react'
    }
  }
  render() {
    // 一旦给input设置了value属性，且value属性对应了组件中的一个状态(state中的一个变量)，则该表单变为受控组件
    // 表单元素的value值受到了react的控制，我们发现，表单没办法输入，没办法改变了, 
    // 要想改变表单中的内容, 也就是表单的value值, 只能通过改变表单value属性对应的组件中state里的那个变量的值, 然后通过组件实例对象.setState(), 来更新视图
    // 这样页面视图就会重新渲染, 表单的value属性值就会得到更新, 即输入框中的内容就会得到更新了

    // 除了指定一个vlaue属性，还需要指定onChange事件，用来处理内容的变化
    // 我们可以给表单元素绑定指定onChange事件 (该事件react做过优化了, 由之前的失焦才触发改为只要表单内容发生改变, 就会触发), 
    // 在表单输入框中的内容发送改变时触发

    // react中并没有提供双向绑定功能, 我们需要通过表单的value和onChange事件, 通过受控组件的方式, 手动实现表单的双向绑定.
    return (
      <input
        type="text"
        value={this.state.username}
        onChange={this.handleChange}
      />
    )
  }
  handleChange = e => {
    // 在表单的onChange事件的事件处理函数中, 通过事件对象e, e.target可以拿到当前注册该事件处理函数的表单dom元素 (支持外提, 后续可以将该方法通用, 然后通过e.target将每个表单元素区分开来)
    // 通过e.target.value 可以拿到当前用户输入的值
    // 我们将当前用户输入的值更新到对应的state中的变量, 然后重新渲染视图, 即可以完成表单元素与数据的双向绑定
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
