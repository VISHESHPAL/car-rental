import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="relative bg-[url('/your-book-banner.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a car by getting in touch with us
          </h2>
          <div className="flex justify-center items-center gap-4">
            <i className="fa-solid fa-phone text-xl text-white"></i>
            <h3 className="text-xl font-semibold">(123) 456-7869</h3>
          </div>
        </div>
      </div>
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
