import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  </Router>
  );
}

export default App;
