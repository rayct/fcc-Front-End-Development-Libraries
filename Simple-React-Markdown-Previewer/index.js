
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// marked.setOptions({
//     breaks: true,
// })
const initialState = `
This is a Paragragh

**This is Bolded Text**

> Block Quotes!

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
- List Item 1
- List Item 2

[This is My Portfolio](https://www.rayturner.dev/)

This a inline \`<div></div>\`

This is a code block
\`\`\`
handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
\`\`\`

 This is an Image Item

![JavaScript Image](https://www.freepnglogos.com/uploads/javascript-png/js-logo-on-yellow-11.png)
`;

class App extends React.Component {
    state = {
        text: initialState
    }
    
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const { text } = this.state;

        const markdown = marked(text, { breaks: true });

        return (
            <div>
                <h2 className="text-center m-4">Convert Markdown</h2>
                <div className="row">
                    <div className="col-6">
                        <h6 className='h6-text'>Editor</h6>
                        <textarea className='form-control p-2' id='editor' value={ text } onChange={this.handleChange}/>
                    </div>
                    <div className='col-6'>
                    <h6 className='h6-text'>Previewer</h6>
                        <div className='preview rounded p-2' dangerouslySetInnerHTML={{ __html: markdown }} id='preview' />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app')); 
 