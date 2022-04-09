class App extends React.Component {
  render() {
    return (
      <div>
        <div className="flex">
          <SetTimer />
          <SetTimer />
        </div>
        <div>Clock Goes Here</div>
      </div>
    );
  }
}

const SetTimer = () => (
  <div className="timer-container">
    <h1>Break Time</h1>
    <div className="flex actions-wrapper">
      <button>
        <i className="fas fa-minus" />
      </button>
      <span>5</span>
      <button>
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
