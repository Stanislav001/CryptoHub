import { useState } from "react";
import { currency } from "../data";
import { IoIosArrowForward } from "react-icons/io";

const Trade = () => {
  const [itemName, setItemName] = useState("Bitcoin");

  return (
    <section
      className="section lg:pt-[320px] 
      bg-gradient-to-b from-[#f8f9fb] to-[#fafbff]
     text-darkblue lg:-mt-[320px]"
    >
      <div className="container mx-auto">
        <h2
          className="section-title text-center mb-16"
          data-aos="fade-up"
          data-await-offset="400"
        >
          Trade securely and market the high growth cryptocurrencies.
        </h2>

        <div
          className="flex  flex-col gap-[45px] lg:flex-row"
          data-aos="fade-up"
          data-await-offset="450"
        >
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;
            return (
              <div
                key={index}
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? "bg-violet text-white" : "bg-white"
                }  w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
              >
                <div className="flex flex-col justify-center items-center">
                  <img className="mb-12" src={image} alt="" />

                  <div className="mb-4 flex items-center gap-x-2">
                    <div className="text-[32px] font-bold">{name}</div>
                    <div className="text-lg text-gray-400">{abbr}</div>
                  </div>

                  <p className="mb-6 text-center">{description}</p>

                  <button
                    className={`
                    ${
                      name === itemName
                        ? "bg-blue text-white hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : " text-blue w-16"
                    }
                    border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}
                  >
                    {name === itemName && (
                      <div className=" text-lg font-medium">Start mining</div>
                    )}
                    <IoIosArrowForward
                      className={name === itemName ? "text-2xl" : "text-3xl"}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
