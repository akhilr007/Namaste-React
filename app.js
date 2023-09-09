import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const middle = <h1>middle react element</h1>;

const Title = () => (
  <div>
    <h1>Title Component</h1>
  </div>
);

const Head = () => (
  <div>
    <Title />
    {Title()}
    {middle}
    <h1>Head Component</h1>
  </div>
);

root.render(<Head />);
