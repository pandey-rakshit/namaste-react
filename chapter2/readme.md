# Chapter 2 | Hello World using javascript

In `chapter 1`,

we saw the basic heading inside div using plan HTML

---

## Lets do it with javascript.

> **NOTE**: we are going to create a `Heading  - h1` inside `div` using `javascript`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World from Javascript";
      const root = document.getElementById("root");
      root.appendChild(heading);
    </script>
  </body>
</html>
```

**Note:** In the next chapter, we will discuss about how we can achieve this using react.
