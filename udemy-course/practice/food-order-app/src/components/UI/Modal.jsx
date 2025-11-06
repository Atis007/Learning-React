import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    // the cleanup function will run in the future, when the open prop changes
    // so theoretically, the ref value could changed in that time of waiting 
    // so it is RECOMMENDED to lock in the value the dialog ref has, 
    // so exatly the same value is used in both the effect and the cleanup function
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
