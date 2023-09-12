import React from "react";
import ReactDOM from "react-dom/client";

// React functional Component - function that is returning some jsx  / react elements

const Title = () => {
  return <h1 className="heading">Namaste React using JSX 🚀</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
