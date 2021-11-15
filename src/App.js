import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" exact element={<AddUser />} />
          <Route path="/edit/:id" exact element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
