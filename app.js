const heading = React.createElement("h1", {}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ])
);

// create element take three parameters
// 1. tag,
// 2. attributes
// 3. children if for multiple children pass it in an array
root.render(parent);
