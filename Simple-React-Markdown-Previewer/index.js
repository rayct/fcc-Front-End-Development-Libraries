
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
class App extends React.Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const { text } = this.state;

        const markdown = marked(text);

        return (
            <div>
                <h2 className="text-center m-4">Convert Markdown</h2>
                <div className="row">
                    <div className="col-6">
                        <h6 className='h6-text'>Editor:</h6>
                        <textarea className='form-control' id='editer' value={text} onChange={this.handleChange} />
                    </div>
                    <div className='col-6' id="preview">
                    <h6 className='h6-text'>Previewer:</h6>
                    <div className='preview rounded' dangerouslySetInnerHTML={{__html: markdown}} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app')); 
