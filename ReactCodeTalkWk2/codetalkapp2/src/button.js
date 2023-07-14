import React from 'react';

const button = (props) => {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  )
}

export default button;

// Props are used to store data that can be accessed by the children of a React component
// The data stored in the props can be reused multiple times
// In this code the data stored in the props.title value is "add to cart" and "find out more"
// Because we made a button component we are able to reuse it as much as we want in our parent component, app
// How do props work: props are used to store data that can be accessed by the children of a react component 
// Go to app.js for more comments....