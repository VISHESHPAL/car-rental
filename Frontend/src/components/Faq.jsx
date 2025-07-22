import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "text-red-600 font-semibold" : "text-gray-800";
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-red-600 font-semibold text-sm uppercase mb-2">FAQ</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Frequently Asked Questions About the Car Rental Booking Process on Our Website:
            Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div
              onClick={() => openQ("q1")}
              className={`flex justify-between items-center cursor-pointer p-4 bg-gray-100 ${getClassQuestion("q1")}`}
            >
              <p>1. What is special about comparing rental car deals?</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className={`transition-all duration-300 px-4 text-gray-700 ${getClassAnswer("q1")}`}>
              Comparing rental car deals is important as it helps find the best deal that fits your budget and
              requirements, ensuring you get the most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better car models. You can find car
              rental deals by researching online and comparing prices from different rental companies.
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div
              onClick={() => openQ("q2")}
              className={`flex justify-between items-center cursor-pointer p-4 bg-gray-100 ${getClassQuestion("q2")}`}
            >
              <p>2. How do I find the car rental deals?</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className={`transition-all duration-300 px-4 text-gray-700 ${getClassAnswer("q2")}`}>
              You can find car rental deals by researching online and comparing prices from different rental
              companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for email newsletters and follow rental
              car companies on social media to be informed of any special deals or promotions.
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div
              onClick={() => openQ("q3")}
              className={`flex justify-between items-center cursor-pointer p-4 bg-gray-100 ${getClassQuestion("q3")}`}
            >
              <p>3. How do I find such low rental car prices?</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className={`transition-all duration-300 px-4 text-gray-700 ${getClassAnswer("q3")}`}>
              Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare
              prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and coupons: Search for discount codes
              and coupons that you can use to lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
