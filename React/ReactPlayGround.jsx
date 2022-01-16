// 1./47 -  Create a Simple JSX Element

// React is an Open Source view library created and maintained by Facebook.
// It's a great tool to render the User Interface (UI) of modern web applications.

// TASK: 
// The current code uses JSX to assign a div element to the constant JSX.
// Replace the div with an h1 element and add the text Hello JSX! inside it.

// const JSX = <div></div>
const JSX = <h1>Hello JSX!</h1>


// 2./47 -  Create a Complex JSX Element

// The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.
// One important thing to know about nested JSX is that it must return a single element.
// This one parent element would wrap all of the other levels of nested elements.
// For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

// TASK: 
// Define a new constant JSX that renders a div which contains the following elements in order:
// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

const JSX =
    <div>
        <h1>New JSX Componet</h1>
        <p>Paragraph Tag</p>
        <ul>
            <li>List One</li>
            <li>List Two</li>
            <li>List Three</li>
        </ul>
    </div>


// 3./47 -  Add Comments in JSX

// JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code.
// Like most programming languages, JSX has its own way to do this.
// To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

// TASK: The code editor has a JSX element similar to what you created in the last challenge.
// Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.

const JSX = (
    <div>
    {/* This is a JSX Comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);


// 4./47 -  Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render(JSX, document.getElementById, ('challenge-node'));


// 5./47 -   Define an HTML Class in JSX

// TASK: Apply/Add a class of myDiv to the div provided in the JSX code.
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);


// 6./47 -  Learn About Self-Closing JSX Tags

// TASK: Fix the errors in the code editor so that it is valid JSX and successfully transpiles.
// Make sure you don't change any of the content - you only need to close tags where they are needed.
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


// 7./47 -  Create a Stateless Functional Component

// TASK: The code editor has a function called MyComponent.
// Complete this function so it returns a single div element which contains some string of text.
// Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
const MyComponent = function() {
  // Change code below this line
  return (
    <div className="MyComponent">"Hello my Name is JSX Function"</div>
  );



  // Change code above this line
}


// 8./47 -  Create a React Component

// TASK: MyComponent is defined in the code editor using class syntax.
// Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );

    // Change code above this line
  }
};


// 9./47 -  Create a Component with Composition

// TASK: Compose the two together by rendering the ChildComponent within the ParentComponent.
// Make sure to close the ChildComponent tag with a forward slash.
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

        <ChildComponent/>

        { /* Change code above this line */ }
      </div>
    );
  }
};



// 10./47 -  Use React to Render Nested Components

// TASK: 
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit/>
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits/>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// 11./47 -  Compose React Components

// TASK: Nest two components inside of Fruits — first NonCitrus, and then Citrus.
// Both of these components are provided for you behind the scenes.Next,
// nest the Fruits class component into the TypesOfFood component, below the h1 heading element and above Vegetables.
// The result should be a series of nested components, which uses two different component types.
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus /> {/* Nested Component 1 */}
        <Citrus /> {/* Nested Components 2 */}
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits /> {/* Nested Component 3 */}
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};



// 12./47 -  Render a Class Component to the DOM

// TASK: Both the Fruits and Vegetables components are defined for you behind the scenes.
// Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM.
// There is a div with id = 'challenge-node' available for you to use.
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
          <Vegetables /> 
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));



// 13./47 - Write a React Component from Scratch

// TASK: Define a class MyComponent that extends React.Component.
// Its render method should return a div that contains an h1 tag with the text: My First React Component! in it.
// Use this text exactly, the case and punctuation matter.Make sure to call the constructor for your component, too.
// Render this component to the DOM using ReactDOM.render().
// There is a div with id = 'challenge-node' available for you to use.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));



// 14./47 - Pass Props to a Stateless Functional Component

// TASK: There are Calendar and CurrentDate components in the code editor.
// When rendering CurrentDate from the Calendar component,
// pass in a property of date assigned to the current date from JavaScript's Date object.
// Then access this prop in the CurrentDate component, showing its value within the p tags. 

// NOTES: This challenge demonstrates how to pass information from a parent component to a child component as props or properties. 
// Note that for prop values to be evaluated as JavaScript,
// they must be enclosed in curly brackets, for instance date = { Date() }. 
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: <br /> {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// 15./47 - Pass an Array as Props

// TASK: There are List and ToDo components in the code editor. 
// When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks,
// for example["walk dog", "workout"].  Then access this tasks array in the List component,
// showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list.
// Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

// NOTES: This challenge looks at how arrays can be passed as props.
// To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>;
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={['Walk Dog', 'Workout', 'Sleep']} />
        <h2>Tomorrow</h2>
        <List tasks={['Finish Coding Website', 'Study React', ' More Coding', 'Swim']} />
        { /* Change code above this line */ }
      </div>
    );
  }
};



