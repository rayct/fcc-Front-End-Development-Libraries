// Notes: 1. Set pad Trigger timeout - 2. Change current Pad hit to display drum sound

const sounds = [
{
    // keyCode: 81,
    id:  'Heater-1',
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
    // keyCode: 87,
    key: 'W',
    id:  'Heater-2',    
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
    // keyCode: 69,
    key: 'E',
    id:  'Heater-3',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
    // keyCode: 65,
    key: 'A',
    id:  'Heater-4',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
    // keyCode: 83,
    key: 'S',
    id:  'Clap',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
    // keyCode: 68,
    key: 'D',
    id:  'Open-HH', 
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
    // keyCode: 90,
    key: 'Z',
    id:  'Kick-n Hat',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
    // keyCode: 88,
    key: 'X',
    id:  'Kick',   
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
    // keyCode: 67,
    key: 'C',
    id:  'Closed-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

const App = () => (
    <div id='display' className='display'>
        <h2>Hit a Drum</h2>
        {sounds.map((sound, idx) => (
          <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
            ))}
    </div>
);


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    
    this.audio = React.createRef();
  }
    
    componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
    }
    

playSound = () => {
    this.audio.current.play();

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add('active');

    
  const display = parent.parentNode;
    display.querySelector('id').innerText = '';
    // display.querySelector('h2').innerText = (id ? id : 'key');
    // this.props.updateDisplay(this.props.clipId.replace(/-/g, 'id'));
    
    
}

render() {
    const { text, audio } = this.props;

    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    )
  }
}

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    
    // const display = parent.parentNode;
    // display.querySelector('h2').innerText = (id ? id : 'key');
    // display.querySelector('h2').innerText = id;
    // this.props.updateDisplay(this.props.clipId.replace(/-/g, 'h2'))
    // audio.play();
      
  }
});



ReactDOM.render(<App />, document.getElementById('drum-machine'));