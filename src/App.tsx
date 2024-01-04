import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="MainContainer"
        style={{
          background: "grey",
          height: "100vh",
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