// 16./47 - Use Default props

// NOTES: React also has an option to set default props.
// You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary.
// This allows you to specify what a prop value should be if no value is explicitly provided.
// For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, 
// you have defined a location prop that's set to the string San Francisco, unless you specify otherwise.
// React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.

// TASK: The code editor shows a ShoppingCart component.
// Define default props on this component which specify a prop items with a value of 0.
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 };



// 17./47 - Override Default Props

// NOTES: The ability to set default props is a useful feature in React.
// The way to override the default props is to explicitly set the prop values for a component.
// Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes.
// However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces.
// For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.

// TASK: The ShoppingCart component now renders a child component Items.
// This Items component has a default prop quantity set to the integer 0.
// Override the default prop by passing in a value of 10 for quantity.
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10} />
    { /* Change code above this line */ }
  }
};



// 18./47 - Use PropTypes to Define the Props You Expect

// NOTES: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

// TASK: Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};



// 19./47 - Access Props Using this.props

// TASK: Render an instance of the Welcome component in the parent component App.
// Here, give Welcome a prop of name and assign it a value of a string.
// Within the child, Welcome, access the name prop within the strong tags.

// NOTES: Anytime you refer to a class component within itself, you use the this keyword.
// To access props within a class component, you preface the code that you use to access it with this.
// For example,if an ES6 class component has a prop called data, you write { this.props.data } in JSX.
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
          <Welcome name='Raymond Turner' />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};



// 20./47 - Review Using Props with Stateless Functional Components

// TASK: The code editor has a CampSite component that renders a Camper component as a child.
// Define the Camper component and assign it default props of { name: 'CamperBot' }.
// Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop.
// Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
// NOTES: 
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line 
const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};



// 21./47 - Create a Stateful Component

// NOTES: You create state in a React component by declaring a state property on the component class in its constructor.
// This initializes the component with state when it is created.
// The state property must be set to a JavaScript object.Declaring it looks like this:
// this.state = { }

// IMPORTANT: Props vs State = https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
// The main responsibility of a Component is to translate raw data into rich HTML.
// With that in mind, the props and the state together constitute the raw data that the HTML output derives from.
// You could say props + state is the input data for the render() function of a Component, so we need to zoom in and see what each data type represents and where does it come from.
// Because we also use Cosmos = (https://github.com/skidding/cosmos) where props can contain an initial state, getting this straight is crucial.

// Pros: 
// props(short for properties) are a Component's configuration, its options if you may.
// They are received from above and immutable as far as the Component receiving them is concerned.
// A Component cannot change its props, but it is responsible for putting together the props of its child Components

// State: 
// The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events).
// It's a serializable* representation of one point in time—a snapshot.
// A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children.
// You could say the state is private. * We didn't say props are also serializable because it's pretty common to pass down callback functions through props.

// TASK: There is a component in the code editor that is trying to render a name property from its state.
// However, there is no state defined.Initialize the component with state in the constructor and assign your name to a property of name.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
      this.state = {name: 'Ray'}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};



// 22./47 - Render State in the User Interface

// TASK:  Define an h1 tag in the component's render method which renders the value of name from the component's state.

// NOTES: The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript.
// So to access the value from state just enclose the reference in curly braces.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
          <h1> {this.state.name} </h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};


// 23./47 - Render State in the User Interface Another Way

// TASK: In the MyComponent render method, define a const called name and set it equal to the name value in the component's state.
// Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.
// Next, in the return statement, render this value in an h1 tag using the variable name. Remember,
// you need to use the JSX syntax(curly braces for JavaScript) in the return statement.

// NOTES:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
      const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// 24./47 - Set State with this.setState

// TASK: There is a button element in the code editor which has an onClick() handler.
// This handler is triggered when the button receives a click event in the browser, and runs the handleClick method defined on MyComponent.
// Within the handleClick method, update the component state using this.setState().Set the name property in state to equal the string React Rocks!.

// NOTES: React provides a method for updating component state called setState.
// You call the setState method within your component class like so: this.setState(), passing in an object with key - value pairs
// The keys are your state properties and the values are the updated state data.For instance,
// if we were storing a username in state and wanted to update it, it would look like this:
// this.setState({
//   name: 'Hello Ray'
// })

this.setState({
  username: 'Lewis'
});

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


// 25./47 - Bind 'this' to a Class Method

// TASK: The code editor has a component with a state that keeps track of the text.
// It also has a method which allows you to set the text to You clicked!.
// However, the method doesn't work because it's using the this keyword that is undefined.
// Fix it by explicitly binding this to the handleClick() method in the component's constructor.
// Next, add a click handler to the button element in the render method.
// It should trigger the handleClick() method when the button receives a click event.
// Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript.
// Once you complete the above steps you should be able to click the button and see You clicked!.

