// 1. 在react中注册事件与给DOM注册事件基本是一样的， onclick onmouseenter onblur onkeyup
// 2. 在react中注册事件，采用驼峰命名法， onClick onMouseEnter onBlur
// 3. 在react中注册事件，通过{}传入的是一个函数, 而不是一个字符串
// 4. 在react中，如果想要组件浏览器的默认行为，不要使用return false，使用e.preventDefault()
class Event extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.clickFn}>点我注册事件</button>
        <a href="http://web.itcast.cn" onClick={this.clickFn}>
          传智大前端
        </a>
      </div>
    )
  }

  clickFn(e) {
    // 想要组件浏览器的默认行为
    e.preventDefault()
    console.log('哈哈')
  }
}

ReactDOM.render(<Event />, document.getElementById('app'))
