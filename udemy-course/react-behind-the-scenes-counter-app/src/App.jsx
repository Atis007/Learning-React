import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  // all this code gets executed step by step 

  // MOVED TO ConfigureCounter.jsx, BUT NOT GOING TO DELETE IT, BECAUSE ITS STILL USEFUL BECAUSE OF THE COMMENTS

  // in this code file, two pieces of state are registered
  //const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  // then these two function are get craeted, not executed yet
  /*function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }*/

  /*function handleSetClick() {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  }*/

    function handleSetCount(newCount){
      setChosenCount(newCount);
    }

  return (
      // then this jsx code gets executed, so it can be returned by this component
      // every component function MUST return something, tha CAN BE rendered (JSX or sometimes a Portal)
      // the jsx code then translated to js and translated to actual elements that can be rendered on the screen
    <>
      {/* top to bottom executing */}
      {/* if a custom component is encountered, React will reach out to that component
          and executes the function before everything else */}
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
