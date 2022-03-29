// Notes: 1. Set pad Trigger timeout - 2. Change current Pad hit to display drum sound

const sounds = [
  {
    keyCode: 81,
    key: 'Q',
    tone: 'Heater-1',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    key: 'W',
    tone: 'Heater-2',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    key: 'E',
    tone: 'Heater-3',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    key: 'A',
    tone: 'Heater-4',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    key: 'S',
    tone: 'Clap',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    key: 'D',
    tone: 'Open-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    key: 'Z',
    tone: 'Kick-n' - 'Hat',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    key: 'X',
    tone: 'Kick',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    key: 'C',
    tone: 'Closed-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const App = () => (
  <div id="display" className="display">
    <h2>Hit a Drum</h2>
    {sounds.map((sound, idx, tone) => (
      <DrumPad text={sound.key} key={idx} audio={sound.mp3} tone={tone} />
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
    this.audio.current.play(tone);

    // ?????????????????????????????
    const tone = this.sound.current.tone;

    const parent = this.audio.current.tone;
    parent.classList.add('active');

    // When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
    const display = parent.tone;
    display.querySelector('h2').innerText = `${ tone }`;
  };

  render() {
    const { text, audio, tone } = this.props;

    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${tone}`}>
        {tone}
        <audio
          ref={this.audio}
          src={audio}
          className="clip"
          id={tone}
          // tone={text.tone}
        />
      </div>
    );
  }
}
// Keyboard Control
// document.addEventListener('keydown', (e) => {
//   const id = e.key.toUpperCase();
//   const audio = document.getElementById(id);

//   if (audio) {
//     audio.currentTime = 0;
//     const parent = audio.parentNode;
//     parent.classList.add('active');

//     const display = parent.parentNode;
//     display.querySelector('h2').innerText = `${id} is playing`;
//     audio.play();
//   }
// });

ReactDOM.render(<App />, document.getElementById('drum-machine'));
