import React from "react";
import Image from "next/image";

const ServicesData = [
  {
    id: 1,
    Img: "/dine-in.svg",
    name: "Dine In",
    desciption: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    Img: "/take-away.svg",
    name: "Take Away",
    desciption: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    Img: "/delivery.svg",
    name: "Delivery",
    desciption: "Lorem ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container text-center place-items-center flex justify-center items-center flex-col">
          <div className="mb-20">
            <p className="text-4xl font-semibold bg-clip-text text-black">
              Kami siap
            </p>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-12">Melayani</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white hover:bg-amber-500 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                key={service.id}
              >
                <div className="h-[150px]">
                  <Image
                    src={service.Img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"
                    width={190}
                    height={190}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.desciption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
