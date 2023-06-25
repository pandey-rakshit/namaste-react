# Chapter 3 - React

In [`chapter 2`](../chapter2/readme.md),

we say how we create add element into html file using javascript.

Lets, Now see whats a react way of doing it.

first of all we will need to import react to use it,
let us search for [`react cdn`](https://legacy.reactjs.org/docs/cdn-links.html)

```js

// we got these two files (CDN) that need to be copied in our html to make use of react in out html file.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

```

Now let us create a html file and add react script tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste-react</title>
  </head>
  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>
</html>
```

Well this is a basic html file that include react or react is injected to the html file.

well if you are little more curious to know more about these CDN file

we can also explore them

[`react-cdn`](https://legacy.reactjs.org/docs/cdn-links.html)

react-cdn is a basically a file that allows us to use react into our code.

Note: This code is already hosted some where and we can access those code using the CDN links.

[`react-cdn-link`](https://unpkg.com/react@18/umd/react.development.js)

react-cdn-link is actually the core react file that is written by the facebook developers

[`react-dom-cdn-link`](https://unpkg.com/react-dom@18/umd/react-dom.development.js)

react-dom-cdn-link is again a javascript file that is used to manipulate react-dom or virtual dom use can access dom using this file.

## Hello World from React

```js
// Creating Heading
const heading = React.createElement("h1", {}, "Hello World from React!");

/*

  React comes with ample of methods to make things easy

  one of the react method is createElement which takes 3 argument
  1 - tag / element name thats need to be created
  2 - object (options)
  3 - content 

*/

// to add child in root first we need to tell react about root

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
  createRoot is a method of ReactDom that help react to tell react about root element where all the rendering stuff will take place.

*/

root.render(heading);

// render the heading inside root
```

> **Note:** In the [`next chapter`](../chapter4/readme.md),
>
> we will discuss about code refactoring and adding css.
