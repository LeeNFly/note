import React from 'react'
class CommentList extends React.Component {
  render() {
    // 2. 子组件通过props可以获取到父组件传递过来的数据
    let { list } = this.props
    return (
      <div className="list">
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <h3>
                评论人：
                {item.name}
              </h3>
              <p>
                评论内容：
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// 导出组件
export default CommentList
