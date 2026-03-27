// Handling Multiple Input Fields with useState, managing all form values in a single state object
// every keystroke validation -> stateful approach needed

// Note: best practice would be a keystroke and submitted form validation combined approach (keystroke for better UX, submitted form for final check)
// keystroke approach -> this file, submitted form approach -> Login.jsx
// OR validating the input via built-in validation props, showed in Signup.jsx
// all three approaches (keystroke, submitted form, built-in) together would be the best practice
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 8));

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default browser behavior (to generate and send an http request)

    if( emailHasError || passwordHasError ) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError && "Please enter a valid email."}
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label="Password"
          id="password"
          error={passwordHasError && "Please enter a valid password."}
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// not that good approach for larger forms
/* 
   const [enteredEmail, setEnteredEmail] = useState("");
   const [enteredPassword, setEnteredPassword] = useState("");

   function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }
    */

// COMMENTED OUT BECAUSE WE ARE USING A CUSTOM HOOK NOW, BUT KEEPING IT HERE FOR LEARNING PURPOSES

// this would be a better approach, because we can manage all form values in a single state object,
// instead of having separate state variables for each input field
// And even shortens the handler functions, because we can use a single handler function to update the state object
/*const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });*/
/* function handleInputChange(identifier, value) {
    // existing key values are preserved using the spread operator (...prevValues), and only the specific key being updated is changed ([identifier]: event.target.value)
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  } */

// cheking if email is invalid, with didEdit to avoid showing error message on initial render, only after user has interacted with the field
// if the user is edited the field, and the email does not include "@", then it's invalid
// if the user is clicked out of the field (blurred) without editing, we don't show the error message
// if the user is clicked into the field and then out without including "@", we show the error message
// this improves user experience by preventing premature error messages
/* const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 8) &&
    !isNotEmpty(enteredValues.password); */
