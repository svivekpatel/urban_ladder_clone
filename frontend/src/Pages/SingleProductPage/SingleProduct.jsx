import React from "react";
import ProductUpperBody from "./../../Components/UserSide/SingleProductComps/ProductUpperBody";
import ProductLowerBody from "./../../Components/UserSide/SingleProductComps/ProductLowerBody";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = React.useState([]);
  const { ID } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://lime-tough-coati.cyclic.app/product/${ID}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
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
