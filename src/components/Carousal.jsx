import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

export default function Carousal() {
  const slides = [
    {
      date: "20 December, 2020 · 6 min read · 234 liked",
      title:
        "63-YO Delhi Grandmother Transforms Dump Yard Into Green Belt In Just 5 months",
      content:
        "“I often visit the Nanak Piao Sahib Gurudwara in North Delhi and while once inside it is always peaceful and clean, the sight just outside was not so pleasing to the eyes,”",
      imageUrl: "/images/Rectangle 83.png",
      author: "Vidya Raja",
      place: "Mumbai, India",
    },
    {
      date: "20 December, 2020 · 6 min read · 234 liked",
      title:
        "63-YO Delhi Grandmother Transforms Dump Yard Into Green Belt In Just 5 months",
      content:
        "“I often visit the Nanak Piao Sahib Gurudwara in North Delhi and while once inside it is always peaceful and clean, the sight just outside was not so pleasing to the eyes,”",
      imageUrl: "/images/Rectangle 83.png",
      author: "Vidya Raja",
      place: "Mumbai, India",
    },
    // Add more slides as needed
  ];

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <div>
        <div
          key={index}
          className="carousel-slide flex items-center justify-center mt-8"
        >
          <div className="w-1/3" data-aos="fade-up">
            <img
              src={slide.imageUrl}
              alt={`Slide ${index}`}
              className="w-full h-auto"
            />
          </div>
          <div
            className="carousel-content flex flex-col ml-8 w-1/2 p-4 mb-4"
            data-aos="fade-left "
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex mb-8">
                <div className="bg-gray-200 rounded">
                  <p className="text-gray-600 mb-0 px-2 py-1">Social Works</p>
                </div>
                <div className="bg-gray-200 rounded ml-2">
                  <p className="text-gray-600 mb-0 px-2 py-1">Crowdfunding</p>
                </div>
              </div>
              <div>
                <img
                  className="text-red-500 mr-2"
                  src="/images/favorite.png"
                  alt="Heart symbol"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
            <p className="mt-2 text-gray-600 mb-4">{slide.content}</p>
            <p className="mt-2 text-gray-600 text-sm mb-4">{slide.date}</p>
            <div className="flex items-center mt-2">
              <img
                src="/images/Rectangle.png"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-gray-900 font-bold">{slide.author}</p>
                <p className="text-gray-600">{slide.place}</p>
              </div>
              <div className=" boxes mt-4 flex space-x-4 ml-auto justify-center">
                <a className="  text-blue-400 px-4 py-2 rounded">
                  View Campaign
                </a>
                <a className="  text-blue-400 px-4 py-2 rounded">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="heading ml-24 ">Featured Stories</h1>
        <div className="carousel">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </div>
    </div>
  );
}
