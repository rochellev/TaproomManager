# Bugs and Solutions
##### A log of bugs I encountered and (hopefully) the solutions
---
<br/>

#### `can add empty kegs`

#### `click on employee and weird things happen`

#### `7:24  error  'name' is missing in props validation            react/prop-types`

* had "prototype" instead of the correct propTypes
* I think this caused the props not to be saved correctly
```javascript
KegList.propTypes = {
  kegList: PropTypes.array
};
```

<br/>


#### `Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `KegList`. See https://fb.me/react-warning-keys for more information.`

* added a key property, which is a UUID
* solved

<br/>

#### `Pints Remaining value not displayed in list of kegs`

* typo, had "printsRemaining", oops
* wasn't adding the tag correctly so keg didnt get the pints value

