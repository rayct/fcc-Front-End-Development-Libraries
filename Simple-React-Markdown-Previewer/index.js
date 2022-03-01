
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
class App extends React.Component {
    state = {
        markdown: ''
    }

    handleChange = (e) => {
        this.setState({
            markdown: e.target.value
        })
    }
    render() {
        const { markdown } = this.state;

        return (
            <div>
                <h2 className="text-center">Convert Markdown</h2>
                <div className="row">
                    <div className="col-6">
                        <textarea id='editer' value={markdown} onChange={this.handleChange} />
                    </div>
                    <div className="col-6" preview id="preview">
                        <p>Hello Again!</p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app')); 
