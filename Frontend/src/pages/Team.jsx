import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Manager" },
  ];

  return (
    <>
      <section>
        <HeroPages name="Our Team" />

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamPpl.map((ppl, id) => (
              <div
                key={id}
                className="bg-white shadow-md rounded-xl overflow-hidden text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="w-full h-80 bg-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    src={ppl.img}
                    alt={ppl.name}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {ppl.name}
                  </h3>
                  <p className="text-gray-500">{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Banner */}
        <div className="relative bg-red-600 text-white py-16 mt-20">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book a car by getting in touch with us
            </h2>
            <div className="flex justify-center items-center gap-4 text-xl">
              <i className="fa-solid fa-phone text-2xl text-white"></i>
              <h3 className="font-semibold">(123) 456-7869</h3>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Team;
