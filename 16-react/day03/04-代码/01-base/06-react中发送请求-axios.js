class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.clickFn}>获取所有的书籍</button>
        <button onClick={this.add}>添加书籍</button>
      </div>
    )
  }

  clickFn = async () => {
    // 发送axios请求
    let res = await axios.get('http://localhost:9999/getBookList')
    console.log(res.data)
  }
  add = async () => {
    console.log('11')
    // 发送请求，添加书籍
    let res = await axios.post('http://localhost:9999/addBook', {
      name: '你不知道的js',
      desc: 'js程序员应该好好读一下'
    })
    console.log(res)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
