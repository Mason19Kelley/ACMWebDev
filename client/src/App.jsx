import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  return (
        <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route
                    index
                    path="/"
                    element={<HomePage />}
                ></Route>
                <Route
                    exact
                    path="/about"
                    element={<div>about</div>}
                ></Route>
                <Route
                    exact
                    path="/contact"
                    element={<div>contact</div>}
                ></Route>
            </Routes>
        </div>
    </Router>
  );
}

