import React from 'react';



const App = () =>
{
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 20 },
    { name: "Noname"},
  ]

  return (
    <React.Fragment>
      {profiles.map((profile,index) =>
      {
        return <User name={profile.name} age={profile.age} key={index}/>
      }
      )}
    </React.Fragment>
  )
}

const User = (props) =>
{
  return <div>HI,i am {props.name} and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
