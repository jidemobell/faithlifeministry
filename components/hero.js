"use client";

import React from "react";
import $ from "jquery";

import Image from "next/legacy/image";
import { BiLogoZoom } from "react-icons/bi";

import './hero.css';

export default function Hero () {
  const [value, setValue] = React.useState(0);
  const slideImages = [
    <Image
      src="/images/hero/hero2.jpg"
      className="slider-image"
      alt="logo"
      layout="fill"
      key={`key_${"/images/hero/hero2.jpg"}`}
      placeholder="blur"
      blurDataURL="/images/hero/hero2.jpg"
    />,
    <Image
      src="/images/hero/hero3.jpg"
      alt="logo"
      key={`key_${"/images/hero/hero3.jpg"}`}
      className="slider-image"
      layout="fill"
      placeholder="blur"
      blurDataURL="/images/hero/hero3.jpg"
    />,
    <Image
      src="/images/hero/hero4.jpg"
      alt="logo"
      key={`key_${"/images/hero/hero4.jpg"}`}
      className="slider-image"
      layout="fill"
      placeholder="blur"
      blurDataURL="/images/hero/hero4.jpg"
    />,
    <Image
      src="/images/hero/hero5.jpg"
      alt="logo"
      key={`key_${"/images/hero/hero5.jpg"}`}
      className="slider-image"
      layout="fill"
      placeholder="blur"
      blurDataURL="/images/hero/hero5.jpg"
    />,
  ];

  React.useEffect(() => {
    const jQueryCode = () => {
      $(".slider-image").css("-webkit-animation", "none");
      $(".slider-image").css("-moz-animation", "none");
      $(".slider-image").css("-ms-animation", "none");
      $(".slider-image").css("animation", "none");
    };

    const interval = setInterval(jQueryCode, 9000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const jQueryCode = () => {
      $(".slider-image").css("-webkit-animation", "fader ease-in-out 3s");
      $(".slider-image").css("-moz-animation", "fader ease-in-out 3s");
      $(".slider-image").css("-ms-animation", "fader ease-in-out 3s");
      $(".slider-image").css("animation", "fader ease-in-out 3s");
    };

    const interval = setInterval(jQueryCode, 10000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const switchImage = () => {
      setValue((v) => (v === 3 ? 0 : v + 1));
    };

    const interval = setInterval(switchImage, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
    // style={{ border: `3px solid red`}}
    className="s-hero bg-blend-multiply	bg-gradient-to-t animate__fadeInDown"
    data-parallax="scroll"
    data-image-src="images/hero-bg-3000.jpg"
    data-natural-width="3000"
    data-natural-height="2000"
    data-position-y="center"
    // style={{ backgroundImage: `url(images/hero/high.jpg)`  , backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}
  >
    <div
      className="hero-slider"
      style={{ height: "100%", width: "100%" }}
    >
      {slideImages[value]}
    </div>
    <div className="hero-left-bar"></div>
    <div className="row hero-content">
      <div className="column large-full hero-content__text">
        <h1 className="animate__bounceInDown">
          {/* We Exist To <br />
          Honor God And <br />
          Make Disciples */}
          We Nuture Ourselves <br /> To The Transformative <br /> Power
          Of the Holy Spirit.
        </h1>
        <div className="hero-content__buttons">
          <a href="events.html" className="btn btn--stroke">
            About Us
          </a>
          <a href="about.html" className="btn btn--stroke">
            <div className="flex flex-row justify-center  align-middle content-center items-center ">
              <div>Join Live Event</div>
              <BiLogoZoom style={{ width: "20px", height: "20px", marginLeft: "4px"}} />
            </div>
          </a>
        </div>
      </div>
      {/* <!-- end hero-content__text --> */}
    </div>
    {/* <!-- end hero-content --> */}
    <ul className="hero-social">
      <li className="hero-social__title">Follow Us</li>
      <li>
        <a href="#0" title="">
          Facebook
        </a>
      </li>
      <li>
        <a href="#0" title="">
          YouTube
        </a>
      </li>
      <li>
        <a href="#0" title="">
          Instagram
        </a>
      </li>
    </ul>
    {/* <!-- end hero-social --> */}
    <div className="hero-scroll">
      <a href="#about" className="scroll-link smoothscroll">
        Scroll For More
      </a>
    </div>
    {/* <!-- end hero-scroll --> */}
  </section>
  )
}