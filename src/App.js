import React, { Component } from 'react';

class App extends Component
{
  render()
  {
    const greeting = "HI!Tom";
    const dom = <h1 className="foo">{greeting}</h1>
    return dom;
  }
}

export default App;
