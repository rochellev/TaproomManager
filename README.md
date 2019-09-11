# Taproom Manager
### Rochelle Roberts<br/>
---

<br/>

## Description

Taproom manager is a react app for tracking inventory.


## Installing Taproom

Clone repo on your machine and install dependencies.

```sh
$ git clone https://github.com/rochellev/TaproomManager.git
$ cd TaproomManager
$ npm install
```


## Running Taproom

### `npm start`

Runs the app in the development mode.<br>


## User Stories

#### `Patrons` and `Employees`
- A patron can see a list of tapped kegs so they can order.
- The list a patron can see includes each beer's name, brewer, alcoholic content,price, and pints left in keg.
- The lower priced items will be green so that patrons can quickly identify special deals.
- The number of pints left in a keg is updated so that both patrons and employees can keep track of the keg status.
- An employee is alerted when the number of pits left runs low so that they can better manage their taproom.
- An employee can add a new keg to the tapped kegs so that they can keep the list current.
- An employee can edit or delete existing kegs on the tapped kegs list so they can fully manage their taproom.


## Component Design

![component graph](src/assets/img/TaproomManager.jpg)


## Technologies Used

* React
* JavaScript (JSX)
* HTML
* CSS
* Bootstrap
* Webpack
* Babel
* ESLint


## Bugs
* Bugs and solutions found in `BugBlog` file


## In Progress
- create new keg
- tracking keg's pints
- button for pint decrement
- styling
- pre made component: https://www.learnhowtoprogram.com/react/managing-state/library-feature-premade-components

- https://github.com/epicodus-lessons/react-help-queue-example/blob/2_0h_lifting_state/src/components/NewTicketForm.jsx

