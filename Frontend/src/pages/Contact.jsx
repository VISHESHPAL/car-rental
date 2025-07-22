import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section>
        <HeroPages name="Contact" />

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Need additional information?</h2>
              <p className="text-gray-600">
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <div className="space-y-3">
                <a href="/" className="block text-gray-700 hover:text-red-500">
                  <i className="fa-solid fa-phone mr-2 text-red-500"></i>
                  (123) 456-7869
                </a>
                <a href="/" className="block text-gray-700 hover:text-red-500">
                  <i className="fa-solid fa-envelope mr-2 text-red-500"></i>
                  carrental@xyz.com
                </a>
                <a href="/" className="block text-gray-700 hover:text-red-500">
                  <i className="fa-solid fa-location-dot mr-2 text-red-500"></i>
                  Noida , UttarPradesh
                </a>
              </div>
            </div>

            {/* Right Form Content */}
            <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
              <form className="space-y-5">
                <div>
                  <label className="block font-semibold mb-1">
                    Full Name <b className="text-red-500">*</b>
                  </label>
                  <input
                    type="text"
                    placeholder='E.g: "Joe Shmoe"'
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Email <b className="text-red-500">*</b>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Tell us about it <b className="text-red-500">*</b>
                  </label>
                  <textarea
                    placeholder="Write Here.."
                    rows="4"
                    className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all flex items-center gap-2"
                >
                  <i className="fa-solid fa-envelope-open-text"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Book Banner Section */}
        <div className="relative bg-gray-900 py-12 text-white mt-20">
          <div className="absolute inset-0  opacity-50"></div>
          <div className="relative z-10 container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Book a car by getting in touch with us
            </h2>
            <span className="flex justify-center items-center gap-2 mt-4 text-lg font-medium">
              <i className="fa-solid fa-phone text-white"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Contact;
