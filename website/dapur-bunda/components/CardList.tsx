"use client";
import React, { useEffect, useState } from "react";

const menu_url = "http://localhost:8000/api/menus/";

interface Idata {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const CardList = () => {
  const [menus, setMenus] = useState<Idata[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<Idata | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch(menu_url);
        const data: Idata[] = await res.json();
        setMenus(data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const handleShowDescription = (menu: Idata) => {
    setSelectedMenu(menu);
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
  };

  return (
    <>
      <div className="mt-4 text-center">
        <h3 className="text-4xl font-bold mt-20 text-black">Our Menu</h3>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-12">
          TODAY'S SPECIALITY
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-7 md:gap-7 place-items-center">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden mx-6"
            >
              <img
                className="w-full h-48 object-cover"
                src={menu.image}
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className="flex mb-2">
                  <span className="px-4 py-0.5 text-sm bg-pink-500 rounded-full text-pink-50">
                    {menu.category}
                  </span>
                </div>
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">
                  {menu.name}
                </h4>
                <p className="leading-normal truncate text-gray-700">
                  {menu.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => handleShowDescription(menu)}
                    className="px-4 py-2 bg-green-600 text-green-50 rounded font-semibold"
                  >
                    Selengkapnya...
                  </button>
                  <span className="text-xl font-semibold text-green-600">
                    ${menu.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMenu && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center backdrop-blur-md">
          <div className="relative p-4 w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 md:p-5">
                <h3 className="text-2xl text font-extrabold text-gray-900 mb-3 text-center">
                  {selectedMenu.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedMenu.description}</p>
                <button
                  onClick={handleCloseModal}
                  className="block w-full py-2 text-sm font-semibold text-gray-900 uppercase bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded-md transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
