import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NavigateBtns() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((item, index) => {
          return (
            <div key={index} className="mr-4">
                <Link to={'/filteredproducts/' + item}>
              <Button onClick={() => dispatch(filterProducts(item))}>
                {item}
              </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[52%] mx-auto  rounded-md">
        <h3 className="text-black text-center text-lg font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
        />
      </div>
    </div>
  );
}
