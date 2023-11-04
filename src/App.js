
import './App.css';
import Shop from './Pages/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import  mens_banner from './Components/Assets/banner_mens.png'
import  womens_banner from './Components/Assets/banner_women.png'
import Collections from './Components/Collections/Collections';
import Login from './Pages/Login';
import Dashbord from './Admin/Dashbord/Dashbord';
import Users from './Admin/Users/Users';
import ProductList from './Admin/ProductList/PorductList'
import Add from './Admin/Add/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import Edit from './Admin/Edit/Edit';
function App() {
  
  return (
    <div className="App">
   <BrowserRouter> 
   
    <Routes>
      
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner = {mens_banner} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner = {womens_banner} category="women"/>} />     
      <Route path='/collections' element={<Collections banner={mens_banner} category="women||men"/>} />
      <Route path='/product' element={<Product />}>
      <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Signup' element={<LoginSignup/>}/>
      <Route path='/dashbord' element={<Dashbord/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    <ToastContainer/>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
