import React, { Component } from 'react'

export default class Answers extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    this.shuffle(this.props.incorrect, this.props.correct)
  }

  shuffle(incorrect, correct) {
    const answers = [correct, ...incorrect];
    let currentIndex = answers.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue;
    }
    this.setState({answers});
  }
  
  render() {
    const {answers} = this.state;
    return (
      <div>
        {answers.map((answer,i) => (
          <ul key={answer}>
            <li>{answer}</li>
          </ul>
        ))}
      </div>
    )
  }
}

