# Chapter 3 - React

In chapter 2,

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

react-dom-cdn-link is again a javascript file that is used to manupulate react-dom or virtual dom use can access dom using this file.
