import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 gap-6">
      <div className="bg-green-500 text-white rounded-xl flex flex-col justify-center px-6 py-10">
        <h2 className="text-2xl font-bold">Всегда свежие молочные продукты</h2>
        <p className="mt-2 text-sm">
          Только качественные товары, за которыми мы всегда следим
        </p>
        <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
          Подробнее
        </button>
      </div>
      <div className="flex justify-center items-center bg-gray-100 rounded-xl">
        <img src="/van.png" alt="" className="h-40" />
      </div>
    </section>
  );
};

export default Hero;
