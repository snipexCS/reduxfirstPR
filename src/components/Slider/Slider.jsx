import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

export default function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100    "
                  : "opacity-0  "
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className=" " src={item.img} alt="shoes"></img>
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4">
                <p className=" text-white text-4xl font-bold tracking-normal leading-none">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex absolute bottom-10 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="m-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-500"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          Next
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-500"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          Prev
        </button>
      </div>
    </div>
  );
}