// NOTES: The this keyword is one of the most confusing aspects of JavaScript but it plays an important role in React.
// Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of this so please refer to other lessons if the above is confusing!

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
      this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};



// 26./47 - Use State to Toggle an Element
 
// TASK: 
// NOTES:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    // Change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line

  }
  
    // Change code below this line
      toggleVisibility() {
        this.setState(state => ({
          visibility: !state.visibility
    }));
  }
    // Change code above this line
  
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}



// 27./47 - Write a Simple Counter

// TASK: // Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked.
// Also, create a reset() method so when the reset button is clicked, the count is set to 0.

// NOTES: Make sure you don't modify the classNames of the buttons.
// Also, remember to add the necessary bindings for the newly - created methods in the constructor.
// You can design a more complex stateful component by combining the concepts covered so far.
// These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.
// The Counter component keeps track of a count value in state.
// There are two buttons which call methods increment() and decrement().
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
    reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};



// 28./47 - Create a Controlled Input
 
// TASK: 
// NOTES: 
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }

  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
  })
}
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} /> {/*Input Value*/}
        { /* Change code above this line */} 
        <h4>Controlled Input:</h4>
        {/* <h2>{this.state.input}</h2> */}
        <p>{this.state.input}</p>
      </div>
    );
  }
};



// 29./47 - Create a Controlled Form
 
// TASK: 
// NOTES: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.
// For camper convenience, the default behavior has been disabled here to prevent refreshes from resetting challenge code.
// event.preventDefaut(); => is used because we are using a Front End Framework

// SOLUTION 1
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
      event.preventDefault(); 
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} /> {/*Input Value*/}
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

// SOLUTION 2
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}



// 30./47 - Pass State as Props to Child Components
// TASK: The MyApp component is stateful and renders a Navbar component as a child.
// Pass the name property in its state down to the child component,
// then show the name in the h1 tag that's part of the Navbar render method.
// name should appear after the text Hello, my name is:.
// NOTES:
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};



// 31./47 - Pass a Callback as Props

// TASK: 1. Add the GetInput component to the render method in MyApp, then pass it a prop called input assigned to inputValue from MyApp's state.
// Also create a prop called handleChange and pass the input handler handleChange to it.

// TASK 2. Next, add RenderInput to the render method in MyApp, then create a prop called input and pass the inputValue from state to it.
// Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props.
// This updates the input in the state of the parent, which is passed as props to both children.
// Observe how the data flows between the components and how the single source of truth remains the state of the parent component.

// NOTES: Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */}
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> {/*CORRECT*/}
        <RenderInput input={this.state.inputValue}/> {/*CORRECT*/}
        { /* Change code above this line */ }
       </div>
    );
  }
};
// COMPONENT 1
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};
// COMPONENT 2
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


// 32./47 - Use the Lifecycle Method componentWillMount

// TASK: 
// NOTES: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
      console.log('What I am I seeing here..?')
    // Change code above this line
  }
  render() {
    return <div />
  }
};


// 33./47 - Use the Lifecycle Method componentDidMount

// TASK: There is a mock API call in componentDidMount().
// It sets state after 2.5 seconds to simulate calling a server to retrieve data.
// This example requests the current total active users for a site.In the render method,
// render the value of activeUsers in the h1 after the text Active Users:.Watch what happens in the preview,
// and feel free to change the timeout to see the different effects.

// NOTES: Most web developers, at some point, need to call an API endpoint to retrieve data.
// If you're working with React, it's important to know where to perform this action.
// The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
// This method is called after a component is mounted to the DOM.Any calls to setState() here will trigger a re - rendering of your component.
// When you call an API in this method, and set your state with the data that the API returns,
// it will automatically trigger an update once you receive the data.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}


// 34./47 - Add Event Listeners

// TASK 1: Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress().
// You can use document.addEventListener() which takes the event(in quotes) as the first argument and the callback as the second argument.

// TASK 2: Then, in componentWillUnmount(), remove this same event listener.
// You can pass the same arguments to document.removeEventListener().
// It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed.
// Removing event listeners is an example of one such clean up action.

// NOTES:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    console.log('Ray');

  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};


// 35./47 - 

// TASK: 
// NOTES:


// 36./47 - 

// TASK: 
// NOTES:


// 37./47 - 

// TASK: 
// NOTES:


// 38./47 - 

// TASK: 
// NOTES:


// 39./47 - 

// TASK: 
// NOTES:


// 40./47 - 

// TASK: 
// NOTES:


// 41./47 - 

// TASK: 
// NOTES:


// 42./47 - 

// TASK: 
// NOTES:


// 43./47 - 

// TASK: 
// NOTES:


// 44./47 - 

// TASK: 
// NOTES:


// 45./47 - 

// TASK: 
// NOTES:


// 46./47 - 

// TASK: 
// NOTES:


// 47./47 - 

// TASK: 
// NOTES: