import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  // useQuery can send POST requests, but useMutation is better suited for that purpose
  // it is optimized for such data changing queries, simply by making sure that those requests are not sent instantly
  // when this component is renders, but instead only sends requests when we explicitly tell it to do so
  const { mutate, isPending, isError, error } = useMutation({
    // mutationKey <-- this is optional, because the idea with mutations tpically is not to cache their response data,
    // because they are primarily about changing something on the backend, not about getting and storing data in the frontend
    mutationFn: createNewEvent,
    // we stay on the screen until the mutation is successful, then we navigate away, so if there is an error, the user can see it
    onSuccess: () => {
      // tells tanstack query that the data associated with this queryKey is now outdated
      // so it will re-fetch the data the next time some component requests itf
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Ffailed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again."
          }
        />
      )}
    </Modal>
  );
}
