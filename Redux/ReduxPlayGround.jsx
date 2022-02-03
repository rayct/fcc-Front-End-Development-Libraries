// Redux Course:  1/17 -  Create a Redux Store
// Notes: 
// Redux is a state management framework that can be used with a number of different web technologies, including React.
// In Redux, there is a single state object that's responsible for the entire state of your application.
// This means if you had a React app with ten components, and each component had its own local state,
// the entire state of your app would be defined by a single state object housed in the Redux store.
// This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

// Task: 
// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);



// Redux Course:  2/17 - Get State from Redux Store
// Notes: 
// The Redux store object provides several methods that allow you to interact with it.
// For example, you can retrieve the current state held in the Redux store object with the getState() method.

// Task: 
// The code from the previous challenge is re-written more concisely in the code editor.
// Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
let currentState = store.getState();



// Redux Course:  3/17 - Define a Redux Action
// Notes:
// Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. 
// The store then conducts the business of updating state based on the action that occurred.
// 

// Task: 
// Writing a Redux action is as simple as declaring an object with a type property.
// Declare an object action and give it a property type set to the string 'LOGIN'.
// Define an action here.
const action = {
  type: 'LOGIN'
}



// Redux Course:  4/17 - Define an Action Creator
// Notes: 
// After creating an action, the next step is sending the action to the Redux store so it can update its state.
// In Redux, you define action creators to accomplish this.
// An action creator is simply a JavaScript function that returns an action.
// In other words, action creators create objects that represent action events.

// Task:
// Define a function named actionCreator() that returns the action object when called.
const action = {
  type: 'LOGIN'
}

// Define an action creater here:
// Solution 1
function actionCreator() { 
  return type
}

// Solution 2 ES6 Solutions
const actionCreator = () => {
  return action;
};
let actionCreator = (task) => task
let actionCreator = (type) => type
console.log(action); // Console Output: => { type: 'LOGIN' }

// Solution 4
function actionCreator(task) {
  return task;
}

// Solution 5
let actionCreator = function (task) {
  return task;
}



// Redux Course:  5/17 - Dispatch an Action Event
// Notes: 
// dispatch method is what you use to dispatch actions to the Redux store. 
// Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
// Recall that action creators return an object with a type property that specifies the action that has occurred.
// Then the method dispatches an action object to the Redux store.
// Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:
 

// Task: 
// The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false.
// There's also an action creator called loginAction() which returns an action of type LOGIN. 
// Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());



// Redux Course:  6/17 - Handle an Action in the Store
// Notes: 
// 

// Task: 
// 
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return { login: true };
  } else {
    return state;
    
    // Solution 2
    // } else {
      return { login: false };
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};



// Redux Course:  7/17 - Use a Switch Statement to Handle Multiple Actions
// Notes: 
// 

// Task: 
// Fill in the reducer function to handle multiple authentication actions.
// Use a JavaScript switch statement in the reducer to respond to different action events.
// This is a standard pattern in writing Redux reducers.
// The switch statement should switch over action.type and return the appropriate authentication state.

const defaultState = { // <= A single state object with the property authenticated
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  // JavaScript switch statement in the reducer to respond to different action events.
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true
      }
    case "LOGOUT":
      return {
        authenticated: false
      }
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer); // <= The Action creator

// Below are the Action Objects
// Action Object 1
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};
// Action Object 2
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};



// Redux Course:  8/17 - Use const for Action Types
// Notes: 
// A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used.
// You can refactor the code you're working with to write the action types as const declarations.
// It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
// It is good practice to declare your Constants/VARS first and then you can use them multiple times. When a change is needed
// you only have to change the const's when needed.

// Task: 
// Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively.
// Then, edit the authReducer() and the action creators to reference these constants instead of string values.

const LOGIN = 'LOGOUT';
const LOGOUT = 'LOGOUT';
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};



// Redux Course:  9/17 - Register a Store Listener
// Notes: 
// Another method you have access to on the Redux store object is store.subscribe().
// This allows you to subscribe listener functions to the store, 
// which are called whenever an action is dispatched against the store.
// One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

// Task: 
// Write a callback function that increments the global variable count every time the store receives an action,
// and pass this function in to the store.subscribe() method.
// You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object.
// Watch the console output between the action dispatches to see the updates take place.
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
// Solution 1
store.subscribe(() => {  // <= Callback Function 1
  count += 1;
});

// Solution 2
store.subscribe(() => { // <= Callback Function 2
  count++;
});

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);



// Redux Course:  10/17 - Combine Multiple Reducers
// Notes: 
// 

// Task: 
// There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store.
// Finish writing the rootReducer() function using the Redux.combineReducers() method.
// Assign counterReducer to a key called count and authReducer to a key called auth.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducer({
  count: counterReducer,
  auth: authReducer
}); // Define the root reducer here

const store = Redux.createStore(rootReducer);



// Redux Course:  11/17 - Send Action Data to the Store
// Notes: 
// 

// Task: 
// There's a basic notesReducer() and an addNoteText() action creator defined in the code editor.
// Finish the body of the addNoteText() function so that it returns an action object.
// The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator.
// When you call the action creator, you'll pass in specific note information that you can access for the object.

// Next, finish writing the switch statement in the notesReducer().
// You need to add a case that handles the addNoteText() actions.
// This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: 'ADD_NOTE',
    text: note
    };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());



// Redux Course:  12/17 - 
// Notes: 
// 

// Task: 
//



// Redux Course:  13/17 - 
// Notes: 
// 

// Task: 
//



// Redux Course:  14/17 - 
// Notes: 
// 

// Task: 
//



// Redux Course:  15/17 - 
// Notes: 
// 

// Task: 
//



// Redux Course:  16/17 - 
// Notes: 
// 

// Task: 
//



// Redux Course:  17/17 - 
// Notes: 
// 

// Task: 
//

