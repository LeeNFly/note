// 在react的事件处理程序中，内部的this是指向undefined
// 解决方案1：  通过this.clickFn.bind(this)
// 解决方案2：  属性初始化器语法, 提供了一个箭头函数
// 解决方案3：  在函数外面包一层箭头函数  onClick={this.clickFn}
//  onClick={()=>{this.clickFn()}}

class Event extends React.Component {
  constructor(props) {
    super(props)

    // 提供组件自己的状态
    this.state = {
      msg: 'hello react'
    }

    // 可以在构造函数中，去处理事件处理函数的this问题
    // this.clickFn = this.clickFn.bind(this)
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* 需求：点击button的时候，需要改变msg的数据 */}
        <button
          onClick={() => {
            this.clickFn()
          }}
        >
          点我修改msg
        </button>
        <a href="" onClick={this.clickFn} />
      </div>
    )
  }

  clickFn() {
    // 修改msg的数据
    // 注意点： 在react注册事件的时候，提供的事件处理函数的内部this指向undefined
    // 没办法访问到this，没有办法访问到当前实例，没有办法访问到数据
    // 如果想要修改react的状态，不能直接通过this.state.xxx去修改
    this.setState({
      msg: '呵呵'
    })
  }
}

ReactDOM.render(<Event />, document.getElementById('app'))

// bind方法： 任何一个函数，都有bind方法，bind方法可以用来修改函数内部的this指向
// call apply
// function fn(){}   fn.bind(obj)
