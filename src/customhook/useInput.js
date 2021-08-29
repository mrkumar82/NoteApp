import React, { useState } from "react";

const useInput = (inititalValue = "") => {
  const [value, setValue] = useState(inititalValue);

  const reset = () => {
    setValue(inititalValue);
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };

  return [value, bind, reset];
};

export default useInput;
