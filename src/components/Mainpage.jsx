import React, { useEffect } from "react";
import Carousal from "./Carousal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mainpage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mt-8 md:flex-row md:justify-center">
        <div className="w-11/12 md:w-1/3 mb-6 md:mb-0" data-aos="fade-right">
          <img
            src="/images/Group 262.png"
            alt="Image"
            className="w-full h-auto"
          />
        </div>

        <div className="w-11/12 md:w-1/3 p-4 " data-aos="fade-down">
          <h2 className="text-4xl font-semibold mb-2">Success Stories</h2>
          <p className="text-sm text-gray-700 mb-6">
            <span className="text-custom">423,970+</span> stories shared. Start
            to share
          </p>
          <p className="text-sm text-gray-800 mb-6">
            Stories of unsung heroes, changemakers, innovations, education,
            children, women empowerment, travel, history, arts & culture, social
            development – really, the list is endless.
          </p>
          <button className="bg-custom hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create your story
          </button>
        </div>
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        <div className="triangle flex justify-center items-center w-1/3  ml-12">
          <div className="w-1/3">
            <img src="/images/Group 347.png" alt="Image" className="w-full" />
          </div>
        </div>

        <div className="flex justify-center w-3/4 mx-auto">
          <div className=" max-w-sm rounded overflow-hidden  m-2">
            <div className="px-6 py-4">
              <div className="font-extrabold text-2xl mb-12 ">
                How to share your stories
              </div>
              <button className="bg-custom hover:bg-custom hover:text-white text-white font-bold py-2 px-4 rounded">
                Start to share
              </button>
            </div>
          </div>
          <div
            className="max-w-sm rounded overflow-hidden   m-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="w-1/4 ml-5 "
              src="/images/Group 257.png"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Run your campaign</div>
              <p className="text-gray-700 text-base text-sm">
                Neque porro quisquam est qui dolorem ipsum quia sit amet.
              </p>
            </div>
          </div>

          <div
            className="max-w-sm rounded overflow-hidden  m-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="w-1/4 ml-5 " src="/images/website.png" alt="Card" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Get funded</div>
              <p className="text-gray-700 text-base">
                Neque porro quisquam est qui dolorem ipsum quia sit amet.
              </p>
            </div>
          </div>

          <div
            className="max-w-sm rounded overflow-hidden  m-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="w-1/4 ml-5 image1"
              src="/images/Group 256.png"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Share your stories</div>
              <p className="text-gray-700 text-base">
                Neque porro quisquam est qui dolorem ipsum quia sit amet.
              </p>
            </div>
          </div>
          <div className="triangle max-w-sm rounded overflow-hidden  m-2">
            <img className="w-full  " src="/images/Group 348.png" alt="Card" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 md:flex-row md:justify-center">
        <div
          className="image00 w-11/12 md:w-1/3 mb-6 md:mb-0"
          data-aos="fade-up"
        >
          <img
            src="/images/Group 245.png"
            alt="Image"
            className="w-6/7 h-auto"
          />
        </div>

        <div className="w-11/12 md:w-1/3 p-4" data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-4">
            How to be a featured author?
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            Many desktop publishing packages and web page editors.
          </p>
          <p className="text-sm text-gray-800 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a ‘Content here, content here’,
            making it look like readable English.
          </p>
          <button className="border border-solid border-custom text-custom hover:bg-custom hover:text-white font-bold py-2 px-4 rounded">
            View all Featured authors
          </button>
        </div>
      </div>
    </>
  );
}
