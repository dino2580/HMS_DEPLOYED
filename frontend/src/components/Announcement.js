import React from 'react';

export default function Announcement() {
  return (
    <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="grid max-w-5xl gap-6 mx-auto lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 lg:order-2 lg:col-start-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
              Today's Menu
            </h1>
            <p className="text-gray-300 dark:text-gray-400">Wednesday, March 6, 2024</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <h2 className="font-semibold text-white dark:text-gray-100">Breakfast</h2>
              <p className="text-sm text-gray-300 dark:text-gray-400">Aloo Paratha, Bread, Butter, Pickle, Tea</p>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <h2 className="font-semibold text-white dark:text-gray-100">Lunch</h2>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Jeera Rice, Rajma , Aloo Gobi, Chapati, Salad, Sweet
              </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <h2 className="font-semibold text-white dark:text-gray-100">Snacks</h2>
              <p className="text-sm text-gray-300 dark:text-gray-400">(nhi milta )</p>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <h2 className="font-semibold text-white dark:text-gray-100">Dinner</h2>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Veg Biryani, ghiya, Raita, Chapati, Salad, Ice Cream
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
              Announcements
            </h1>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">New House Rules for Common Room</h2>
              <p className="text-gray-300 dark:text-gray-400">Posted 2 hours ago</p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">New House Rules for Common Room</h2>
              <p className="text-gray-300 dark:text-gray-400">Posted 2 hours ago</p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">New House Rules for Common Room</h2>
              <p className="text-gray-300 dark:text-gray-400">Posted 2 hours ago</p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">Upcoming Trip to the Mountains</h2>
              <p className="text-gray-300 dark:text-gray-400">Posted 1 day ago</p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">Movie Night in the Hostel Auditorium</h2>
              <p className="text-gray-300 dark:text-gray-400">Posted 3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
