import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h4 className="text-red-500 text-lg font-semibold uppercase mb-2">
              Reviewed by People
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client's Testimonials
            </h2>
            <p className="text-gray-600">
              Discover the positive impact we've made on our clients by reading through their
              testimonials. Our clients have experienced our service and results, and they're eager
              to share their positive experiences with you.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <span className="absolute top-4 right-4 text-3xl text-red-500">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p className="text-gray-700 mb-6">
                "We rented a car from this website and had an amazing experience! The booking was
                easy and the rental rates were very affordable."
              </p>
              <div className="flex items-center gap-4">
                <img src={Img2} alt="user_img" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold">Parry Hotter</h4>
                  <p className="text-gray-500">Belgrade</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <span className="absolute top-4 right-4 text-3xl text-red-500">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p className="text-gray-700 mb-6">
                "The car was in great condition and made our trip even better. Highly recommend for
                this car rental website!"
              </p>
              <div className="flex items-center gap-4">
                <img src={Img3} alt="user_img" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold">Ron Rizzly</h4>
                  <p className="text-gray-500">Novi Sad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
