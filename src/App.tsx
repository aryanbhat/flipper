import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./Page/Landing";
import Admin from "./Page/Admin";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-3xl  mx-auto">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
