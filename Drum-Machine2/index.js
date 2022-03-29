const bank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

class DrumpadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.triggerPad = this.triggerPad.bind(this);
    this.updateBackground = this.updateBackground.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.triggerPad();
    }
  }

  triggerPad() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.updateBackground();
    this.props.updateDisplay(this.props.id);
  }

  updateBackground() {
    this.setState({
      isActive: true,
    });
    setTimeout(() => {
      this.setState({
        isActive: false,
      });
    }, 100);
  }

  render() {
    return (
      <button
        id={this.props.id}
        class="drum-pad"
        onClick={this.triggerPad}
        style={{ background: this.state.isActive ? 'khaki' : 'antiquewhite' }}
      >
        {this.props.keyTrigger}
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.url}
        />
      </button>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="display">{this.props.displayText}</div>;
  }
}

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'React Drum Machine',
    };
    this.updateDisplayHandler = this.updateDisplayHandler.bind(this);
  }

  updateDisplayHandler(text) {
    this.setState({
      displayText: text,
    });
  }

  render() {
    return (
      <div id="drum-machine">
        {bank.map((item) => {
          return (
            <DrumpadButton
              url={item.url}
              id={item.id}
              keyCode={item.keyCode}
              keyTrigger={item.keyTrigger}
              updateDisplay={this.updateDisplayHandler}
            />
          );
        })}
        <Display displayText={this.state.displayText} />
      </div>
    );
  }
}

ReactDOM.render(<Drumpad />, document.getElementById('app'));
