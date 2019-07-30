import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';


const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      <div>
          <Categories
            categories = {props.categories}
            handleClueOnClick = {props.handleClueOnClick}
            retrieveClues = {props.retrieveClues}
          />
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

