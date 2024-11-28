import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Example1 } from './pages/Example1';
import { ArrayMethods } from './pages/ArrayMethods';

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example1" element={<Example1 />} />
      <Route path='/arrayMethods' element={<ArrayMethods/>}/>
    </Routes>

  </Router>
  );
}

export default App;
