class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'zs', age: 18, gender: '男' },
        { id: 2, name: 'ls', age: 19, gender: '男' },
        { id: 3, name: 'ww', age: 20, gender: '女' }
      ]
    }
  }
  render() {
    let content = this.state.list.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
      </tr>
    ))
    return (
      <table>
        <tbody>
          {/* 可以直接在{}中遍历 */}
          {content}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('app'))

// react中无论是条件渲染或者是列表渲染，都在js
