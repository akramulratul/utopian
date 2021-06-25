import "./App.scss";
import "./styles/app.scss";
import React from "react";
import HandleRouter from "./components/Router/HandleRouter";
export const UserContext = React.createContext();

function App() {
  return (
    <>
      <HandleRouter />
    </>
  );
}

export default App;
