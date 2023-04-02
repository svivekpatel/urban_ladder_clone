

import Footer from './Components/UserSide/Footer/Footer';
import Navbar from './Components/UserSide/Navbar/Navbar';
import Address from './Pages/AddressPage/Address';
import Cart from './Pages/AddressPage/Cart';
import Payment from './Pages/AddressPage/Payment';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">

      {/* <Product/> */}
      <Navbar />
      {/* <AllRoutes /> */}
      <Cart/>
      <Address/>
      <Payment/>
      <Footer />
    </div >
  );
}

export default App;
