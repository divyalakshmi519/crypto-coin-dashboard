import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ViewMore from "./components/ViewMore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view-more/:category" element={<ViewMore />} />
    </Routes>
  );
}

export default App;
