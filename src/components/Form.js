import React from 'react';
import '../style.css';

function Form() {
  return (
    <form>
      <label className="red">
        Enter your name:
        <input type="text" />
      </label>
      <br /> <br />
      <label>
        Enter your email:
        <input type="text" />
      </label>
    </form>
  );
}

export default Form;
