# iTrellis Trip Calculator

### Instructions
- Fork/Clone
- install dependencies using npm install
- npm start to display locally

## About 
For this project, I decided to make a single-page-app for the Trip Calculator using the ReactJS platform with Javascript as the base language. I enjoy using React for SPA so I thought it was a natural fit for this app that really doesn't need to be too bloated to achieve its purpose. React lays everything out easily and makes it really simple to organize the contents of your app by creating a component for each main aspect and then arranging them appropriately. I decided to arrange the App as a Parent Component (simply App.js) that has 4 children components (UserOne.js, UserTwo.js, UserThree.js, and Tally.js).

The downside of React is that it inherently only moves one way, from Parent to Child, so a little bit of work is needed to get data to flow in the reverse direction. I had to make data flow back up to the App component from the User components so that data could then be calculated and then displayed back down on the Tally component.

To start, I began by making a basic wireframe, labelling my Components and how I wanted to arrange them. From there I created them and gave them all lorem impsum info for the sake of organizing the page before I gave everything real values. I began by creating one of the user components. Creating a form is easy in react, the hard part is saving the data into states that can then be passed along. I decided to give each user component a "submit button" that would set states and also pass them upwards to the parent component. There are other ways to pass these states and props around on forms in React, but I prefer buttons otherwise you are sometimes constantly updating state, which is unnecessary and can look ugly sometimes. 
After sending all of the data back up to the parent component, I needed to formulate it and do calculations before sending those props to the Tally component. The hardest part of the application was getting javascript to do math. It accepts states and props as string, so a lot of work is done to make sure that user values are always viewed as floating numbers with two decimal places. Otherwise, when you tell it to add two states i.e. this.state.paidOne + this.state.paidTwo, if those states are say "20" + "40" it adds the strings together for a value of "2040" which is not what we want obviously. Its also important that you specify numbers instead of string when comparing who owes whom since when strings are compared, the first value is ordered first (i.e "32" > "100").
I decided to do conditional formatting for the Tally component based on the data calculated in the parent App component. Its a little bloated, but I figured it looks better to only display the users that owe money and how much they owe instead of always having the one User who is essentially a blank in the table.

To give the page a little bit of responsiveness and style, I used [react-materialize] (https://react-materialize.github.io/#/). Not only does is break the app into a grid view that is easier to arrange, but I also prefer the way Materialize sets up forms, which I knew I would be using for this project. Even though I know that the styling of this page isn't that important, I like the feel and design of the input fields for Materialize over the basic form fields.

### Technologies Used
* ReactJS
* Javascript
* React-Materialize
* Google Fonts - Oswald

### Additional Work
If I were to work on this more, I would definitely make it more robust, mainly adding as many people as the user wants and as many expenses as they would like as well. I know thats feasible, I just figured if I was going to do this project in 4-10 hours, keeping the math simple was my best route. After that, I would like to add more style. Its obviously passable, but not beautiful. CSS is something I can spend hours on if given the time, but figured it wasn't the most critical thing I could be doing with my time.