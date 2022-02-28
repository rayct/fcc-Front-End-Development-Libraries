import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// 
function App() {
        
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("fff");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>  
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button 
        id="new-quote" 
        class="button"
        onClick={handleNewQuote} 
        >
        New Quote
      </button>
      <a 
         href="https://twitter.com/intent/tweet"
         id="tweet-quote"
         target="_blank"
       >
         Tweet
      </a>
    </div>
  </div>
);

// const getRandomIndex = (max) => 
//   Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

// const App = () => {
//   const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])

//   const handleNewQuote = () => {
//     setQuote(quoteData[getRandomIndex()])
//   }

  return (
    <div class="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("app"));
