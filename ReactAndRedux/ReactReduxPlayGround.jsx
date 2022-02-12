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
// Solution 1
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
        <input onChange={this.handleChange.bind(this)}value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map(function(message) {
            return <li>{message}</li>
          })}
            </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
// freeCodeCamp - Solution 2
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};



// React and Redux Course:  3/10 - Extract State Logic to Redux
// Notes: 
// 

// Task:
// First, define an action type ADD and set it to a const ADD. 
// Next, define an action creator addMessage() which creates the action to add a message.
// You'll need to pass a message to this action creator and include the message in the returned action.

// Then create a reducer called messageReducer() that handles the state for the messages.
// The initial state should equal an empty array.
// This reducer should add a message to the array of messages held in state, or return the current state.
// Finally, create your Redux store and pass it the reducer.

// The const ADD should exist and hold a value equal to the string ADD
// The action creator addMessage should return an object with type equal to ADD and message equal to the message that is passed in.
// messageReducer should be a function.
// The store should exist and have an initial state set to an empty array.
// Dispatching addMessage against the store should immutably add a new message to the array of messages held in state.
// The messageReducer should return the current state if called with any other actions.
// Define ADD, addMessage(), messageReducer(), and store here:

// NON ES6 WAY: Solution 1

// THE ACTION TYPE 'ADD' WHICH IS SET TO A CONST ADD
const ADD = 'ADD';
// FUNCTION THAT WORKS WITH THE REDUCER
 function addMessage(message) {
   return {
     type: 'ADD',
     message: message
   };
 }
// THE REDUCER METHOD
 function messageReducer (initialState = [], action) {
   if (action.type === 'ADD') {
    return [...initialState, action.message];
   } else {
     return initialState;
   }  

 };
// THE REDUX STORE
const store = Redux.createStore(messageReducer);
 
// freeCodeCamp: Solution 2
const ADD = 'ADD';

const addMessage = (message) => { // THE ACTION TYPE 'ADD' WHICH IS SET TO A CONST ADD
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) { // <= SWITCH STATEMENT
    case ADD: // <= CASE STATEMENT
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer); // <= REDUX STORE



// React and Redux Course:  4/10 - Use Provider to Connect Redux to React
// Notes: 
// React Redux is available as a global variable here, so you can access the Provider with dot notation.
// The code in the editor takes advantage of this and sets it to a constant Provider for you to use in the AppWrapper render method.

// Task:
// The code editor now shows all your Redux and React code from the past several challenges.
// It includes the Redux store, actions, and the DisplayMessages component.
// The only new piece is the AppWrapper component at the bottom.Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop.
// Then render the DisplayMessages component as a child. Once you are finished, you should see your React component rendered to the page.

// The AppWrapper should render.
// The Provider wrapper component should have a prop of store passed to it, equal to the Redux store.
// DisplayMessages should render as a child of AppWrapper.
// The DisplayMessages component should render an h2, input, button, and ul element.

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {

  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
  // Change code above this line
};



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