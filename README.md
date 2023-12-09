

## Features in this projects...

### 1. Use Tailwind css design in this projects and makes responsive to it by tailwind.

### 2. This projects also used REST API,REST APIs employ HTTP requests to communicate with databases such creating, reading, updating, and deleting entries it also known as CRUD.

### 3. Calculation to all selected courses are there credit total, remaining hours, and added course name etc.


## How  managed the state in this assignment project?

 This assignment has been done on these 4 useStates also with a useEffect.Out of which 3 are used in app.jsx and rest are used to fetch data in courses.jsx . Out of the remaining 3 states are there 1 is used for SelectCart, 2nd for Totalcast and the remaining 1 is used for Remaining calculations.

Now i described how to manage it in this projects-

1st state- use for fetch data, it declares useState with two parameters and the use useEffect to load data in API.

2nd-state - when need show card data to dynamically i used a state with 2 parameters , it also connected to a button.

3rd & 4th state- when sum to total hour i use a state of this,
and make remaining to limited hours i uses the last state to it.

all of the state i declared, managed to set two meaningful parameters and set a default value like array, object, number etc. Then i shifted these parameters to the right places, and if needed set send as props, and then checked to them the console.log.

This is simple speach to how i managed my state in this project. If any wrong this please forgive me.


## Live site link: 
https://undesirable-frogs.surge.sh/





