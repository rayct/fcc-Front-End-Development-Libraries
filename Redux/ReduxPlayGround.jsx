// Front End Development Libraries - Raymond C Turner

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



// Redux Course:  12/17 - Use Middleware to Handle Asynchronous Actions
// Notes: 
// 

// Task: 
//
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function (dispatch) {
    
    // Dispatch request action here
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }

      // Dispatch received data action here
      dispatch(requestingData(data));

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);



// Redux Course:  13/17 - Write a Counter with Redux
// Notes: 
// 

// Task: 
//
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = function () { // ES5 Style Function declaration
  return {
    type: 'INCREMENT'
  }
}; // Define an action creator for incrementing

const decAction = () => { // ES6 Style Function declaration
  return {
    type : 'DECREMENT'
  }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers



// Redux Course:  14/17 - Never Mutate State
// Notes: 
// These final challenges describe several methods of enforcing the key principle of state immutability in Redux.
// Immutable state means that you never modify state directly, instead, you return a new copy of state.
// 

// Task: 
// There is a store and reducer in the code editor for managing to-do items.
// Finish writing the ADD_TO_DO case in the reducer to append a new to -do to the state.
// There are a few ways to accomplish this with standard JavaScript or ES6.
// See if you can find a way to return a new array with the item from action.todo appended to the end.
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail

      // Solution 1
      const newList = [...todos];
      newList.push(action.todo);
      return newList;
    
      // Solution 2
      // return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);



// Redux Course:  15/17 - Use the Spread Operator on Arrays
// Notes: 
// 

// Task: 
// Use the spread operator to return a new copy of state when a to-do is added.
// The Redux store should exist and initialize with a state equal to ["Do not mutate state!"].
// addToDo and immutableReducer both should be functions.
// Dispatching an action of type ADD_TO_DO on the Redux store should add a todo item and should NOT mutate state.
// The spread operator should be used to return new state.
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]; // Spread Operator used to return new state.
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);



// Redux Course:  16/17 - Remove an Item from an Array
// Notes: 
// Time to practice removing items from an array.
// The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

// Task: 
// The reducer and action creator were modified to remove an item from an array based on the index of the item. 
// Finish writing the reducer so a new state array is returned with the item at the specific index removed.
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail

      // Solution 1
      // var a = state.slice(0, action.index);
      // var b = state.slice(action.index + 1);
      // return a.concat(b);
    
      // Solution 2
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);



// Redux Course:  17/17 - Copy an Object with Object.assign
// Notes: 
// 

// Task: 
// The Redux state and actions were modified to handle an object for the state.
// Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online.
// Try to use Object.assign() to complete the challenge.

// The Redux store should exist and initialize with a state that is equivalent to the defaultState object declared on line 1.
// wakeUp and immutableReducer both should be functions.
// Dispatching an action of type ONLINE should update the property status in state to online and should NOT mutate state.
// Object.assign should be used to return new state.
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      
      // Solution 1
      return Object.assign({}, state, { status: 'online' });

      // Solution 2
      // const newState = Object.assign({}, defaultState, { status: 'online' });
      // return newState;
      default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
// console.log(store.getState());
store.dispatch(wakeUp());
console.log(store.getState());
console.log(defaultState);



