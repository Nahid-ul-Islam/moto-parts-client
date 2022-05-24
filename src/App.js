import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/HomePage/Home/Home';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import SingleItem from './pages/PurchasePage/SingleItem/SingleItem';
import Header from './shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/parts/:id' element={<SingleItem></SingleItem>}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
