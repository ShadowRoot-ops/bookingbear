"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const router = useRouter();

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date >= today && date.getMonth() === currentMonth.getMonth()) {
      const dateString = date.toISOString().split("T")[0];
      setSelectedDate(dateString);

      // Store selected date in localStorage or sessionStorage for plan pages
      localStorage.setItem("selectedDate", dateString);

      // Navigate to plan selection page
      router.push("/plans");
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(
      currentMonth.getMonth() + (direction === "next" ? 1 : -1)
    );
    setCurrentMonth(newMonth);
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getMonth() === currentMonth.getMonth();
  };

  const days = generateCalendarDays();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#afa18f]">
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen">
        <motion.p
          className="text-[#ec4e39] font-bold uppercase py-1 rounded-full mt-20 text-sm tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Instagram Ad Booking
        </motion.p>

        <motion.h1
          className="text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 text-[#afa18f]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Select your perfect booking date
        </motion.h1>

        <motion.p
          className="max-w-lg mt-4 text-sm text-[#afa18f] md:text-base opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Choose an available date from our calendar and select the perfect
          Instagram ad package for your content. Start reaching thousands of
          engaged followers today.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xs text-[#666] uppercase tracking-wider mb-4">
            Scroll to view calendar
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-[#ec4e39] to-transparent"></div>
        </motion.div>
      </div>

      {/* Calendar Section */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#afa18f]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => navigateMonth("prev")}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-[#afa18f] hover:text-[#ec4e39] hover:border-[#ec4e39] transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => navigateMonth("next")}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-[#afa18f] hover:text-[#ec4e39] hover:border-[#ec4e39] transition-colors"
              >
                Next
              </button>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-[#666] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((date, index) => {
                const isAvailable = isDateAvailable(date);
                const isSelected =
                  selectedDate === date.toISOString().split("T")[0];
                const isCurrentMonth =
                  date.getMonth() === currentMonth.getMonth();

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    disabled={!isAvailable}
                    className={`
                      aspect-square p-2 rounded-lg text-sm font-medium transition-all relative
                      ${
                        isSelected
                          ? "bg-[#ec4e39] text-white"
                          : isAvailable
                          ? "bg-[#2a2a2a] text-[#afa18f] hover:bg-[#ec4e39] hover:text-white"
                          : "bg-transparent text-[#444] cursor-not-allowed"
                      }
                      ${!isCurrentMonth ? "opacity-30" : ""}
                    `}
                    whileHover={isAvailable ? { scale: 1.05 } : {}}
                    whileTap={isAvailable ? { scale: 0.95 } : {}}
                  >
                    {date.getDate()}
                    {isAvailable && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#ec4e39] rounded-full opacity-60"></div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ec4e39] rounded-full"></div>
              <span className="text-[#afa18f]">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#444] rounded-full"></div>
              <span className="text-[#666]">Unavailable</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;
