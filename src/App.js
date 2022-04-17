
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import PractricArea from './Pages/PractricArea/PractricArea';
import Blog from './Pages/Blog/Blog';



function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/practricarea' element={<PractricArea></PractricArea>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
