import { Link } from "react-router-dom";

function HeroPages({ name }) {
  return (
    <>
      <section className="relative w-full h-40 bg-[url('/your-bg-image.jpg')] bg-cover bg-center flex items-center mt-10">
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-black text-center">
            <h3 className="text-3xl font-bold mb-2 capitalize">{name}</h3>
            <p className="text-sm">
              <Link to="/" className="hover:underline text-black">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
