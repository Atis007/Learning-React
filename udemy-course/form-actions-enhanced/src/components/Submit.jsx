// useFormStatus can't be used in the component that contains the form and the formAction,
// It must be used in some nested component, this (Submit.jsx) is that nested component
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submiting..." : "Submit"}
      </button>
    </p>
  );
}
