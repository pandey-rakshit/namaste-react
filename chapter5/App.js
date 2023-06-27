import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading" }, "Hello World from React"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
