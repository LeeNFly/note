class Modal extends React.Component {
  render() {
    let { title, children } = this.props
    // 通过props.children就能够获取到组件的子元素
    return (
      <div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    )
  }
}

// vue 中 slot插槽
ReactDOM.render(
  <div>
    <Modal title="提示">你是否要退出本系统？</Modal>
    <Modal title="温馨提示">是确定要删除这条记录吗？</Modal>
    <Modal title="警告">这是一个提示的消息</Modal>
  </div>,
  document.getElementById('app')
)
