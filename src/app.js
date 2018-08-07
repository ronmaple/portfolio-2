import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
console.log('react App loads');

class App extends React.Component {
    render() {
        return (
            <div>
                Webpack works       
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));