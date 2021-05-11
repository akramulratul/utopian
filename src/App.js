// import logo from './logo.svg';
// import './App.scss';
// import './styles/app.scss'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Dashboard from './components/Dashboard/Dashboard';
// import HomeMain from './components/Home/Home/HomeMain';
// import Home from './components/Home/Home/Home';
// import Login from './components/Authentication/Login'
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path='/' exact>
//           <Home />
//         </Route>
//         <Route path='/dashboard'>
//           <Dashboard />
//         </Route>
//         <Route path='/login'>
//           <Login />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import './App.scss';
import './styles/app.scss'
import React, { useEffect, useState } from 'react'
import HandleRouter from './components/Router/HandleRouter'
export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  console.log(loggedInUser.token);
  // const [token, setToken] = useState([])

  // useEffect(() => {
  //   localStorage.setItem('token', JSON.stringify(loggedInUser))
  //   // console.log(localStorage.setItem('tokens', JSON.stringify(loggedInUser)));
  //   // const data = localStorage.getItem('token')
  //   // console.log(data);

  //   // setLoggedInUser(JSON.parse(data))


  // })

  // useEffect(() => {
  //   const data = localStorage.getItem('token')
  //   if (data) {
  //     setLoggedInUser(JSON.parse(data))
  //   }
  //   console.log(data);
  //   console.log("test");
  //   console.log(loggedInUser);

  // }, [])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <HandleRouter />
    </UserContext.Provider>
  );
}

export default App;
