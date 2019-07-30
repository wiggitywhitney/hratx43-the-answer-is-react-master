import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';


const Category = props => {
  //console.log(props.category.clues)
  return (


    <div className={'category'} data-testid="category">
      {<div className={"categoryTitle"}>{props.category.title}</div>}
      {props.category.clues.map(clue => 
          <Clue
              clue = {clue}
              wasClicked = {false}
              handleClueOnClick = {props.handleClueOnClick}
              retrieveClues = {props.retrieveClues}
          />
      )}
    </div>
      
      /* display clues for each category */
  )
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
