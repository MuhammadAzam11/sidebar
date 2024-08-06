import logo from './logo.svg';
import './App.css';
import LearnSideBar from './components/LearnSideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Analatics from './components/pages/Analatics';
import Comments from './components/pages/Comments';
import Product from './components/pages/Product';
import ProductList from './components/pages/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LearnSideBar>
        <Routes>
          <Route path='/' element={<About/>}></Route>
          <Route path='/analatics' element={<Analatics/>}></Route>
          <Route path='/comments' element={<Comments/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/productList' element={<ProductList/>}></Route>
        </Routes>
      </LearnSideBar>
      </BrowserRouter>
    </div>
  );
}
export default App;
