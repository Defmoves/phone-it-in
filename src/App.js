import React, {Component} from 'react';
import Dialog from 'react-bootstrap-dialog'

import Speaker from './components/Speaker'
import Keypad from './components/Keypad'
import Mic from './components/Mic'
import './App.css';

class App extends Component {

  constructor () {
     super()
     this.onClick = this.onClick.bind(this)
   }

   onClick () {
     this.dialog.showAlert('Hello Dialog!')
   }

   componentDidMount(){
     this.dialog.show({
       title: 'Telephone CBT for adolescents with OCD',
       body: <span><p>You can stop the audio at any time by pressing <i class="far fa-star"></i> or <i class="fas fa-hashtag"></i>.</p> <p>Press 1 to begin, OK?</p></span>,
       actions: [
         Dialog.OKAction()
       ],
       bsSize: 'large',
       onHide: (dialog) => {
         dialog.hide()
         console.log('closed by clicking background.')
       }
     })
   }

  render() {
    return (
      <div className="App">
        <Dialog
          title='Project title'
          ref={(el) => { this.dialog = el }}
        />
        <Speaker />
        <Keypad />
        <Mic />
      </div>
    );
  }
}

export default App;
