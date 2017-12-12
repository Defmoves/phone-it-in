import React, {Component} from 'react';

import './Speaker.css';

class Speaker extends Component {
  render() {
    return (
      <header className="Speaker">
        <div className='box'>
          <div className='dots' >
            {this.props.title}
          </div>
        </div>
      </header>
    );
  }
}

export default Speaker;
