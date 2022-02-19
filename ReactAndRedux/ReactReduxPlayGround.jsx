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
      <Provider store={store}> {/* <= A PROP OF STORE PASSED TO IT, EQUAL TO THE REDUX STORE */}
        <DisplayMessages />
      </Provider>
    );
  }
  // Change code above this line
};



// React and Redux Course:  5/10 - Map State to Props
// Notes: 
// Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().

// Task:
// Create a function mapStateToProps(). 
// This function should take state as an argument, then return an object which maps that state to specific property names.
// These properties will become accessible to your component via props.
// Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component.
// Create a property messages in the object that's being returned, and set it to state.

// The const state should be an empty array.
// mapStateToProps should be a function.
// mapStateToProps should return an object.
// Passing an array as state to mapStateToProps should return this array assigned to a key of messages.

const state = [];
// Change the below this line

function mapStateToProps(state) {
  return {
    messages: state
  }
};




// React and Redux Course:  6/10 - Map Dispatch to Props
// Notes: 
// 

// Task:
// 
// addMessage should return an object with keys type and message.
// mapDispatchToProps should be a function.
// mapDispatchToProps should return an object.
// Dispatching addMessage with submitNewMessage from mapDispatchToProps should return a message to the dispatch function.

// Solution 1
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = function(dispatch) {
  return {
      submitNewMessage: function(message) {
        dispatch(addMessage(message));
      }
  }
};

// Solution 2: ES6 Method of Writing
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

let mapDispatchToProps = dispatch => {
  return {
      submitNewMessage: message => {
        dispatch(addMessage(message));
      }
  }
};

// React and Redux Course:  7/10 - Connect Redux to React
// Notes: 
// To use this method, pass in the functions as arguments, and immediately call the result with your component.
// This syntax is a little unusual and looks like: {/* connect(mapStateToProps, mapDispatchToProps)(MyComponent) */}
// If you want to omit one of the arguments to the connect method, you pass null in its place.

// Task:
// Connect this component to Redux with the connect method from the ReactRedux global object, and call it immediately on the Presentational component.
// Assign the result to a new const called ConnectedComponent that represents the connected component.
// That's it, now you're connected to Redux! Try changing either of connect's arguments to null and observe the test results.

// The Presentational component should render.
// The Presentational component should receive a prop messages via connect.
// The Presentational component should receive a prop submitNewMessage via connect.
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

// Solution 1 with one of connect's arguments set to null 
const ConnectedComponent = connect(null, mapDispatchToProps)(Presentational);

// Solution 2 Both of Connects args set to recive both props
const ConnectedComponent = connect(ConnectedComponent, mapDispatchToProps)(Presentational);

 


// React and Redux Course:  8/10 - Connect Redux to the Messages App
// Notes: 
//

// Task:
// The only change is that the React component is renamed to Presentational.
// Create a new component held in a constant called Container that uses connect to connect the Presentational component to Redux.
// Then, in the AppWrapper, render the React Redux Provider component.
// Pass Provider the Redux store as a prop and render Container as a child.
// Once everything is setup, you will see the messages app rendered to the page again.

// The AppWrapper should render to the page.
// The Presentational component should render to page.
// The Presentational component should render an h2, input, button, and ul elements.
// The Presentational component should receive messages from the Redux store as a prop.
// The Presentational component should receive the submitMessage action creator as a prop.

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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
class Presentational extends React.Component {
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};



// React and Redux Course:  9/10 - Extract Local State into Redux
// Notes: 
// 

// Task:
// 
// Redux:
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' // removed the messages property in the local state
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
    this.props.submitNewMessage(this.state.input)
    this.setState({
      input: ''
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
          {this.props.messages.map( (message, idx) => { // maps over the messages received from props rather than state
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};



// React and Redux Course:  10/10 - Moving Forward From Here
// Notes: 
// 

// Task:
// Log the message 'Now I know React and Redux!' to the console.
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log('Now I know React and Redux!');