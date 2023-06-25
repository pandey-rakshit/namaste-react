# Chapter 4 - Code Refactoring

In [`chapter 3`](../chapter3/readme.md),

We see whats a react way printing Hello world.

Now before moving forward let us do come code refactoring and reason why its important

- To follow the best practice we must use separate javascript file for all dom manipulation.

- Also if we don't use separate js file then with time or when project grows the file will be quite tedious and will not look good and quite difficult to understand as well even worse when debugging.

```js
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/*

- lets put this code in separate file called App.js


- also let us discuss about second argument of React.createElement(a, b, c)

where 
a - tag / element
c - content of the tag

and 

b - options or {} object that holds the attributes of the element

*/
```

```js
// For example

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

// this will create a h1 tag element that have id - heading and content Hello World

console.log(heading); // Object
```

```html
<!-- the above example is equivalent to the below html -->

<h1 id="heading">Hello World</h1>
```
