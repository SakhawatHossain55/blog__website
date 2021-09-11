import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="my-4">
        <Carousel slide={false} fade={false}>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <div className="banner__slider-button">
                <p className="text-white">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, animi. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque, anim Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Cumque, animi. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Cumque, anim
                </p>
                <Link className="border-0 text-center btn-brand" to="#">
                  Details
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
            <Carousel.Caption>
              <div className="banner__slider-button">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, animi. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque, anim Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Cumque, animi. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Cumque, anim
                </p>
                <Link className="border-0 text-center btn-brand" to="#">
                  Details
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner3} alt="Third slide" />
            <Carousel.Caption>
              <div className="banner__slider-button">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, animi. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque, anim Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Cumque, animi. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Cumque, anim
                </p>
                <Link className="border-0 text-center btn-brand" to="#">
                  Details
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
