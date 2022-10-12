import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Card from './Card';
import  Cart from './Cart';
import {useState} from 'react';
import Topbar from './Topbar';
import Header from './Header';

function App() {
  const product=[
   

    {
      id:1,
      name:"Apple iPhone 13 Pro",
      price:115900,
      img:"https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-Smartphones-491997732-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjEwN3xpbWFnZS9qcGVnfGltYWdlcy9oMzUvaGQwLzk2MzcyNjAyOTYyMjIuanBnfDBhN2VmOTY1YmVmYTI4ZjdmODE1ZmM1ZDk1YjdhNjM2Mzc5N2E0YTM5MDg5NGNkZmUwMjI3MmIxZjMwNDk5NzQ"
    },

    {
      id:2,
      name:"Apple Watch Series 7",
      price:44900,
      img:"https://i1.wp.com/maplestore.in/wp-content/uploads/2021/10/r1450_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Band_2.jpg?fit=2048%2C2048&ssl=1"
    },

    {
      id:3,
      name:"MacBook Pro",
      price:132900,
      img:"https://i0.wp.com/maplestore.in/wp-content/uploads/2021/10/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__en-IN-scaled.jpg?fit=2560%2C2560&ssl=1"
    },

    {
      id:4,
      name:"Apple iPad Pro",
      price:143900,
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202104_GEO_IN_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617920046000"
    },

    {
      id:5,
      name:"Apple iphone 12",
      price:47999,
      img:"https://media.croma.com/image/upload/v1662424212/Croma%20Assets/Communication/Mobiles/Images/234252_czgdvc.png"
    },

    {
      id:6,
      name:"Apple iMac",
      price:113490,
      img:"https://m.media-amazon.com/images/I/61p-ADlugUS._SL1500_.jpg"
    }

  ]
  const [cartItems,setCartItems] = useState([])

  let addToCart=(product) => {
   setCartItems([...cartItems,product])
  };

  let removeFromCart = (product)=>{
   const indexVal = cartItems.findIndex(obj => obj.id === product.id);
   cartItems.splice(indexVal,1);
   setCartItems([...cartItems]);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <Topbar/>
    </div>
    </nav>

    <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5"> 
    </div>
    <Header/>
    </header>

<div className='container'>
  <div className='row'>
    <div className='col-lg-8'>
     <div className='row'>
       {
        product.map((product) => {
          return<Card product={product} addToCart={addToCart} cartItems={cartItems}/>
        }
        )
       }
       </div>
      </div>

      <div className='col-lg-4'>
        <h3>Cart</h3>
         <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      </div>

     </div>
    </div>
    </>
  );
}

export default App;
