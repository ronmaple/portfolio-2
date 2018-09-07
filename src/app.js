import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';
import Home from './pages/Home';
import Header from './components/Header';

// import dp from '../images/dp.jpg';

console.log('react App loads');

// Animation helpers
import ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();

class App extends React.Component {
    // event handler for scrolling; specifically for Navbar color transition
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }

    render() {
        // let nav = document.querySelector('nav');
        let className = 'nav';
        if (this.state.scrolling) {
            className += ' scroll';
        }
        return (
            <div>
                <Header addClass={className}/>
                <Home />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));