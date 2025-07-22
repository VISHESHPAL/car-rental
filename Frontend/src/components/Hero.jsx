import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.pageYOffset > 600);
    };

    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <>
      <section id="home" className="relative w-full overflow-hidden bg-gray-50 pt-24 pb-16">
        {/* background shape */}
        <img
          src={BgShape}
          alt="bg-shape"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10"
        />

        <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-lg text-red-600 font-semibold mb-2 uppercase tracking-wider">
              Plan your trip now
            </h4>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Save <span className="text-red-600">big</span> with our car rental
            </h1>
            <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                onClick={bookBtn}
                to="/"
                className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition"
              >
                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link
                to="/"
                className="border border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 transition"
              >
                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1">
            <img
              src={HeroCar}
              alt="car-img"
              className="w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>

        {/* Scroll-to-top button */}
        <div
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white text-xl cursor-pointer transition-opacity duration-300 ${
            goUp ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
