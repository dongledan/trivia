import React from 'react'
import data from '../../../src/tandem_trivia_data.json';

import Answers from './Answers'

export default function Question() {
  return (
    <div>
      {data.map((trivia, i) => (
        <div>
          {trivia.question}
          <ul>
            <Answers incorrect={trivia.incorrect} correct={trivia.correct} />
          </ul>
        </div>
      ))}
    </div>
  )
}
