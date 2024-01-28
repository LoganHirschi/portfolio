import Sidenav from "./components/Sidenav";
import MainBody from "./components/MainBody";
import IconTabs from "./components/IconTabs";
import "./App.css";
import React from "react";

function App() {

  const [location, setLocation] = React.useState("aboutMe");

  const findPage = (page: string) => {
    console.log(page);
    setLocation(page);
  }

  return (
    <>
      <div className="app-wrapper">
        <Sidenav getPage={findPage} />
        <IconTabs />
        <MainBody page={location} />
      </div>
    </>
  );
}

export default App;
