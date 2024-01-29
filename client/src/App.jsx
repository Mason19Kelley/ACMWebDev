import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";

export default function App() {
  return (
        <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<div>home</div>}
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

