// 1. Create a Simple JSX Element

// React is an Open Source view library created and maintained by Facebook.
// It's a great tool to render the User Interface (UI) of modern web applications.

// TASK: 
// The current code uses JSX to assign a div element to the constant JSX.
// Replace the div with an h1 element and add the text Hello JSX! inside it.

// const JSX = <div></div>
const JSX = <h1>Hello JSX!</h1>


// 2. Create a Complex JSX Element

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


// 3. Add Comments in JSX

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


// 4. Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

