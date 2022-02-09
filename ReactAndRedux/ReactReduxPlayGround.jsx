// Front End Development Libraries - Raymond C Turner

// React and Redux Course:  1/10 - Getting Started with React Redux
// Notes: 
// 

// Task:
// Start with a DisplayMessages component.
// Add a constructor to this component and initialize it with a state that has two properties: input,
// that's set to an empty string, and messages, that's set to an empty array.

// The DisplayMessages component should render an empty div element.
// The DisplayMessages constructor should be called properly with super, passing in props.
// The DisplayMessages component should have an initial state equal to {input: "", messages: []}.
class DisplayMessages extends React.Component {
  // Change code below this line
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
  // Change code above this line
  render() {
    return <div />
  }
};



// React and Redux Course:  2/10 - Manage State Locally First
// Notes: 
// 

// Task:
// 
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
   handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }
    // Change code below this line
  submitMessage() { 
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
    // Change code above this line
  }
  
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
           <ul>
            <li> {this.state.messages} </li>
           </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};




// React and Redux Course:  3/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  4/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  5/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  6/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  7/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  8/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  9/10 - 
// Notes: 
// 

// Task:
// 




// React and Redux Course:  10/10 - 
// Notes: 
// 

// Task:
// 