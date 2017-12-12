import React, {Component} from 'react';
import {Button, Col, Row, Grid} from 'react-bootstrap';


import './Keypad.css';
import a1 from '../1-intro.mp4';
import a2  from '../2-background-aims.mp4';
import a3 from '../3-methods-results.mp4';
import a4 from '../4-conclusions-limitations.mp4';

var audioOne = new Audio(a1);
var audioTwo = new Audio(a2);
var audioThree = new Audio(a3);
var audioFour = new Audio(a4);
var audios = [ audioOne, audioTwo, audioThree, audioFour ]

class Keypad extends Component {

  constructor () {
     super()
     this.pressOne = this.pressOne.bind(this)
     this.pressTwo = this.pressTwo.bind(this)
     this.pressThree = this.pressThree.bind(this)
     this.pressFour = this.pressFour.bind(this)
     this.stop = this.stop.bind(this)
   }

  pressOne(){
    let self = this
    this.stop()
    audioOne.play()
    audioOne.addEventListener("ended", function(){
         audioOne.currentTime = 0;
         self.stop();
    })
    this.props.onButtonClick('Introduction')
  }

  pressTwo(){
    let self = this
    this.stop();
    audioTwo.play();
    audioTwo.addEventListener("ended", function(){
         audioTwo.currentTime = 0;
         self.stop();
    })
    this.props.onButtonClick('Background & aims')
  }

  pressThree(){
    let self = this
    this.stop();
    audioThree.play()
    audioThree.addEventListener("ended", function(){
         audioThree.currentTime = 0;
         self.stop();
    })
    this.props.onButtonClick('Methods & Results')
  }

  pressFour(){
    let self = this
    this.stop();
    audioFour.play()
    audioFour.addEventListener("ended", function(){
         audioFour.currentTime = 0;
         self.stop();
    })
    this.props.onButtonClick('Conclusions & limitations')
  }

  stop(){
    audios.map( audio => {
      audio.pause();
      audio.currentTime = 0;
    })
    this.props.onButtonClick('...')
  }

  render() {
    return (
      <div className="keypad">
        <Grid>
          <Row>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large" onClick={this.pressOne}  >
                1
              </Button>
            </Col>
            <Col xs={4} >
              <Button bsStyle="info" bsSize="large" onClick={this.pressTwo} >
                2
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large" onClick={this.pressThree} >
                3
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large" onClick={this.pressFour}>
                4
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                5
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                6
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                7
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                8
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                9
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Button bsStyle="success" bsSize="large" onClick={this.stop} >
                <i class="far fa-star"></i>
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                0
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="success" bsSize="large" onClick={this.stop} >
                <i class="fas fa-hashtag"></i>
              </Button>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Keypad;
