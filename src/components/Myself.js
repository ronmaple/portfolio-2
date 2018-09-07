import React, { Component } from 'react'
import './styles/Myself.scss';

import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Jump from 'react-reveal/Jump';

export default class Myself extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return (
       <Slide left>
        <div className="main">

            <div className="main--headline">
                <div className="main--headline-title">
                    <h3>Lorem ipsum</h3>
                </div>

                <div className="main--headline--description">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                </div>

            </div>

            <Slide right>
                <div className="main--displaypic" data-aos="fade-in">
                    <img src="https://s3.us-east-2.amazonaws.com/ronmapue/dp.jpg" />
                </div>
            </Slide>

        </div>
      </Slide>
    )
  }
}
