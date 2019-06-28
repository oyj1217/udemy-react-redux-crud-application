import React, { Component } from 'react';

// class App extends Component
// {
//   render()
//   {
//     const greeting = "HI!Tom";
//     const dom = <h1 className="foo">{greeting}</h1>
//     return dom;
//   }
// }

const App = () =>
{
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () =>
{
  return <div>mei</div>
}

export default App;
