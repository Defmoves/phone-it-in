import React, {Component} from 'react';
import {Button, Col, Row, Grid} from 'react-bootstrap';


import './Keypad.css';
import one from '../1.mp4';

var audioOne = new Audio(one);
var audioTwo = new Audio(one);
var audioThree = new Audio(one);
var audioFour = new Audio(one);
var audioFive = new Audio(one);
var audios = [ audioOne, audioTwo, audioThree, audioFour, audioFive ]

class Keypad extends Component {

  pressOne(){
    audioOne.play();
  }

  pressTwo(){
    audioOne.pause();
  }

  stop(){
    audios.map( audio => {
      audio.pause();
      audio.currentTime = 0;
    })
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
              <Button bsStyle="info" bsSize="large" onClick={this.stop} >
                2
              </Button>
            </Col>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
                3
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Button bsStyle="info" bsSize="large">
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
