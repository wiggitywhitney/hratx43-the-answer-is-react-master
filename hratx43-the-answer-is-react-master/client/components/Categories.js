import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';


const Categories = props => {
  //console.log(props.categories)
  return (
    <div id={'categories'} data-testid="categoryList">
        {props.categories.map(category => 
          <Category
            category = {category}
            handleClueOnClick = {props.handleClueOnClick}
            retrieveClues = {props.retrieveClues}
          />
        )}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
