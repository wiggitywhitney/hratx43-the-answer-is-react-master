import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }

  submitResponse(event) {
    
    if(event.key === 'Enter') {
      event.preventDefault();

      this.recordResponse(event.target.value);

      //console.log(userAnswer);
    }

    // this function should fire when the user fills the response and hits 'enter'
    //this.recordResponse()
      // Is the user response correct? 
      // yes/no? What should happen?
    
  }

  render(){
    return (
      <div id={'response'} data-testid="response">
        <input
          className='responseText'
          type='text'
          placeholder='Answers go here!'
          // handle data change
          onChange={this.recordResponse}
          // handle when 'enter' is hit
          onKeyPress={this.submitResponse.bind(this)}
          
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}