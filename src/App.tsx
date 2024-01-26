import Sidenav from "./components/Sidenav";
import MainBody from "./components/MainBody";
import IconTabs from "./components/IconTabs";
import "./App.css";

function App() {

  return (
    <>
      <div className="main-wrapper">
        <Sidenav />
        <IconTabs />
        <MainBody />
      </div>
    </>
  );
}

export default App;
