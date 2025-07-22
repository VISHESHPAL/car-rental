import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl text-red-500 font-semibold uppercase tracking-wide">Plan your trip now</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Quick & easy car rental</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <img src={SelectCar} alt="Select Car" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">Select Car</h3>
              <p className="text-gray-600">
                We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <img src={Contact} alt="Contact Operator" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">Contact Operator</h3>
              <p className="text-gray-600">
                Our knowledgeable and friendly operators are always ready to help with any questions or concerns.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <img src={Drive} alt="Let's Drive" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">Let's Drive</h3>
              <p className="text-gray-600">
                Whether you're hitting the open road, we've got you covered with our wide range of cars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
