import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/HomePage/Home/Home';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import SingleItem from './pages/PurchasePage/SingleItem/SingleItem';
import RequireAuth from './pages/SignInPage/RequireAuth/RequireAuth';
import SignIn from './pages/SignInPage/SignIn/SignIn';
import SignUp from './pages/SignUpPage/SignUp/SignUp';
import Header from './shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/parts/:id' element={
          <RequireAuth>
            <SingleItem />
          </RequireAuth>
        }></Route>

        <Route path='/my-portfolio' element={<MyPortfolio />}></Route>

        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>

      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
