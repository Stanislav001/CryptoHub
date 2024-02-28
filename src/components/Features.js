import FirstFeaturesSection from "./FirstFeaturesSection";
import SecondFeaturesSection from "./SecondFeaturesSection";
import ThirdFeaturesSection from "./ThirdFeaturesSection";

const Features = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2 className="section-title" data-aos="fade-up" daa-aos-offset="400">
            Market sentiments, portfolio and run the infrastructure of your
            choice
          </h2>
        </div>

        <FirstFeaturesSection />
        <SecondFeaturesSection />
        <ThirdFeaturesSection />
      </div>
    </section>
  );
};

export default Features;
