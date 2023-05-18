import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/Navbar';
import Favorite from './component/favortie/FavList';



function App() {
  return(
   <>
   <NavBar />
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/favlist' element={<Favorite />}></Route>

  </Routes>
  </>
  )
  
}

export default App;
