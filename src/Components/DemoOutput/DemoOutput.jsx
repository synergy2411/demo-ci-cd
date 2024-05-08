import { useState } from "react";

function DemoOutput() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>DemoOutput component loaded</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>Toggle is True</p>}
      {!toggle && <p>Toggle is False</p>}
    </>
  );
}

export default DemoOutput;
