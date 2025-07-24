import { useEffect, useState } from "react";

function BookCar() {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Car images (using placeholder URLs for demo)
  const carImages = {
    "Audi A1 S-Line":
      "https://images.unsplash.com/photo-1549399736-e91a75acb95a?w=300&h=200&fit=crop",
    "VW Golf 6":
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop",
    "Toyota Camry":
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=300&h=200&fit=crop",
    "BMW 320 ModernLine":
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop",
    "Mercedes-Benz GLK":
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop",
    "VW Passat CC":
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
  };

  // taking value of modal inputs
  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZip = (e) => setZipCode(e.target.value);

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      setModal(!modal);
      setShowError(false);
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => setPickUp(e.target.value);
  const handleDrop = (e) => setDropOff(e.target.value);
  const handlePickTime = (e) => setPickTime(e.target.value);
  const handleDropTime = (e) => setDropTime(e.target.value);

  const imgUrl = carImages[carImg] || "";

  return (
    <>
      <section
        id="booking-section"
        className="relative py-16 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Check your email to confirm your booking!
            <button
              onClick={() => setShowSuccess(false)}
              className="ml-2 hover:bg-green-600 rounded px-2 py-1"
            >
              ×
            </button>
          </div>
        )}

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Book Your Perfect Car
              </h2>
              <p className="text-gray-600 text-lg">
                Find the best deals on car rentals with our premium fleet
              </p>
            </div>

            {/* Main Booking Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              {/* Error Message */}
              {showError && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All fields are required!
                </div>
              )}

              <div className="space-y-6">
                {/* First Row - Car Type, Pick-up, Drop-off */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center font-semibold text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                      Select Car Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={carType}
                      onChange={handleCar}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white hover:border-gray-400"
                    >
                      <option value="">Choose your car</option>
                      <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                      <option value="VW Golf 6">VW Golf 6</option>
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="BMW 320 ModernLine">
                        BMW 320 ModernLine
                      </option>
                      <option value="Mercedes-Benz GLK">
                        Mercedes-Benz GLK
                      </option>
                      <option value="VW Passat CC">VW Passat CC</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center font-semibold text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pick-up Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={pickUp}
                      onChange={handlePick}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white hover:border-gray-400"
                    >
                      <option value="">Select pickup location</option>
                      <option>Delhi</option>
                      <option>Kolkata</option>
                      <option>Bengaluru</option>
                      <option>Mumbai</option>
                      <option>Goa</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center font-semibold text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Drop-off Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={dropOff}
                      onChange={handleDrop}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white hover:border-gray-400"
                    >
                      <option value="">Select dropoff location</option>
                      <option>Delhi</option>
                      <option>Kolkata</option>
                      <option>Bengaluru</option>
                      <option>Mumbai</option>
                      <option>Goa</option>
                    </select>
                  </div>
                </div>

                {/* Second Row - Dates and Search Button */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
                  <div className="lg:col-span-2 space-y-2">
                    <label className="flex items-center font-semibold text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pick-up Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={pickTime}
                      onChange={(e) => setPickTime(e.target.value)}
                      onPaste={(e) => e.preventDefault()} // 🚫 Disable paste
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all hover:border-gray-400"
                    />
                  </div>

                  <div className="lg:col-span-2 space-y-2">
                    <label className="flex items-center font-semibold text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Drop-off Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={dropTime}
                      onChange={(e) => setDropTime(e.target.value)}
                      onPaste={(e) => e.preventDefault()} // Disable paste
                      min={new Date().toISOString().split("T")[0]} //Disable past date
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all hover:border-gray-400"
                    />
                  </div>

                  <div className="lg:col-span-1">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Search Cars
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Complete Your Reservation
                </h2>
                <p className="text-red-100 mt-1">
                  Just a few more details to get your car ready
                </p>
              </div>
              <button
                onClick={() => setModal(false)}
                className="text-white hover:bg-red-800 p-2 rounded-full transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              {/* Info Message */}
              <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Upon completing this reservation, you will receive:
                    </h4>
                    <p className="text-blue-800">
                      Your rental voucher to produce on arrival at the rental
                      desk and a toll-free customer support number.
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Summary and Car Info */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Booking Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
                    Booking Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <svg
                        className="w-5 h-5 text-red-600 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h6 className="font-semibold text-gray-800">Pick-Up</h6>
                        <p className="text-sm text-gray-600">
                          {pickUp} • {pickTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <svg
                        className="w-5 h-5 text-red-600 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h6 className="font-semibold text-gray-800">
                          Drop-Off
                        </h6>
                        <p className="text-sm text-gray-600">
                          {dropOff} • {dropTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Car Display */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Your Selected Car
                  </h3>
                  <h5 className="text-lg font-medium text-red-600 mb-4">
                    {carType}
                  </h5>
                  {imgUrl && (
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={imgUrl}
                        alt="Selected car"
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Personal Information
                </h3>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        value={name}
                        onChange={handleName}
                        type="text"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        value={lastName}
                        onChange={handleLastName}
                        type="text"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        value={phone}
                        onChange={handlePhone}
                        type="tel"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <input
                        value={age}
                        onChange={handleAge}
                        type="number"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="18"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      value={address}
                      onChange={handleAddress}
                      type="text"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your street address"
                    />
                  </div>

                  {/* City and Zip */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        value={city}
                        onChange={handleCity}
                        type="text"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Zip Code *
                      </label>
                      <input
                        value={zipcode}
                        onChange={handleZip}
                        type="text"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your zip code"
                      />
                    </div>
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label className="text-gray-700">
                      Please send me latest news and updates
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={confirmBooking}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookCar;
