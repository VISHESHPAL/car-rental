import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Car Image */}
        <div className="flex justify-center">
          <img
            src={MainImg}
            alt="car_img"
            className="w-full max-w-4xl object-contain"
          />
        </div>

        {/* 2-column layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-4 text-left">
            <h4 className="text-red-500 text-lg font-semibold uppercase">
              Why Choose Us
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Best valued deals you will ever find
            </h2>
            <p className="text-gray-600">
              Discover the best deals you'll ever find with our unbeatable offers.
              We're dedicated to providing you with the best value for your money,
              so you can enjoy top‑quality services and products without breaking
              the bank. Our deals are designed to give you the ultimate renting
              experience, so don't miss out on your chance to save big.
            </p>
            <a
              href="#home"
              className="inline-block text-red-500 font-medium hover:underline"
            >
              Find Details &nbsp;<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>

          {/* Right: Info Boxes */}
          <div className="space-y-8">
            {/* Box 1 */}
            <div className="flex gap-4 items-start text-left">
              <img src={Box1} alt="car" className="w-14 h-14" />
              <div>
                <h4 className="text-lg font-semibold">Cross Country Drive</h4>
                <p className="text-gray-600">
                  Take your driving experience to the next level with our
                  top‑notch vehicles for your cross‑country adventures.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex gap-4 items-start text-left">
              <img src={Box2} alt="coin" className="w-14 h-14" />
              <div>
                <h4 className="text-lg font-semibold">All Inclusive Pricing</h4>
                <p className="text-gray-600">
                  Get everything you need in one convenient, transparent price with
                  our all‑inclusive pricing policy.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex gap-4 items-start text-left">
              <img src={Box3} alt="no‑hidden" className="w-14 h-14" />
              <div>
                <h4 className="text-lg font-semibold">No Hidden Charges</h4>
                <p className="text-gray-600">
                  Enjoy peace of mind with our no hidden charges policy. We believe
                  in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
