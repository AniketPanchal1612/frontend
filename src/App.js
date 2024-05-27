import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import Update from './components/Update';
import Likes from './components/Likes';
import Cart from './components/Cart';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {user, loginWithRedirect, isAuthenticated,logout} = useAuth0()
  console.log(user)

  return (
    <div className="App">
      {isAuthenticated && <h2>Hello {user.name}</h2>}
      {isAuthenticated ?(
        <button onClick={()=>logout()}>Logout</button>
      ):(
        
        <button onClick={()=>loginWithRedirect()}>Login</button>
      )
      }
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact element={<Products />} path='/' />
          <Route exact element={<SingleProduct />} path='/product/:id' />
          <Route exact element={<AddProduct />} path='/add' />
          <Route exact element={<Update />} path='/edit/:id' />
          <Route exact element={<Likes />} path='/likes' />
          <Route exact element={<Cart />} path='/cart' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// // import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from './component/Products';
// import Navbar from './component/Navbar';
// import SingleProduct from './component/SingleProduct';
// import AddProduct from './component/AddProduct';
// import Update from './component/Update';
// import ProtectedRoute from './component/ProtectedRoute';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//           <Navbar />
//         <Routes>
//         <Route element={<ProtectedRoute />}>
//           <Route path="/" element={<Products />} />
//           {/* Add more protected routes as needed */}
//         </Route>          <Route path='/product/:id' element={<SingleProduct />} exact />
          
//           <Route path='/add' element={<AddProduct />} exact/>
//           <Route path='/edit/:id' element={<Update />} exact/>


//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
