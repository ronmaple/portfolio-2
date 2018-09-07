import React, { Component } from 'react'

import './styles/Header.scss';

export default class Header extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
        <div>
    {/* // <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}> */}
        <nav className={this.props.addClass} id="menu">
            <div className="wrap">
                <div className="brand">
                    <span>Lorem ipsum</span>
                </div>
            </div>

            <ul className="menu">
                <li><a href="portfolio">Portfolio</a></li>
                <li>Work</li>
                <li>Volunteer</li>
                <li>Contact</li>
            </ul>
        </nav>
      </div>
    )
  }
}
