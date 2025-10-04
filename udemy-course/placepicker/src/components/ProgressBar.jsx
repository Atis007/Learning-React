import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    // setInterval -> defines a function that will be executed every couple of milliseconds
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10); // 10 ms

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);
  return (
    <>
      <progress value={remainingTime} max={timer} />
    </>
  );
}
