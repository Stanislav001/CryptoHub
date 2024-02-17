import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  return (
    <section className="pt-24" data-aos="fade-up" data-aos-delay="1200">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiChartBar />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                $30B
              </div>
              <div className="text-gray">Digital Currency Exchanged</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiUser />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                $10M+
              </div>
              <div className="text-gray">Trusted Wallets Investor</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiGlobe />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                195
              </div>
              <div className="text-gray">Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
