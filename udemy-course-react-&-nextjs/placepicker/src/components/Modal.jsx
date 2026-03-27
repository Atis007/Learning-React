import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  // Using useEffect to bridge React's declarative 'open' prop with the imperative showModal()/close() DOM API.
  // Declarative (React): Describe the desired UI. Imperative (DOM API): Give step-by-step commands.

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); // Re-run the effect whenever 'open' changes

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
