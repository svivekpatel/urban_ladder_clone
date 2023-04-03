import React from "react";

import Footer from "./Components/UserSide/Footer/Footer";
import Navbar from "./Components/UserSide/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Cart from "./Pages/AddressPage/Cart";



function App() {
  const [adminLogin, setAdminLogin] = React.useState(false);

  return (
    <div className="App">
      {/* <Product/> */}
      {adminLogin ? "" : <Navbar setAdminLogin={setAdminLogin} />}
      <AllRoutes />

      {adminLogin ? "" : <Footer />}

    </div >
  );
}

export default App;
