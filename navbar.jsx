import React from "react";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="font-bold text-xl text-green-600">CONVEX</span>
        </div>
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Поиск товаров"
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-green-500"/>
        </div>
        <div className="hidden md:flex flex-col text-sm text-gray-600 mr-6">
          <span className="font-semibold">Бесплатный звонок</span>
          <span className="text-lg text-green-600">8 800 080 5011</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Корзина (12)
          </button>
          <button className="text-gray-700">Войти</button>
        </div>
      </div>
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto flex space-x-6 px-4 py-2 text-sm">
          <a href="#" className="hover:text-green-600">Продукты</a>
          <a href="#" className="hover:text-green-600">Еда быстрого приготовления</a>
          <a href="#" className="hover:text-green-600">Консервы</a>
          <a href="#" className="hover:text-green-600">Напитки</a>
          <a href="#" className="hover:text-green-600">Бытовая химия</a>
          <a href="#" className="hover:text-green-600">Уход за собой</a>
          <a href="#" className="hover:text-green-600">Еще ▾</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;