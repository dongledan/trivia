import React from 'react'

export default function Results(props) {
  const {score} = props;
  return (
    <div className="results-container">
      <div className="header">Results</div>
      <div className="score">{score} / 10</div>
      <div className="message">Congratulations on answering 10 questions. You are one step closer to being a Snapple bottle-cap fact machine.</div>
    </div>
  )
}
