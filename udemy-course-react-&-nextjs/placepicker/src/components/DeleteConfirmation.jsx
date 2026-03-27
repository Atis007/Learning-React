import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000; // 3 seconds in milliseconds

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    // setTimeout -> sets a timer that expires after a given time period
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER); // Automatically confirm after 3 seconds

    return () => {
      // Cleanup if the component unmounts before the timeout
      clearTimeout(timer);
    };
  }, [onConfirm]);
  // when useEffect looking the onConfirm function, it might be reexecuted altough the function is still true or false, because the two functions are not the same in memory
  // functions are objects in JS, so two functions with the same code are still different objects in memory
  // but here, the component disappears when the modal is closed, so it's not a problem
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
