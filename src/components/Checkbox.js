/** @format */

import React, { useState } from "react";

const Checkbox = (props) => {
  const { id, value, onChange, name } = props;

  return (
    <>
      <label>
        <input
          id={id}
          type='checkbox'
          onChange={onChange}
          name={name}
          value={value}
        />
        {name}
      </label>
    </>
  );
};

export default Checkbox;
