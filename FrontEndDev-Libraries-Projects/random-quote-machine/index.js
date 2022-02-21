// On First Load Function
function App() {
    return (
        <div>Hello Ray!</div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))

window.onload = init;
function init() {
    document.getElementById('text').innerText = 'Ray Turner';
}
console.log("JS Loaded");



