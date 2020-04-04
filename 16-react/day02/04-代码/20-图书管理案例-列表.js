class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: '红楼梦', desc: '一堆乱七八糟的破事' },
        { id: 2, name: '西游记', desc: '小时候的经典' },
        { id: 3, name: '权威指南', desc: 'js程序员必读' }
      ],
      name: '',
      desc: '',
      id: '',
      index: 3
    }
  }
  render() {
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
            value={this.state.desc}
            onChange={this.handleChange}
            name="desc"
          />
          <button onClick={this.addBook}>添加</button>
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
            {this.state.list.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>
                  <a href="#" onClick={this.delBook.bind(this, item.id)}>
                    删除
                  </a>
                  |
                  <a href="#" onClick={this.showEdit.bind(this, item)}>
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

  addBook = () => {
    // 判断是否有id值，如果有，是修改，否则是添加
    if (this.state.id) {
      // 修改
      // 根据id找到需要修改的下标
      let idx = this.state.list.findIndex(item => item.id === this.state.id)
      this.state.list[idx].name = this.state.name
      this.state.list[idx].desc = this.state.desc
    } else {
      // 添加
      // 添加图书
      this.state.list.push({
        id: ++this.state.index,
        name: this.state.name,
        desc: this.state.desc
      })
    }
    // 清空name和desc
    this.state.name = ''
    this.state.desc = ''
    this.state.id = ''
    this.setState(this.state)
  }
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  delBook(id, e) {
    e.preventDefault()
    // 删除需要id
    // 根据id获取到下标
    let idx = this.state.list.findIndex(item => item.id === id)
    // 删除对应的数据
    this.state.list.splice(idx, 1)
    this.setState(this.state)
  }
  showEdit = (book, e) => {
    e.preventDefault()
    this.state.id = book.id
    this.state.name = book.name
    this.state.desc = book.desc
    this.setState(this.state)
  }
}

ReactDOM.render(<Book />, document.getElementById('app'))
