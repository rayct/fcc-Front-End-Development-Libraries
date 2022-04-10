class App extends React.Component {
  render() {
    const breakProps = {
      title: 'Break Length',
      count: 5,
      handleDecrease: this.handleDecrease,
      handleIncrease: this.handleIncrease,
    };
    const sessionProps = {
      title: 'Session Length',
      count: 25,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease,
    };
    return (
      <div>
        <div className="flex">
          <SetTimer {...breakProps} />
          <SetTimer {...sessionProps} />
        </div>
        <div>Clock Goes Here</div>
      </div>
    );
  }
}

const SetTimer = (props) => (
  <div className="timer-container">
    <h1>{props.title}</h1>
    <div className="flex actions-wrapper">
      <button onClick={props.handleDecrease}>
        <i className="fas fa-minus" />
      </button>
      <span>{props.count}</span>
      <button onClick={props.handleIncrease}>
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
