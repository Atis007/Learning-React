import { useActionState, use } from "react";

import { OpinionsContext } from "../store/opinions-context.jsx";
import Submit from "./Submit.jsx";

import { isNotEmpty, hasMinLength, hasMaxLength } from "../util/validation.js";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function validateOpinionForm(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if (!isNotEmpty(userName)) {
      errors.push("Without your name, how should we know who you are?");
    }

    if (!isNotEmpty(title)) {
      errors.push("Give a good title to your opinion.");
    }

    if (!hasMinLength(title, 5)) {
      errors.push("The title should be at least 5 characters long.");
    }

    if (!isNotEmpty(body)) {
      errors.push("Without your opinion, we can't share it.");
    }

    if (!hasMinLength(body, 10) || !hasMaxLength(body, 300)) {
      errors.push("Opinion must be between 10 and 300 characters long.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    await addOpinion({ userName, title, body });
    return { errors: null };
  }

  // pending will be true until the addOpinion promise is resolved, React will wait for that,
  // but there is another approach, with another hook
  // this hook meant to be used in conjunction with formActions
  const [formState, formAction /*, pending*/] = useActionState(
    validateOpinionForm,
    {
      errors: null,
    }
  );

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((errorMessage) => (
              <li key={errorMessage}>{errorMessage}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
