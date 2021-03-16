import React, { useRef, useEffect } from "react";
import { ReactComponent as SubmitButton } from "./submit-button.svg";
const Input = React.forwardRef(({ handleSubmit, value }, inputRef) => {
  let compare;
  const defaultValue = useRef();
  if (defaultValue.current) {
    compare = defaultValue.current.innerHTML;
  }
  useEffect(() => {
    if (value !== defaultValue.current.innerHTML) {
      defaultValue.current.innerHTML = value;
    }
  }, [compare]);
  const handleInput = () => {};
  return (
    <div ref={inputRef} className="input-container">
      <div
        ref={defaultValue}
        contentEditable
        data-contents="true"
        role="textbox"
        data-text="true"
        name="text"
        dangerouslySetInnerHTML={{ __html: value }}
        onKeyDown={(e) => handleSubmit(e, defaultValue)}
        className="input-box"
        onInput={handleInput}
        type="text"
      ></div>
      <SubmitButton
        className={"submit-button"}
        onClick={(e) => handleSubmit(e, defaultValue)}
      />
    </div>
  );
});
export default Input;
