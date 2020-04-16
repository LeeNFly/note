/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-04 23:00:33
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-17 00:37:21
 * @Description: 
 */
// 在react的事件处理程序中，内部的this是指向undefined
// 解决方案1：  通过this.clickFn.bind(this) 让this指向组件实例对象
// 解决方案2：  属性初始化器语法, 提供了一个箭头函数 让this指向组件实例对象
// 解决方案3：  在函数外面包一层箭头函数  onClick={this.clickFn} 让this指向组件实例对象
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

    // 属性初始化器语法 (不过方法这样声明的话, 是添加到组件对象的属性中去了, 作为实例属性, 而不是添加到构造函数原型上了, 不过不影响. 组件实例对象还是可以直接通过方法名访问到该方法的, 并且可以加()调用 )
    // clickFn = () => {
        // 箭头函数没有this, this向上查找, 所以this指向组件实例对象
    // }
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* 需求：点击button的时候，需要改变msg的数据 */}
        <button
          onClick={() => {
            // 箭头函数没有this, this向上查找, 所以this指向组件实例对象
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
