import React from 'react';

import Trivia from '../src/components/Trivia';
import InitialScreen from '../src/components/InitialScreen';

function App() {
  const [isPlayingTrivia, setPlayingTrivia] = React.useState(false);

  return (
    <div>
      {isPlayingTrivia ?
      <Trivia setPlayingTrivia={setPlayingTrivia} /> :
      <InitialScreen setPlayingTrivia={setPlayingTrivia} />
    }
    </div>
  );
}

export default App;
