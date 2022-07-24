import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstNm,
    isValid: enteredFirstNmIsValid,
    hasError: firstNmInputHasError,
    valueChangeHandler: firstNmChangedHandler,
    inputBlurHandler: firstNmBlurHandler,
    reset: resetFirstNmInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastNm,
    isValid: enteredLastNmIsValid,
    hasError: lastNmInputHasError,
    valueChangeHandler: lastNmChangedHandler,
    inputBlurHandler: lastNmBlurHandler,
    reset: resetLastNmInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if (enteredFirstNmIsValid && enteredLastNmIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmtHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNmInput();
    resetLastNmInput();
    resetEmailInput();
  };

  const firstNmInputClasses = firstNmInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNmInputClasses = lastNmInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmtHandler}>
      <div className="control-group">
        <div className={firstNmInputClasses}>
          <label htmlFor="firstNm">First Name</label>
          <input
            type="text"
            id="firstNm"
            onChange={firstNmChangedHandler}
            onBlur={firstNmBlurHandler}
            value={enteredFirstNm}
          />
          {firstNmInputHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lastNmInputClasses}>
          <label htmlFor="lastNm">Last Name</label>
          <input
            type="text"
            id="lastNm"
            onChange={lastNmChangedHandler}
            onBlur={lastNmBlurHandler}
            value={enteredLastNm}
          />
          {lastNmInputHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
