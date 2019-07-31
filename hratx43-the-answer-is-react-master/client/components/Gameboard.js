import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Clue from './Clue';


const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      <div>
        {props.currentQuestion.question ? 
        
        <div>{props.currentQuestion.question}
          <Clue
            selected={true}
            selectQuestion={props.selectQuestion}
            answered={false}
            clueObject={props.currentQuestion}
          />
        </div> : 
        
        <div>
          <Categories
            categories = {props.categories}
            handleClueOnClick = {props.handleClueOnClick}
            retrieveClues = {props.retrieveClues}
            currentQuestion = {props.currentQuestion}
            answeredQuestions = {props.answeredQuestions}
          />
        </div>
        }
      </div>

      {/* was a question clicked?  */}
      {/* {state = false} */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  );
};


Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;

