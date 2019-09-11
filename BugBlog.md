# Bugs and Solutions
##### A log of bugs I encountered and (hopefully) the solutions
---


#### `7:24  error  'name' is missing in props validation            react/prop-types`

* typo
* had "prototype" instead of the correct propTypes
* I think this caused the props not to be saved correctly



#### `8:42  error  Missing "key" prop for element in iterator    react/jsx-key`

* added a unique id for kegs
* solved



#### `Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `KegList`. See https://fb.me/react-warning-keys for more information.`

* added a key property
* unique id from UUID v4 method
* solved


#### `Pints Remaining value not displayed in list of kegs`

* typo, had "printsRemaining"
* wasnt adding the tag correctly so keg didnt get the pints value