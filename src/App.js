
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes><Route path="/" element={<Home />}>
      </Route></Routes>
    <Routes><Route path="/home" element={<Home />}>
      </Route></Routes>
  </BrowserRouter>
  );
}

export default App;
