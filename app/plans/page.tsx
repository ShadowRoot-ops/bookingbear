"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PlansPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get selected date from localStorage
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setSelectedDate(storedDate);
    } else {
      // If no date selected, redirect back to calendar
      router.push("/calendar");
    }
  }, [router]);

  const plans = [
    {
      id: "basic",
      name: "BASIC",
      price: "299",
      period: "per placement",
      features: [
        "Instagram post placement",
        "24-hour display duration",
        "Basic performance analytics",
        "Standard posting time",
        "Email confirmation",
      ],
      description: "Perfect for simple ad placements and testing campaigns",
      buttonText: "Choose Basic",
      href: "/checkout/basic",
      isPopular: false,
      uploadRequired: false,
    },
    {
      id: "boost",
      name: "BOOST",
      price: "599",
      period: "per campaign",
      features: [
        "Instagram post + boost promotion",
        "48-hour display duration",
        "Content upload included",
        "Enhanced reach & engagement",
        "Priority posting slots",
        "Detailed analytics report",
        "Story mention option",
      ],
      description: "Ideal for growing reach and maximizing engagement",
      buttonText: "Choose Boost",
      href: "/checkout/boost",
      isPopular: true,
      uploadRequired: true,
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "999",
      period: "per campaign",
      features: [
        "Everything in Boost plan",
        "Instagram story promotion",
        "All file types supported",
        "72-hour display duration",
        "Premium posting slots",
        "Dedicated campaign manager",
        "Advanced analytics dashboard",
      ],
      description: "For maximum visibility and comprehensive campaigns",
      buttonText: "Choose Premium",
      href: "/checkout/premium",
      isPopular: false,
      uploadRequired: true,
    },
  ];

  if (!selectedDate) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#afa18f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#ec4e39] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#afa18f]">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
        <Link
          href="/calendar"
          className="inline-flex items-center gap-2 text-[#afa18f] hover:text-[#ec4e39] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Calendar
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#afa18f] mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-[#afa18f] opacity-80 mb-6">
              Select the perfect Instagram advertising package for your needs
            </p>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 inline-block">
              <p className="text-[#ec4e39] font-semibold">
                Selected Date:{" "}
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: plan.isPopular ? -20 : 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.1,
                }}
                className={`
                  rounded-2xl border p-8 bg-[#1a1a1a] text-center flex flex-col relative
                  ${
                    plan.isPopular
                      ? "border-[#ec4e39] border-2 scale-105"
                      : "border-[#333]"
                  }
                  ${!plan.isPopular && "mt-5"}
                `}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#ec4e39] py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                    <Star className="text-white h-4 w-4 fill-current" />
                    <span className="text-white ml-1 font-semibold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#ec4e39] uppercase tracking-wider mb-4">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#afa18f]">
                      ₹{plan.price}
                    </span>
                    <p className="text-sm text-[#afa18f] opacity-70 mt-2">
                      {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-[#ec4e39] mt-1 flex-shrink-0" />
                        <span className="text-left text-sm text-[#afa18f]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#afa18f] opacity-60 mb-6">
                    {plan.description}
                  </p>

                  {plan.uploadRequired && (
                    <div className="bg-[#0a0a0a] border border-[#333] rounded-lg p-3 mb-6">
                      <p className="text-xs text-[#ec4e39] font-semibold">
                        📁 File Upload Required
                      </p>
                    </div>
                  )}

                  <Link
                    href={plan.href}
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                      ${
                        plan.isPopular
                          ? "bg-[#ec4e39] text-white hover:bg-[#ec4e39]/90"
                          : "bg-transparent border border-[#333] text-[#afa18f] hover:border-[#ec4e39] hover:bg-[#ec4e39] hover:text-white"
                      }
                    `}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#afa18f] mb-4">
                All Plans Include
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#ec4e39]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-[#ec4e39]" />
                  </div>
                  <h3 className="font-semibold text-[#afa18f] mb-2">
                    Instant Confirmation
                  </h3>
                  <p className="text-sm text-[#afa18f] opacity-70">
                    Get booking confirmation immediately after payment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#ec4e39]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-[#ec4e39]" />
                  </div>
                  <h3 className="font-semibold text-[#afa18f] mb-2">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-[#afa18f] opacity-70">
                    Safe and secure payment processing with Razorpay
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#ec4e39]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-[#ec4e39]" />
                  </div>
                  <h3 className="font-semibold text-[#afa18f] mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-[#afa18f] opacity-70">
                    Round-the-clock customer support for all bookings
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
