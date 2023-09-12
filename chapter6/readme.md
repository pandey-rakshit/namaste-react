# Chapter 6 - laying the foundation

> In [`chapter 5`](../chapter5/readme.md),
>
> We discuss integrity of the app and how we to ignite the app without using `npx create-react-app my-project` command

Lets discuss About JSX and Begin React Foundation

- JSX is not HTML inside Javascript however the syntax is similar to HTML or XML
- JSX is very different than react

```jsx
const jsxHeading = <h1 id="heading">Namaste Javascript 🚀</h1>;

// JSX (transpiled before it reaches the JS) - Parcel - uses Babel

//  JSX => React.createElement => ReactElement(object) => HTMLElement(render )
```

## React Component

- React functional component is just normal javascript function

- Component name must be start with capital letter to tell

```JSX
  // JSX uses className attribute instead of class attribute.

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component 🚀</h1>;
};


/*

To render component we use

<HeadingComponent /> OR
<HeadingComponent></HeadingComponent> OR
HeadingComponent();

are going to result same thing

*/
```

## Component Composition

when using a component inside another component or composing a component inside another component is call component composition

We can compose components and pass props from one component into another using `props`

```jsx
const Title = () => {
  return <h1>Namaste React using JSX</h1>;
};

// Component Composition
const HeadingComponent = () => {
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
```

## Cross-site scripting

```jsx
const data = api.getData();

const SomeWork = () => {
  <div id="container">{data}</div>;
};

// just suppose we are getting some data from api.getData and it send some malicious code which contain some script.

//  JSX sanitize all the script inside block {} and take care of script and attacks like injections attack, cross-site scripting
```

## React Fragments

JSX can only have single parent on the root.

```JSX

const HeadingComponent = () => {
  // single root element div with id = heading
  return (
    <div id="heading">
    </div>
  )
}

  /*

  suppose if we want two parent like

  <div className="container1"></div>
  <div className="container2"></div>

  so, either we can use

  empty tag (<></>) or
  react fragment (<React.Fragment></React.Fragment>)

  */

 const HeadingComponent2 = () => {
  return (
    <>
      <div className="container1"></div>
      <div className="container2"></div>
    </>
  )
}

// or

const HeadingComponent = () => {
  return (
    <React.Fragment>
        <div className="container1"></div>
        <div className="container2"></div>
    </React.Fragment>
  )
}

```

> In [`next chapter`](../chapter7/readme.md),
>
> Talk is cheap, show me the code
