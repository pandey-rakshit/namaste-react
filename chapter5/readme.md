# Chapter 5 - Ignite our app

In [`chapter 4`](../chapter4/readme.md),

we refactored our code and reason why its important.

Now in this lecture we will see integrity of the app and how we will ignite the app without using `npx create-react-app my-project` command

> **NOTE** using `npx create-react-app my-project` will create a `project` with `my-project` name which is already ignited means there is all the things are done or it is runnable.

> **NOTE** npm is a package manager but it does not stand for node package manager.

- There are two types of dependency

- devDependency - packages that are required in development process only.
- parcel is a package that is used to bundle our code so its a devDependency.

> **Note** `npm install --save-dev parcel` || `npm install -D parcel` both are same.

```json
// package.json

{
  "devDependencies": {
    "parcel": "^2.8.3"
  }
}

// Note: ^ is caret and ~ is tilde
// caret sign symbolize or tell npm to install latest version with minor updates
// tilde sign symbolize or tell npm to install latest version with major updates
```

## package-lock.json vs package.json

- `package.json` is a json file / configuration file for npm that keep track of dependency.
- `package-lock.json` is a file which contain all the data about that dependency or exact version its using and meta dependencies etc...

## node_modules

suppose there is a package we need in our project call `parcel` so as a project `parcel` will also have `dependencies` and these `dependencies` may also have there `dependencies` and so on..., this is called `transitive dependencies` and `node_modules` contain all these `dependencies`

- It has all the information about your project, dependencies etc...
- Its like an index page

> **NOTE** `npx` used for executing package
>
> for example,
>
> `npx parcel index.html`
>
> here `index.html` is the source and `parcel` is the package.

## Parcel

- Dev build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - faster Builds
- Image Optimizations
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- HTTPS
- Tree Shaking - remove unused code

> In [`next chapter`](../chapter6/readme.md),
>
> we will lay the foundation of React
