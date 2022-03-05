const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const App = (props) => (
    <div id='display' className='display'>
        {props.keys.map((key, idx) => (
            <Box text={key} key={idx} />
        ))}
    </div>
);


const Box = (props) => (
    <div className='box'>
        {props.text}
        <audio></audio> 
    </div>
);


ReactDOM.render(<App keys={keys} />, document.getElementById('drum-machine'));