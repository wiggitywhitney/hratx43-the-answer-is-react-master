import React, { Component } from 'react';
import { categories } from '../../testdata';
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import Response from "./Response";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        {<Gameboard categories={this.state.results} currentQuestion={this.state.currentQuestion} answeredQuestions={this.state.answeredQuestions}/>}
        {<Scoreboard props={this.state.score}/>}
        {<Response />}
      </div>
    );
  }
}
