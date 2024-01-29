import './App.css'
import { BrowserRouter as  Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route index element={<div>home</div>} />
          <Route path="about" element={<div>lists</div>} />
        </Routes>
      </div>

  );
}

