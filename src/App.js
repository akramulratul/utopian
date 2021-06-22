
import './App.scss';
import './styles/app.scss'
import React, { useEffect, useState } from 'react'
import HandleRouter from './components/Router/HandleRouter'
export const UserContext = React.createContext();

function App() {

  return (
    <>
      <HandleRouter />
    </>
  );
}

export default App;
