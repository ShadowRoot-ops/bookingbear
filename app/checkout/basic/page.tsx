"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Calendar,
  Clock,
  BarChart3,
  Mail,
  ArrowLeft,
} from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

const BasicPlanPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2024-03-15"); // This would come from URL params

  const handlePayment = () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      const bookingId = `BKG${Date.now()}`;
      alert(`Payment Successful! Booking ID: ${bookingId}`);
      setIsLoading(false);
    }, 2000);
  };

  const planFeatures = [
    {
      icon: <Calendar className="w-5 h-5 text-[#ec4e39]" />,
      title: "Instagram Post Placement",
      description: "Single post on our Instagram account with your content",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ec4e39]" />,
      title: "24-Hour Display",
      description: "Your ad will be live for a full 24 hours",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#ec4e39]" />,
      title: "Basic Analytics",
      description: "Get basic performance metrics after the campaign",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#ec4e39]" />,
      title: "Email Confirmation",
      description: "Instant booking confirmation via email",
    },
  ];

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
        <div className="max-w-4xl mx-auto">
          {/* Plan Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-2 mb-6">
              <span className="text-[#ec4e39] font-bold uppercase text-sm tracking-wider">
                Basic Plan
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#afa18f] mb-4">
              ₹299
            </h1>

            <p className="text-xl text-[#afa18f] opacity-80 mb-2">
              Per Instagram Post Placement
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

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {planFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#ec4e39]/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-[#afa18f] font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#afa18f] opacity-70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* What's Included */}
          <motion.div
            className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#afa18f] mb-6">
              What's Included in Basic Plan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Single Instagram post placement",
                "24-hour campaign duration",
                "Standard posting time slot",
                "Basic performance analytics",
                "Email confirmation & updates",
                "Customer support via email",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ec4e39] flex-shrink-0" />
                  <span className="text-[#afa18f] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            className="bg-[#ec4e39]/10 border border-[#ec4e39]/30 rounded-xl p-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-[#ec4e39] font-semibold mb-3">
              📝 Important Note
            </h3>
            <p className="text-[#afa18f] text-sm opacity-90">
              The Basic Plan does not include content upload functionality.
              You'll need to provide your content details via email after
              booking confirmation. Our team will handle the posting process for
              you.
            </p>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#afa18f] mb-4">
                Ready to Book?
              </h2>
              <p className="text-[#afa18f] opacity-70 mb-8">
                Secure your Instagram ad slot for the selected date
              </p>

              <div className="max-w-md mx-auto">
                <div className="bg-[#0a0a0a] rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#afa18f]">Basic Plan</span>
                    <span className="text-[#afa18f] font-bold">₹299</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#afa18f] opacity-70">
                      Platform Fee
                    </span>
                    <span className="text-[#afa18f] opacity-70">₹0</span>
                  </div>
                  <div className="border-t border-[#333] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#afa18f] font-bold">Total</span>
                      <span className="text-[#ec4e39] font-bold text-xl">
                        ₹299
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-[#ec4e39] text-white py-4 text-lg font-semibold hover:bg-[#ec4e39]/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    `Pay ₹299 Now`
                  )}
                </Button>

                <p className="text-xs text-[#afa18f] opacity-60 mt-4">
                  Secure payment powered by Razorpay. Your booking will be
                  confirmed instantly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BasicPlanPage;
