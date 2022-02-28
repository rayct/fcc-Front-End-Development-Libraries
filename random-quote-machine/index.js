
// OnFirstLoad Function
// window.onload = init;
// function init() {
    
// }
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


    // Fetch New Quotes Function
    const getNewQuote = () => {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }
    

    return (

    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
        
    <div id='quote-box' className="container pt-5">
        <div className="jumbotron d-flex align-items-center justify-content-center">
            <div className="card">
                <div className="card-header">Inspirational Quotes</div>
                <div className="card-body">
                        {randomQuote ? (
                            <>
                                <h5 className="card-title">- {randomQuote.author || "No Author"}</h5>
                                <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                                <h2>Loading</h2>
                        )}
                    
                    <div className="row">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                                {/* <button onClick={getPreviousQuote} className="btn btn-primary ml-1">Previous Quote</button> */}
                            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote.text + '"' + randomQuote.author)}
                                target="_blank" className="btn btn-warning">
                                <i className="fas fa-twitter"></i>
                            </a>
                        <a href="#" className="btn btn-danger"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
           
    );
}


ReactDOM.render(<App/>, document.getElementById('app'))


            {/* {quotes.map[quote => (
                <div>{quote.text}</div>
            )]} */}

 