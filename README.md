# iTrellis Trip Calculator

### Instructions
- Fork/Clone
- install dependencies using npm install
- npm start to display locally

## About 
For this project, I decided to make a single-page-app for the Trip Calculator using the ReactJS platform with Javascript as the base language. I enjoy using React for SPA so I thought it was a natural fit for this app that really doesn't need to be too bloated to achieve its purpose. React lays everything out easily and makes it really simple to organize the contents of your app by creating a component for each main aspect and then arranging them appropriately. I decided to arrange the App as a Parent Component (simply App.js) that has 4 children components (UserOne.js, UserTwo.js, UserThree.js, and Tally.js).

The downside of React is that it inherently only moves one way, from Parent to Child, so a little bit of work is needed to get data to flow in the reverse direction. I had to make data flow back up to the App component from the User components so that data could then be calculated and then displayed back down on the Tally component.

To give the page a little bit of responsiveness and style, I used [react-materialize] (https://react-materialize.github.io/#/). Not only does is break the app into a grid view that is easier to arrange, but I also prefer the way Materialize sets up forms, which I knew I would be using for this project. Even though I know that the styling of this page isn't that important, I like the feel and design of the input fields for Materialize over the basic form fields.

The hardest part of the application was getting javascript to do math. It accepts states and props as string, so a lot of work is done to make sure that user values are always viewed as floating numbers with two decimal places. Otherwise, when you tell it to add two states i.e. this.state.paidOne + this.state.paidTwo, if those states are say "20" + "40" it adds the strings together for a value of "2040" which is not what we want obviously. Its also important that you specify numbers instead of string when comparing who owes whom since when strings are compared, the first value is ordered first (i.e "32" > "100").


### Technologies Used
* ReactJS
* Javascript
* React-Materialize
* Google Fonts - Oswald