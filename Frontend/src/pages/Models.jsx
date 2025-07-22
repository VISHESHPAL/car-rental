import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";

function Models() {
  return (
  <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg1} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">Audi A1</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$45</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Audi
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg2} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">Golf 6</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$37</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> VW
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg3} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">Toyota</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$30</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Camry
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg4} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">BMW 320</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$35</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> ModernLine
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg5} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">Mercedes</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$50</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Benz GLK
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={CarImg6} alt="car_img" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800 mb-2">VW Passat</p>
                      <span className="flex space-x-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <div className="text-right">
                      <h4 className="text-2xl font-bold text-red-400">$25</h4>
                      <p className="text-gray-500 text-sm">per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> CC
                    </span>
                    <span className="text-right">
                      4/5 <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-car-side mr-2"></i> Manual
                    </span>
                    <span className="text-right">
                      Diesel <i className="fa-solid fa-car-side ml-2"></i>
                    </span>
                  </div>
                  <div>
                    <a 
                      href="/" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block w-full bg-red-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative bg-gradient-to-r from-gray-900 to-red-900 py-20 mt-20">
          <div className="absolute inset-0 bg-gray-900 "></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a car by getting in touch with us</h2>
              <span className="flex items-center justify-center space-x-4">
                <i className="fa-solid fa-phone text-2xl  p-4 rounded-full"></i>
                <h3 className="text-2xl md:text-3xl font-bold">(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        
        <Footer />
      </section>
    </>
  );
}

export default Models;
