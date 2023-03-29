import React from "react";
import Footer from "../../Components/UserSide/Footer/Footer";
import HomeBody from "../../Components/UserSide/Home/HomeBody";
import Navbar from "../../Components/UserSide/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
