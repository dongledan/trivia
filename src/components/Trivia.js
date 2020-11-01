import React, { Component } from 'react'
import Questions from './Questions/index';

export default class Trivia extends Component {
  render() {
    return (
      <div>
        <h1>Here are the questions</h1>
        <Questions />
      </div>
    )
  }
}
