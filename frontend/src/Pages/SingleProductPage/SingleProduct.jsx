import React from "react";
import ProductUpperBody from "./../../Components/UserSide/SingleProductComps/ProductUpperBody";
import ProductLowerBody from "./../../Components/UserSide/SingleProductComps/ProductLowerBody";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = React.useState([]);
  const { ID } = useParams();

  React.useEffect(() => {
    axios.get(`http://localhost:3000/data/${ID}`).then((res) => {
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
