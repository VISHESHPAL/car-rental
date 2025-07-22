import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div
          key={id}
          className="flex flex-col lg:flex-row gap-10 bg-gray-50 shadow-md rounded-xl p-6"
        >
          {/* Car Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            {carLoad && (
              <span className="loader w-10 h-10 border-4 border-red-500 border-t-transparent animate-spin rounded-full"></span>
            )}
            <img
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
              className={`max-w-full h-auto transition-opacity duration-300 ${
                carLoad ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Description */}
          <div className="lg:w-1/2 w-full space-y-6">
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                <span className="text-red-500 font-bold">${car.price}</span> /
                rent per day
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-4 text-sm sm:text-base">
              <div>
                <span className="text-gray-600">Model:</span>{" "}
                <span className="font-medium">{car.model}</span>
              </div>
              <div>
                <span className="text-gray-600">Mark:</span>{" "}
                <span className="font-medium">{car.mark}</span>
              </div>
              <div>
                <span className="text-gray-600">Year:</span>{" "}
                <span className="font-medium">{car.year}</span>
              </div>
              <div>
                <span className="text-gray-600">Doors:</span>{" "}
                <span className="font-medium">{car.doors}</span>
              </div>
              <div>
                <span className="text-gray-600">AC:</span>{" "}
                <span className="font-medium">{car.air}</span>
              </div>
              <div>
                <span className="text-gray-600">Transmission:</span>{" "}
                <span className="font-medium">{car.transmission}</span>
              </div>
              <div>
                <span className="text-gray-600">Fuel:</span>{" "}
                <span className="font-medium">{car.fuel}</span>
              </div>
            </div>

            <a
              href="#booking-section"
              className="inline-block mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
