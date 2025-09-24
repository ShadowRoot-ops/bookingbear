"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function BookingBearPricing({
  plans,
  title = "Instagram Ad Booking Plans",
  description = "Choose the perfect package for your Instagram advertising needs\nAll plans include secure booking, instant confirmation, and campaign analytics.",
}: PricingProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-[#0a0a0a] py-20">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl text-[#afa18f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-[#afa18f] opacity-80 text-lg whitespace-pre-line max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.isPopular ? -20 : 0,
                      opacity: 1,
                      x: index === 2 ? -20 : index === 0 ? 20 : 0,
                      scale: index === 0 || index === 2 ? 0.95 : 1.0,
                    }
                  : { y: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.3 + index * 0.1,
                opacity: { duration: 0.5 },
              }}
              className={cn(
                "rounded-2xl border p-8 text-center flex flex-col relative bg-[#1a1a1a]",
                plan.isPopular ? "border-[#ec4e39] border-2" : "border-[#333]",
                !plan.isPopular && "mt-5",
                index === 0 || index === 2 ? "z-0" : "z-10"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#ec4e39] py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-white h-4 w-4 fill-current" />
                  <span className="text-white ml-1 font-sans font-semibold text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <p className="text-lg font-bold text-[#ec4e39] uppercase tracking-wider mb-2">
                  {plan.name}
                </p>

                <div className="mt-6 flex items-center justify-center gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-[#afa18f]">
                    {plan.price}
                  </span>
                </div>

                <p className="text-sm text-[#afa18f] opacity-70 mt-3 mb-8">
                  {plan.period}
                </p>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-[#ec4e39] mt-1 flex-shrink-0" />
                      <span className="text-left text-[#afa18f] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#333]">
                  <Link
                    href={plan.href}
                    className={cn(
                      "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter inline-flex items-center justify-center rounded-lg px-6 py-3 transition-all duration-300",
                      "transform-gpu ring-offset-current ease-out hover:ring-2 hover:ring-[#ec4e39] hover:ring-offset-1",
                      plan.isPopular
                        ? "bg-[#ec4e39] text-white hover:bg-[#ec4e39]/90"
                        : "bg-transparent border border-[#333] text-[#afa18f] hover:border-[#ec4e39] hover:bg-[#ec4e39] hover:text-white"
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </div>

                <p className="mt-6 text-xs leading-5 text-[#afa18f] opacity-60">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// BookingBear specific plans
const bookingBearPlans: PricingPlan[] = [
  {
    name: "BASIC",
    price: "₹299",
    yearlyPrice: "₹299",
    period: "per ad placement",
    features: [
      "Instagram post placement",
      "24-hour display duration",
      "Basic performance analytics",
      "Standard posting time",
      "Email confirmation",
      "Single post format",
    ],
    description: "Perfect for simple ad placements and testing campaigns",
    buttonText: "Book Basic Plan",
    href: "/calendar",
    isPopular: false,
  },
  {
    name: "BOOST",
    price: "₹599",
    yearlyPrice: "₹599",
    period: "per boosted campaign",
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
    buttonText: "Get Boosted",
    href: "/calendar",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: "₹999",
    yearlyPrice: "₹999",
    period: "per premium campaign",
    features: [
      "Everything in Boost plan",
      "Instagram story promotion",
      "All file types supported",
      "72-hour display duration",
      "Premium posting slots",
      "Dedicated campaign manager",
      "Advanced analytics dashboard",
      "Multiple story mentions",
    ],
    description: "For maximum visibility and comprehensive campaigns",
    buttonText: "Go Premium",
    href: "/calendar",
    isPopular: false,
  },
];

export function BookingBearPricingSection() {
  return (
    <BookingBearPricing
      plans={bookingBearPlans}
      title="Instagram Ad Booking Plans"
      description="Choose the perfect package for your Instagram advertising needs\nAll plans include secure booking, instant confirmation, and campaign analytics."
    />
  );
}
