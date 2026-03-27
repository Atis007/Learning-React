import { useState, memo, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import CounterHistory from "./CounterHistory.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// NOW THAT THE COMPONENT IS MOVED FROM THE App.jsx TO ConfigureCounter.jsx, MEMO IS NOT NEEDED, BUT NOT GOING TO DELETE IT, BECAUSE ITS STILL USEFUL BECAUSE OF THE COMMENTS
// AND ITS MY NOTES AND CODE SO I DO ANYTHING I WANT WITH THEM :D

// memo is checking if the old prop value is the same as the new prop value
// if they are exactly the same (with object and arrays, they must be exactly the same in memory)
// then memo prevents the re-execution
// if the prop value is different, or if its internal state changed, then the function is executed again

// use memo as high up in the component tree as possible
// so that all child components are also skipped if the props did not change
const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  /* useEffect(() => {
    setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }]);
  }, [initialCount]); */

  //const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );
  // these funcitions are recreated every time this component executes (every time the counter state changes)
  // id does not matter that the code are the same and not change
  // the component function as a value, as an object, is recreated, and it will be a different object in the memory
  // so thehnically it is a new prop value that is passed to the IconButton child component
  // and thats why everything is re-rendered, although having a memo around the IconButton too
  // This is where useCallback comes in.

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
