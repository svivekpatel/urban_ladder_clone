import React from "react";
import ProductUpperBody from "./../../Components/UserSide/SingleProductComps/ProductUpperBody";
import ProductLowerBody from "./../../Components/UserSide/SingleProductComps/ProductLowerBody";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = React.useState([]);
  const { ID } = useParams();
  console.log(ID);
  React.useEffect(() => {
    axios
      .get(`https://lime-tough-coati.cyclic.app/products/${ID}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log();
        setData(res.data.data);
      });
  }, [ID]);

  return (
    <>
      <ProductUpperBody data={data} />
      <ProductLowerBody data={data} />
    </>
  );
};

export default SingleProduct;
