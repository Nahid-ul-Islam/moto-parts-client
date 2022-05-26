import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './pages/BlogsPage/Blogs';
import AddProduct from './pages/DashboardPage/AddProduct/AddProduct';
import AddReview from './pages/DashboardPage/AddReview/AddReview';
import Dashboard from './pages/DashboardPage/Dashboard/Dashboard';
import MyOrders from './pages/DashboardPage/Dashboard/MyOrders/MyOrders';
import ManageOrder from './pages/DashboardPage/ManageOrder/ManageOrder';
import ManageProduct from './pages/DashboardPage/ManageProduct/ManageProduct';
import MyProfile from './pages/DashboardPage/MyProfile/MyProfile';
import Users from './pages/DashboardPage/Users/Users';
import Home from './pages/HomePage/Home/Home';
import MyPortfolio from './pages/MyPortfolioPage/MyPortfolio';
import NotFound from './pages/NotFoundPage/NotFound';
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
        
        {/* nested routes start */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>

        <Route index element={<MyProfile/>}></Route>
        <Route path='my-profile' element={<MyProfile/>}></Route>
        <Route path='add-review' element={<AddReview/>}></Route>
        <Route path='my-orders' element={<MyOrders/>}></Route>

        <Route path='manage-order' element={<ManageOrder/>}></Route>
        <Route path='manage-product' element={<ManageProduct/>}></Route>
        <Route path='add-product' element={<AddProduct/>}></Route>
        <Route path='users' element={<Users/>}></Route>

        </Route>
        {/* nested routes end */}

        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
