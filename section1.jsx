import React from "react";

const Categories = () => {
  const items = [
    { title: "Горячие блюда", text: "Вкуснейшие блюда из 4 ресторанов", color: "bg-red-100" },
    { title: "Новинки", text: "Новые позиции", color: "bg-yellow-100" },
    { title: "Акции", text: "Лучшие цены", color: "bg-blue-100" },
    { title: "Комплекты", text: "Все в одном", color: "bg-orange-100" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-6">
      {items.map((item, i) => (
        <div key={i} className={`${item.color} rounded-xl p-4 text-center`}>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Categories;