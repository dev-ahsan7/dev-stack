import heroImg from '../assets/banner-stack.png';

const HeroBanner = () => {
  return (
    <section className="w-full">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* left content */}
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="font-['Inter'] font-extrabold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.15] lg:leading-15 tracking-[-1.5px] align-middle">
              <span className="text-[#0F172A]">Build Your Ideal</span>
              <br />
              <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 md:mt-6 w-full font-['Plus_Jakarta_Sans'] font-normal text-[16px] md:text-[18px] align-middle text-gray-600">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="w-full mt-6 md:mt-12 flex flex-row flex-wrap items-center gap-3 justify-center md:justify-start">
              <button className="px-4 py-3 cursor-pointer rounded-lg bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)] shadow-[0px_1px_2px_0px_#0000000D] text-white font-medium text-sm flex items-center justify-center hover:opacity-90 transition-opacity">
                Explore Technologies
              </button>
              <button className="py-3 px-4 cursor-pointer rounded-lg border border-[#E5E7EB] text-gray-800 font-medium text-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* right image */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <img
              src={heroImg}
              className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-none md:w-96 lg:w-130 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
