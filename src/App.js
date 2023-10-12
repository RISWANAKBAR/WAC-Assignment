import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
