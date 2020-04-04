// 在注册事件的时候，能够传递参数
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
