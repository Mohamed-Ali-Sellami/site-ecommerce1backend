import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Smartphones from './Components/Smartphones';
import Pcs from './Components/Pcs';
import Accessoires from './Components/Accessoires';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shoppingcard from './Components/Shoppingcard';
import { useDispatch } from 'react-redux';
import { getproduct } from './Redux/ProductsSlice';
import { useEffect, useState } from 'react';
import { getTotals, removeFromCart } from './Redux/cartSlice';
import { getorder } from './Redux/orderSlice';
import 'react-toastify/dist/ReactToastify.css'; //css mta3 heki blaka elli tji kif najouti wela na9es 7kaya fi shopping card


function App() {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [ping, setping] = useState(false)

  useEffect(() => {
 dispatch(getproduct())
 dispatch(getTotals())
 dispatch(getorder())
 


  }, [dispatch,ping])
  
  return (
    <div className="App">
           <Navbar/>
      <Routes>

<Route path="/" element={<Home  setping={setping} ping={ping}/>} />
<Route path="/smartphones" element={<Smartphones setping={setping} ping={ping}/>} />
<Route path="/pcs"element={<Pcs setping={setping} ping={ping}/>} />
<Route path="/accessoires"element={<Accessoires setping={setping} ping={ping}/>} />

<Route path="/shoppingcard"element={<Shoppingcard setping={setping} ping={ping}/>} />



      </Routes>


    </div>
  );
}

export default App;
