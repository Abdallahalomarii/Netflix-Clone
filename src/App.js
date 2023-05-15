import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
   
  <Routes>
    <Route path='/' element={<Home />}></Route>
  </Routes>
  
  )
  
}

export default App;
