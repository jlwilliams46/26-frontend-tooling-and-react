import '../styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';
  
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        content: 'Eat Mor Chikin!'
      };
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
      this.setState(prevState => ({content: faker.random.words()}))
    }

    render() {
      return (
        <div className="app">
          <h1>Generate Cowsay Lorem</h1>
          {console.log('how now brown cow')}
          <button>Click Search</button>
          <button onClick={this.handleClick}>Click For Cows</button>
          <pre>{say({text: this.state.content})}</pre>
        </div>
      )
    }
  }
  
  ReactDom.render(<App />, document.getElementById('root'))