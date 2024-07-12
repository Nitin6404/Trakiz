const HeroSection = () => {
  return (
    <>
      <main className="pt-8 text-center flex flex-col justify-center items-center md:pt-16 relative z-10">
        <div className="mt-6">
          <h1 className="text-4xl leading-snug md:text-7xl font-bold font-roboto md:leading-tight">
            <span className="text-[#FB9333]">Your</span> Personal{" "}
            <br className="block md:hidden" /> AI-Powered
            <br />
            Productivity Partner
          </h1>
          <p className="text-gray-500 md:text-[20px] mt-12  mx-12">
            Chat with your to-do list, break <br className="block md:hidden" />
            tasks down, and track your progress effortlessly
            <br className="hidden md:block" /> Stay on track and achieve your
            goals with Trakiz AI.
          </p>
        </div>
        <div className="mt-16 relative lg:transform lg:hover:scale-105 transition-colors duration-200">
          <div className="absolute -left-3 -top-2 rotate-[-19deg] bg-white font-manrope font-medium rounded text-sm text-center text-black md:w-[105px] md:h-[25px]">
            <span className="flex justify-center items-center w-full h-full">
              {" "}
              WARNING🤯{" "}
            </span>
          </div>
          <button className="bg-[#FB9333] w-[275px]  md:w-[330px] md:h-[70px] font-bold text-base md:text-[18px] text-white py-3 md:px-6 md:py-3 rounded-full flex justify-center items-center mx-auto">
            Extreme Productivity Ahead
            <div className="ml-2">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7094 9.01844C15.1009 8.62897 15.1026 7.9958 14.7132 7.60423L8.36636 1.22316C7.97689 0.831584 7.34372 0.82988 6.95215 1.21935C6.56058 1.60882 6.55887 2.24199 6.94834 2.63356L12.5899 8.30562L6.91789 13.9472C6.52631 14.3367 6.52461 14.9699 6.91408 15.3614C7.30355 15.753 7.93671 15.7547 8.32829 15.3652L14.7094 9.01844ZM-0.00269206 9.27172L14.0015 9.30943L14.0068 7.30943L0.00269206 7.27173L-0.00269206 9.27172Z"
                  fill="#FFFCF9"
                />
              </svg>
            </div>
          </button>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
