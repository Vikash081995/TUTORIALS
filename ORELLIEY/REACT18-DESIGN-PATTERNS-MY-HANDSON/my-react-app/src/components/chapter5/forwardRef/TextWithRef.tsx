import { forwardRef } from "react";

const TextInputWithRef = forwardRef<HTMLInputElement, object>((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

export default TextInputWithRef;
