var React = require('react')
var Header = require('./Header').default

class App extends React.Component {
    state = {
        pageHeader : 'Naming Contest'
    }
    render() {
        return (
            <div>
                <div>
                    <Header message={this.state.pageHeader} />
                </div>
            </div>
        )
    }
};

export default App;