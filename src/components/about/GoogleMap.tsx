const GoogleMap = () => {
  return (
    <section className="my-20 lg:my-28 px-3  min-h-[600px] max-w-screen-xl mx-auto">
      <div className="mb-10 max-w-2xl mx-auto space-y-2">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-gray-800 font-bold text-center font-young-serif"
        >
          Our Location
        </h2>
        <p className="text-gray-600 text-center">
          Visit us at 123 West Vally, Minister Village. Explore our extensive
          range of camping gear and get personalized advice from our expert
          team. We're here to enhance your outdoor adventures!
        </p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full h-52 md:h-auto lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              style={{ filter: "contrast(1.2) opacity(1)" }}
              className="border-0 rounded-lg w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6280.8787203966185!2d92.32295674013474!3d20.603046773799868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ae2347f3b58ae7%3A0x2db0032cc89e75b8!2sCinnamon%20Lake!5e0!3m2!1sen!2sbd!4v1726904985897!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white relative hidden md:flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  123 Campers Lane, Adventure City, CA 90210
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-green-500 leading-relaxed"
                  href="rejaulexample@gmail.com"
                >
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">647-342-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We value your opinion and want to hear from you. Share your
              thoughts, suggestions, or concerns with us to help us improve.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Help us enhance your experience with us!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GoogleMap;
