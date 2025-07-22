function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <ul className="space-y-4">
            <li className="text-2xl font-bold text-white">
              <span className="text-red-500">CAR</span> Rental
            </li>
            <li className="text-sm">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:123456789" className="hover:text-white">
                <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
              </a>
            </li>
            <li>
              <a
                href="mailto:carrental@gmail.com"
                className="hover:text-white"
              >
                <i className="fa-solid fa-envelope"></i> &nbsp; carrental@xyz.com
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-white"
                target="_blank"
                rel="noreferrer"
                href="https://vishesh001.netlify.app/"
              >
                Design with ❤️ by Vishesh
              </a>
            </li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            <li className="text-white text-lg font-semibold">Company</li>
            <li><a href="#home" className="hover:text-white">Gallery</a></li>
            <li><a href="#home" className="hover:text-white">Careers</a></li>
            <li><a href="#home" className="hover:text-white">Mobile</a></li>
            <li><a href="#home" className="hover:text-white">Blog</a></li>
            <li><a href="#home" className="hover:text-white">How we work</a></li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-2">
            <li className="text-white text-lg font-semibold">Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 7:00PM</li>
            <li>Sun: Closed</li>
          </ul>

          {/* Column 4 */}
          <ul className="space-y-4">
            <li className="text-white text-lg font-semibold">Subscription</li>
            <li>
              <p className="text-sm">
                Subscribe your Email address for latest news & updates.
              </p>
            </li>
            <li>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-3 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </li>
            <li>
              <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
