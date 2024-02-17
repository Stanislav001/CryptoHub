import Image from "../assets/img/why-img.png";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image} alt="why img" />
          </div>

          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos-offset="400"
            data-aos="fade-left"
          >
            <h2 className="section-title">Why you should choose CRAPPO</h2>

            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees and fake reviews.
            </p>

            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
