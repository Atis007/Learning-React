import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    // only send an http request if the data in the cache is older than 10 seconds, so if the user opens the edit form within 10 seconds after opening the event details, no new request is sent
    // so no need to refetch the data if it is still fresh, and this improves performance
    staleTime: 10000 // 10 seconds
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   // onMutate will execute right when we call mutate, before the mutationFn runs. So before the process is done. Before getting back a response
  //   // optimistic update here means we assume the update will be successful, and we immediately update the cache with the new data.
  //   // After the user updates the page and the update in the backend is successful, the cache is already updated, so no need to refetch.
  //   // If the update fails, the changes will be rolled back
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     // cancel any outgoing refetches (so they don't overwrite our optimistic update). ONLY CANCEL queries that is triggered with useQuery with the same key
  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });

  //     // snapshot the previous value, so we can roll back to this if the mutation fails
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);

  //     // first arg: key of the query we want to update, need the same key as in useQuery, second arg: the new data the user wants to set
  //     queryClient.setQueryData(["events", params.id], newEvent);

  //     return { previousEvent: previousEvent };
  //   },
  //   // only be executed if the update mutation fails, then we roll back to the previous value
  //   // the context can contain the value of the previous event we returned in onMutate
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },
  //   // Called when the mutations is done. No matter if it failed or succeeded.
  //   // Makes sure the frontend and backend are in sync, and tha latest data is shown
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", params.id]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    // navigate("../");
    // using submit now, insted of mutate and navigate to take advantage of the action function below, so mutate and navigate are not needed here anymore, but kept for reference
    // if want to keep the optimistic update, we need to write our own logic here
    submit(formData, { method: "PATCH" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="failed to load event"
          message={
            error.info?.message ||
            "Failed to load event data. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEvent = Object.fromEntries(formData); // transforms the formData object into a simple key value pair object in JS

  await updateEvent({ id: params.id, event: updatedEvent });

  // with this approach, the optimistic update will not work. If we want it to work again, we need to write our own logic in the submit handler above
  await queryClient.invalidateQueries({ queryKey: ["events", params.id] });

  return redirect("../");
}
