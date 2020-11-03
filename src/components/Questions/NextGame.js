import React from 'react'

export default function NextGame(props) {
  const {setPlayingTrivia} = props;
  return (
  <div style={{marginTop: '100px', marginBottom: '20px', width: '95%', textAlign: 'right'}}>
    <button className='button' style={{background: '#ddd', opacity: '0.7'}} onClick={() => setPlayingTrivia(false)}>Exit</button>
  </div>
  )
}
