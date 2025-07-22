import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section>
        <HeroPages name="About" />
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-10 items-center">
          <img
            className="w-full max-w-lg rounded-lg shadow-md"
            src={AboutMain}
            alt="car-renting"
          />
          <div className="flex-1">
            <h3 className="text-sm text-red-500 uppercase font-semibold mb-2">About Company</h3>
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              You start the engine and your adventure begins
            </h2>
            <p className="text-gray-600 mb-8">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to
              affronting imprudence no precaution. My indulged as disposal
              strongly attended.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <img src={Box1} alt="car-icon" className="w-12 h-12" />
                <div>
                  <h4 className="text-2xl font-bold">20</h4>
                  <p className="text-gray-500 text-sm">Car Types</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img src={Box2} alt="car-icon" className="w-12 h-12" />
                <div>
                  <h4 className="text-2xl font-bold">85</h4>
                  <p className="text-gray-500 text-sm">Rental Outlets</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img src={Box3} alt="car-icon" className="w-12 h-12" />
                <div>
                  <h4 className="text-2xl font-bold">75</h4>
                  <p className="text-gray-500 text-sm">Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PlanTrip />
      </section>

      {/* Book Banner */}
      <div className="relative bg-[url('/your-book-banner.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a car by getting in touch with us
          </h2>
          <div className="flex justify-center items-center gap-4">
            <i className="fa-solid fa-phone text-xl text-white-500"></i>
            <h3 className="text-xl font-semibold">(123) 456-7869</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
