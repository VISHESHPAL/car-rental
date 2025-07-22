import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Download our app to get most out of it
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <img
                alt="Google Play Store"
                src={Img2}
                className="h-12 md:h-14 cursor-pointer hover:scale-105 transition-transform"
              />
              <img
                alt="Apple App Store"
                src={Img1}
                className="h-12 md:h-14 cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
