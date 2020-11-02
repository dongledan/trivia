import React from 'react'

export default function Results(props) {
  const {score} = props;
  return (
    <div className="results-container">
      <div className="header">Results</div>
      <div className="score">{score} / 10</div>
    </div>
  )
}
