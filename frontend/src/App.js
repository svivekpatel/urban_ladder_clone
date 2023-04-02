import React from "react";

import Footer from "./Components/UserSide/Footer/Footer";
import Navbar from "./Components/UserSide/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

import Footer from './Components/UserSide/Footer/Footer';
import Navbar from './Components/UserSide/Navbar/Navbar';
import Address from './Pages/AddressPage/Address';
import Cart from './Pages/AddressPage/Cart';
import Payment from './Pages/AddressPage/Payment';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const [adminLogin, setAdminLogin] = React.useState(false);

  return (
    <div className="App">
      {/* <Product/> */}
      {adminLogin ? "" : <Navbar setAdminLogin={setAdminLogin} />}
      <AllRoutes />

      {adminLogin ? "" : <Footer />}
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
