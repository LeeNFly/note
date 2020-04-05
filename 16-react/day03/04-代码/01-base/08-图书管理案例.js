class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      name: '',
      desc: '',
      id: ''
    }
  }

  getBookList = async () => {
    // 发送ajax请求，获取到所有的书籍的数据，存到list中
    let res = await fetch('http://localhost:9999/getBookList')
    let data = await res.json()
    let { status, list } = data
    if (status === 200) {
      this.setState({
        list
      })
    }
  }

  // 组件挂载好了的时候会触发
  componentDidMount() {
    this.getBookList()
  }

  delBook = async (id, e) => {
    // 组件默认行为
    e.preventDefault()
    //1. 获取到了id值
    //2. 使用fetch发送请求，删除一条数据，
    //3. 成功了，需要重新渲染页面
    if (confirm('你是否要删除这条记录')) {
      let res = await fetch(`http://localhost:9999/deleteBook?id=${id}`)
      let data = await res.json()
      if (data.status === 200) {
        // 删除成功了
        this.getBookList()
      }
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  save = async () => {
    let { id, name, desc } = this.state
    let url = null
    let params = {
      name,
      desc
    }
    if (id) {
      url = 'http://localhost:9999/editBook'
      params.id = id
    } else {
      url = 'http://localhost:9999/addBook'
    }
    // 就是新增的操作
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    let data = await res.json()
    let { status } = data
    if (status === 200) {
      // 重新渲染
      this.getBookList()
      // 清空表单数据
      this.setState({
        name: '',
        desc: '',
        id: ''
      })
    }
  }

  editBook = (book, e) => {
    // 需要把书籍的信息回显到表单里面
    let { id, name, desc } = book
    e.preventDefault()
    // 数据回显
    this.setState({
      name,
      desc,
      id
    })
  }
  render() {
    let { list } = this.state
    return (
      <div className="container">
        <div className="form">
          书名：
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          描述：
          <input
            type="text"
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
          />
          <button onClick={this.save}>保存</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>书名</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>
                  <a href="#" onClick={this.delBook.bind(this, item.id)}>
                    删除
                  </a>
                  |
                  <a href="#" onClick={this.editBook.bind(this, item)}>
                    修改
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<Book />, document.getElementById('app'))
