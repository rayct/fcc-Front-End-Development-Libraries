function App() {
  return (
    <div className="container">
      <div className="grid">
        <div className="dis"></div>
        <div className="padButton AC">AC</div>
        <div className="padButton clear">C</div>
        <div className="padButton divide">/</div>
        <div className="padButton multiply">x</div>
        <div className="padButton seven">7</div>
        <div className="padButton eight">8</div>
        <div className="padButton nine">9</div>
        <div className="padButton subtract">-</div>
        <div className="padButton four">4</div>
        <div className="padButton five">5</div>
        <div className="padButton six">6</div>
        <div className="padButton plus">+</div>
        <div className="padButton one">1</div>
        <div className="padButton two">2</div>
        <div className="padButton three">3</div>
        <div className="padButton equals">=</div>
        <div className="padButton zero">0</div>
        <div className="padButton decimal">.</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
