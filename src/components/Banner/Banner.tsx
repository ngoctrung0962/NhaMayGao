"use client";
import React from "react";
import "./Banner.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export default function Banner({}: Props) {
  const [listProduct, setListProduct] = React.useState([
    {
      id: 0,
      name: "Switzerland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://images5.alphacoders.com/120/thumb-1920-1206190.jpg",
    },
    {
      id: 1,
      name: "Finland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://mrwallpaper.com/images/hd/4k-architecture-building-in-finland-m7ktmpeisfkzurhy.jpg",
    },
    {
      id: 2,
      name: "Iceland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://images5.alphacoders.com/120/thumb-1920-1206190.jpg",
    },
    {
      id: 3,
      name: "Australia",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://www.metlink.org/wp-content/uploads/2020/11/aus-sydney-opera-house.jpg",
    },
    {
      id: 4,
      name: "Netherland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://i.ibb.co/jTQfmTq/img5.jpg",
    },
    {
      id: 5,
      name: "Vietnam",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      img: "https://wallpaper.dog/large/20454374.jpg",
    },
  ]);

  const handleNext = () => {
    // const items = document.querySelectorAll(".item");
    // document.querySelector(".slide")?.appendChild(items[0]);
    setActiveProduct((prev) => (prev == listProduct.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    // const items = document.querySelectorAll(".item");
    // document.querySelector(".slide")?.prepend(items[items.length - 1]);
    setActiveProduct((prev) => (prev == 1 ? listProduct.length : prev - 1));
  };

  const [activeProduct, setActiveProduct] = React.useState(0);
  const [leftFocus, setLeftFocus] = React.useState(0);
  return (
    <div
      className=""
      style={{
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div
        className="slide w-full h-full relative"
        style={{
          overflow: "hidden",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        {listProduct.map((item, index) => {
          const left = listProduct.length - index;
          return (
            <div
              className="item"
              style={{
                backgroundImage: `url(${item.img})`,
                width: activeProduct == item.id ? "100%" : "200px",
                height: activeProduct == item.id ? "100%" : "300px",
                position: "absolute",
                top: activeProduct == item.id ? "0px" : "50%",
                left:
                  activeProduct == item.id ? 0 : `calc(50% + ${left}*220px)`,
                transform:
                  activeProduct == item.id
                    ? "translate(0, 0)"
                    : "translate(0, -50%)",
                boxShadow: "0 30px 50px #505050",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                display: "inline-block",
                transition: "all 0.5s",
                borderRadius: activeProduct != item.id ? "20px" : "0px",
                cursor: activeProduct == item.id ? "default" : "pointer",
              }}
              key={index}
              onClick={() => {
                setActiveProduct(item.id);
              }}
            >
              <div
                className="content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "100px",
                  width: "300px",
                  textAlign: "left",
                  transform: "translate(0, -50%)",
                  display: activeProduct == item.id ? "block" : "none",
                  color: "#fff",
                }}
              >
                <div className="name">{item.name}</div>
                <div className="des">{item.des}</div>
                <button>See More</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button">
        <button
          className="prev"
          onClick={() => {
            handlePrev();
          }}
        >
          <IoIosArrowBack color="#fff" fontSize={20} />
        </button>
        <button
          className="next"
          onClick={() => {
            handleNext();
          }}
          style={{
            border: "1px solid #fff",
          }}
        >
          <IoIosArrowForward color="#fff" fontSize={20} />
        </button>
      </div>
    </div>
  );
}
