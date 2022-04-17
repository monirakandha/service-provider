
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import PractricAreaTotal from './Pages/PractricAreaTotal/PractricAreaTotal';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';



function App() {

  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="/practricareatotal" element={<PractricAreaTotal></PractricAreaTotal>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={<RequireAuth> <CheckOut></CheckOut></RequireAuth>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
