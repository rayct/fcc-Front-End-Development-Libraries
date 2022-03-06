const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const sounds = [
{
    // keyCode: 81,
    mp3: 'Q',
    // id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
    // keyCode: 87,
    mp3: 'W',
    // id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
    // keyCode: 69,
    mp3: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
    // keyCode: 65,
    mp3: 'A',
    // id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
      // keyCode: 83,
    mp3: 'S',
    // id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
    // keyCode: 68,
    mp3: 'D',
    // id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
    // keyCode: 90,
    mp3: 'Z',
    // id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
    // keyCode: 88,
    mp3: 'X',
    // id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
    // keyCode: 67,
    mp3: 'C',
    // id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

const App = () => (
    <div id='display' className='display'>
        {sounds.map((sound, idx) => (
            <Box text={sound.key} key={idx} audio={sound.mp3} />
            ))}
    </div>
);


class Box extends React.Component { 
    constructor(props) {
        super(props);

        this.audio = React.createRef();
    }

    playSound = () => {
        this.audio.current.play();
    }


    render() {
        const { text, audio } = this.props;

        return (
            <div className='box' onClick={this.playSound}>
                {text}
                <audio ref={this.audio} src={audio} className='clip' id={text} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('drum-machine'));