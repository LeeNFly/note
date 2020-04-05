class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.getAll}>获取所有的书籍</button>
        <button onClick={this.add}>添加书籍</button>
        <button onClick={this.getInfo}>获取书籍详情</button>
      </div>
    )
  }

  getAll = () => {
    // 发送一个get请求，获取所有的书籍
    // fetch是window的一个方法，fetch是一个全局方法，可以直接使用
    // fetch: 返回的是promise对象
    fetch('http://localhost:9999/getBookList')
      .then(res => {
        // res是一个promise对象，表示请求的结果
        // res获取到仅仅是响应的结果，还不是我们想要的json
        // 还需要对res.json()才表示把响应结果转成json,返回的额是promise
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  getInfo = async () => {
    let res = await fetch('http://localhost:9999/getBookInfo?id=1')
    let data = await res.json()
    console.log(data)
  }

  add = async () => {
    // fetch发送post请求
    // 参数1： 请求的url地址
    // 参数2： 配置对象
    let res = await fetch('http://localhost:9999/addBook', {
      method: 'POST',
      headers: {
        // 用于指定请求的数据类型
        // 'content-type': 'application/x-www-form-urlencoded'
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: '测试',
        desc: '测试一下内容'
      })
    })
    let data = await res.json()
    console.log(data)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
