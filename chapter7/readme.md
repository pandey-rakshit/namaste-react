# chapter 7 - Talk is cheap, show me the code.

> In [`chapter 6`](../chapter6/readme.md),
>
> We discuss About JSX and Begin React Foundation

## Planning is the key

- Before start coding, create a plan.

- Plan the application or project you want to create.

- Draw a basic layout about how the things will look like.

- This helps in planning and organizing your work better than just writing down everything on paper without any structure

- Divide your work into small tasks and assign them to different people in order for everyone involved understand

# functional component

```jsx
const card = () => {
  return <div>Card</div>;
};

// card is a functional component that is a normal javascript function at the end of the day

//  props are normal arguments to a function

// passing props to a component is similar to passing a argument to a function
```

## Config driven UI

- UI that is driven by the config (data) sent by backend though API.

## Keys in reoccurring order

- warring is shown if not using key (not acceptable)
- generally we don't use index as a key as its not recommended by react - reasons are follow

  - when data changes, the index of items can change too.
    which may leads to change order of the items and React will think the component has been modified, when in fact, they have just been rearranged. This will lead to unnecessary render.
    So React needs to recreate all elements again and this causes performance issues for large lists

  - Keys should be unique within the list. using the index as the key can cause issues if you data contains duplicate values.
    React relies on keys to maintain component state correctly, and using non-unique keys can lead to unpredictable behavior.

> `Solution`: Use unique ID's instead of indexes
