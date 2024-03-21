import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <section className="grid gap-4">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 bg-gradient-to-br from-[#F472B6] to-[#EC4899] rounded-lg p-4">
          <div className="flex items-center gap-4">
            <button className="rounded-full h-8 w-8 border border-white text-white hover:bg-white hover:text-[#F472B6] transition-colors duration-300">
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
              <span className="sr-only">Previous week</span>
            </button>
            <h1 className="font-semibold text-xl text-white">Menu for the week of March 18-24, 2024</h1>
            <button className="rounded-full h-8 w-8 border border-white text-white hover:bg-white hover:text-[#F472B6] transition-colors duration-300">
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
              <span className="sr-only">Next week</span>
            </button>
            <button className="ml-auto shrink-0 bg-white text-[#F472B6] hover:bg-[#F472B6] hover:text-white transition-colors duration-300 px-4 py-2 rounded">
              Print
            </button>
          </div>
          <div className="overflow-auto">
            <table className="w-full text-sm bg-white bg-opacity-80 rounded-lg p-4">
              <thead>
                <tr>
                  <th className="w-20 py-2">Day</th>
                  <th className="py-2">Breakfast</th>
                  <th className="py-2">Lunch</th>
                  <th className="py-2">Dinner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Mon</td>
                  <td className="py-2">
                    Omelette
                    <span className="ml-auto inline-block bg-[#F472B6] text-white px-2 py-1 rounded-full">Vegan</span>
                  </td>
                  <td className="py-2">
                    Spaghetti Bolognese
                    <span className="ml-auto inline-block bg-[#F472B6] text-white px-2 py-1 rounded-full">Contains nuts</span>
                  </td>
                  <td className="py-2">
                    Roast Chicken
                    <span className="ml-auto inline-block bg-[#F472B6] text-white px-2 py-1 rounded-full">Gluten-free</span>
                  </td>
                </tr>
                {/* Add more table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;