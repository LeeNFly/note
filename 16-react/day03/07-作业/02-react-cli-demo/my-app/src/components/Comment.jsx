import React from 'react'
import CommentForm from './CommentForm.jsx' // 需要使用到其他组件, 在组件中直接导入即可
import CommentList from './CommentList.jsx'
import './Comment.css' // 需要使用css, 在组件中直接导入即可
class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' }
      ],
      index: 3
    }
  }
  render() {
    return (
      <div className="container">
        <h1>评论案例</h1>
        <CommentForm add={this.add} />
        <hr />
        {/* 1. 父组件把评论列表数据传递给了子组件 */}
        <CommentList list={this.state.list} />
      </div>
    )
  }

  // 添加评论的方法
  add = (name, content) => {
    this.state.list.push({
      id: ++this.state.index,
      name,
      content
    })
    this.setState(this.state)
  }
}

export default Comment
