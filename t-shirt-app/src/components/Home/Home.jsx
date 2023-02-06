import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div>
      Home: {tshirts.length}
      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-5">
          {tshirts.map((tshirt) => (
            <Tshirt key={tshirt.id} tshirt={tshirt}></Tshirt>
          ))}
        </div>
        <div className="cart ">
          <div className="">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
