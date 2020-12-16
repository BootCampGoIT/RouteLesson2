import React, { useState } from "react";

const initialUser = {
    name: "",
    age: "",
    status: ""
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({...initialUser})

  const getResult = () => {
    setIsLoading((prev) => !prev);
    setUsers((prev) => [...prev, { name: "Alex" }]);
  };

  return (
    <>
      {console.log(users)}
      {isLoading && <h2>Hello</h2>}
      {!isLoading && <h2>By</h2>}
      <button onClick={getResult}>SetNew</button>
    </>
  );
};

export default Home;

// import React, { Component } from 'react'

// class Home extends Component {
//     state = { isLoading: true }

//     render() {
//         return (
//             <>
//             {this.state.isLoading && <h2>App</h2>}
//             </>

//         );
//     }
// }

// export default Home;
