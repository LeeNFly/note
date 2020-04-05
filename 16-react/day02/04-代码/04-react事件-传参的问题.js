// 在注册事件的时候，能够传递参数

// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// 上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。
// 在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须 ★ 显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
// 传参时, 不管事件对象是隐式传还是显示传, 在形参中, 事件对象都作为最后一个形参接收
class Event extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            {/* 能够把id传递过来 */}
            <button
              onClick={() => {
                this.clickFn(1)
              }}
            >
              删除1
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.clickFn(2)
              }}
            >
              删除2
            </button>
          </li>
          <li>
            <button>删除3</button>
          </li>
        </ul>
      </div>
    )
  }

  // 传参第一种： 通过bind的方式进行传参，还想要获取事件对象, 事件对象是最后一个参数
  // 参数第二种： 通过给事件处理程序包裹一个箭头函数
  clickFn(id) {
    console.log(id)
  }
}

ReactDOM.render(<Event />, document.getElementById('app'))
