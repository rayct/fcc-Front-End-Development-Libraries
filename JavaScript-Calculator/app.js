function App() {
  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == '=') {
      if (/[0.9]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + '=');
  };
  const allClear = () => {
    setExpression('');
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split('')
        .slice(0, prev.length - 1)
        .join('')
    );
    setAnswer(0);
  };
  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} className="padButton AC sunset-orange">
          AC
        </div>
        <div onClick={clear} className="padButton clear sunset-orange">
          C
        </div>
        <div onClick={() => display('/')} className="padButton divide">
          /
        </div>
        <div onClick={() => display('x')} className="padButton multiply">
          x
        </div>
        <div
          onClick={() => display('7')}
          className="padButton seven good-night"
        >
          7
        </div>
        <div
          onClick={() => display('8')}
          className="padButton eight good-night"
        >
          8
        </div>
        <div onClick={() => display('9')} className="padButton nine good-night">
          9
        </div>
        <div onClick={() => display('-')} className="padButton subtract">
          -
        </div>
        <div onClick={() => display('4')} className="padButton four good-night">
          4
        </div>
        <div onClick={() => display('5')} className="padButton five good-night">
          5
        </div>
        <div onClick={() => display('6')} className="padButton six good-night">
          6
        </div>
        <div onClick={() => display('+')} className="padButton plus">
          +
        </div>
        <div onClick={() => display('1')} className="padButton one good-night">
          1
        </div>
        <div onClick={() => display('2')} className="padButton two good-night">
          2
        </div>
        <div
          onClick={() => display('3')}
          className="padButton three good-night"
        >
          3
        </div>
        <div onClick={calculate} className="padButton equals dark-periwinkle">
          =
        </div>
        <div onClick={() => display('0')} className="padButton zero good-night">
          0
        </div>
        <div
          onClick={() => display('.')}
          className="padButton decimal good-night"
        >
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
