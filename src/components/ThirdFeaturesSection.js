import Image from "../assets/img/feature-3-img.png";

const ThirdFeaturesSection = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex  flex-col lg:flex-row">
        <div
          className="max-w-[454px] mb-7 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">
            Grow your profit and track your investments
          </h3>
          <p className="text-gray mb-8 max-w-[408px]">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="btn px-8">Learn More</button>
        </div>

        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ThirdFeaturesSection;
