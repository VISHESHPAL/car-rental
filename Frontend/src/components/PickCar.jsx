import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-500";
  };

  return (
    <>
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-sm sm:text-base text-red-500 font-semibold uppercase tracking-widest">
              Vehicle Models
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Our Rental Fleet
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.
            </p>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Button Panel */}
            <div className="lg:w-1/3 w-full flex flex-col gap-3">
              {[
                { label: "Audi A1 S-Line", id: "btn1", car: "SecondCar" },
                { label: "VW Golf 6", id: "btn2", car: "FirstCar" },
                { label: "Toyota Camry", id: "btn3", car: "ThirdCar" },
                { label: "BMW 320 ModernLine", id: "btn4", car: "FourthCar" },
                { label: "Mercedes-Benz GLK", id: "btn5", car: "FifthCar" },
                { label: "VW Passat CC", id: "btn6", car: "SixthCar" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  className={`w-full py-3 px-4 rounded-md text-left font-medium shadow-sm transition duration-200 border ${coloringButton(btn.id)}`}
                  onClick={() => {
                    setActive(btn.car);
                    btnID(btn.id);
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Car Info */}
            <div className="lg:w-2/3 w-full">
              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
