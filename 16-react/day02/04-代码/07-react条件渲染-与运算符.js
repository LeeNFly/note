class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 90,
      age: 18
    }
  }

  render() {
    return (
      <div>
        <h3>提示消息</h3>
        {/* 可以在{}中直接书写任意的js表达式 */}
        {/* {this.state.age >= 18 && <div>成年人</div>}
        {this.state.age < 18 && <div>未成年人</div>} */}
        {this.state.age >= 18 ? <div>成年人</div> : <div>未成年人</div>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
