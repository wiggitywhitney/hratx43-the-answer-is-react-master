import React from 'react';
import PropTypes from 'prop-types';
import App from './App';

const Clue = props => {
  //console.log(props);
  return (
    <div className={'clueValue'}>
        {props.wasClicked ? 
        
        <div></div> : 
        
        <div>
          <button className={'btn'} onClick={() => props.handleClueOnClick(props.clue)}>
            ${props.clue.value}
          </button>
        </div>
        }
    </div>






  

    
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  )
  //return 'hi';
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
