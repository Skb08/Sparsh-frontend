import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          {/* <Link to={'/landing'}><LandingPage /></Link>    */}
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>   

  );
}

export default App;
