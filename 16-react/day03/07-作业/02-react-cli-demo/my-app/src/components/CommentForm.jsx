import React from 'react'
class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      content: ''
    }
  }
  render() {
    return (
      <div className="form">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <br />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          cols="30"
          rows="5"
        />
        <br />
        <button onClick={this.clickFn}>添加</button>
      </div>
    )
  }
  clickFn = () => {
    // 调用父组件传递过来的方法
    let { add } = this.props
    add(this.state.name, this.state.content)

    // 清空表单
    this.setState({
      name: '',
      content: ''
    })
  }
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
}

export default CommentForm
