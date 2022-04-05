function App() {
    const [expression, setExpression] =React.useState("");

    const display = (symbol) => {
        setExpression(prev => prev + symbol)
    };
    return (
    <div className="container">
      <div className="grid">
        <div className="dis">
            <input type="text" value={expression} placeholder="0" disabled />
        </div>
        <div onClick={display} className="padButton AC sunset-orange">AC</div>
        <div onClick={display} className="padButton clear sunset-orange">C</div>
        <div onClick={display} className="padButton divide">/</div>
        <div onClick={display} className="padButton multiply">x</div>
        <div onClick={() => display(7)} className="padButton seven good-night">7</div>
        <div onClick={display} className="padButton eight good-night">8</div>
        <div onClick={display} className="padButton nine good-night">9</div>
        <div onClick={display} className="padButton subtract">-</div>
        <div onClick={display} className="padButton four good-night">4</div>
        <div onClick={display} className="padButton five good-night">5</div>
        <div onClick={display} className="padButton six good-night">6</div>
        <div onClick={display} className="padButton plus">+</div>
        <div onClick={display} className="padButton one good-night">1</div>
        <div onClick={display} className="padButton two good-night">2</div>
        <div onClick={display} className="padButton three good-night">3</div>
        <div onClick={display} className="padButton equals dark-periwinkle">=</div>
        <div onClick={display} className="padButton zero good-night">0</div>
        <div onClick={display} className="padButton decimal good-night">.</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
