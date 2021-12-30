// 1./47 Create a Simple JSX Element

// React is an Open Source view library created and maintained by Facebook.
// It's a great tool to render the User Interface (UI) of modern web applications.

// TASK: 
// The current code uses JSX to assign a div element to the constant JSX.
// Replace the div with an h1 element and add the text Hello JSX! inside it.

// const JSX = <div></div>
const JSX = <h1>Hello JSX!</h1>


// 2./47 Create a Complex JSX Element

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


// 3./47 Add Comments in JSX

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


// 4./47 Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render(JSX, document.getElementById, ('challenge-node'));


// 5./47  Define an HTML Class in JSX

// TASK: Apply/Add a class of myDiv to the div provided in the JSX code.
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);


// 6./47 Learn About Self-Closing JSX Tags

// TASK: Fix the errors in the code editor so that it is valid JSX and successfully transpiles.
// Make sure you don't change any of the content - you only need to close tags where they are needed.
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


// 7./47 Create a Stateless Functional Component

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


// 8./47 Create a React Component

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


// 9./47 Create a Component with Composition

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



// 10./47

// 11./47

// 12./47

// 13./47

// 14./47

// 15./47
// 16./47
// 17./47
// 18./47
// 19./47
// 20./47
// 21./47
// 22./47
// 23./47
// 24./47
// 25./47
// 26./47
// 27./47
// 28./47
// 29./47
// 30./47
// 31./47