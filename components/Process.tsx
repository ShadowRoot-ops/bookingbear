"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const Process = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Luxury Hero Section with TextRevealCard */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold tracking-wider uppercase">
                The Process
              </span>
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Simple booking process"
              revealText="Instagram growth made easy"
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-orange-500/20"
            >
              <TextRevealCardTitle className="text-[#afa18f] text-xl">
                Sometimes, you just need to see the process.
              </TextRevealCardTitle>
              <TextRevealCardDescription className="text-[#afa18f]/70">
                Hover over the card to discover how BookingBear transforms your
                Instagram marketing journey.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#afa18f] mb-6">
              Interactive <span className="text-orange-500">Booking Flow</span>
            </h2>
            <p className="text-xl text-[#afa18f]/70 max-w-3xl mx-auto">
              Experience our streamlined 4-step process that connects your
              booking to campaign success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <DatabaseWithRestApi
              className="mx-auto"
              circleText="STEP 1"
              badgeTexts={{
                first: "SELECT",
                second: "DATE",
                third: "TIME",
                fourth: "CONFIRM",
              }}
              buttonTexts={{
                first: "Calendar",
                second: "Available",
              }}
              title="Interactive Calendar Selection System"
              lightColor="#ff8c47"
            />

            <DatabaseWithRestApi
              className="mx-auto"
              circleText="STEP 2"
              badgeTexts={{
                first: "₹299",
                second: "₹599",
                third: "₹1000",
                fourth: "SELECT",
              }}
              buttonTexts={{
                first: "Packages",
                second: "Plans",
              }}
              title="Choose Your Growth Package Plan"
              lightColor="#ff8c47"
            />

            <DatabaseWithRestApi
              className="mx-auto"
              circleText="STEP 3"
              badgeTexts={{
                first: "PHOTO",
                second: "VIDEO",
                third: "MUSIC",
                fourth: "UPLOAD",
              }}
              buttonTexts={{
                first: "Content",
                second: "Media",
              }}
              title="Content Upload & Organization System"
              lightColor="#ff8c47"
            />

            <DatabaseWithRestApi
              className="mx-auto"
              circleText="STEP 4"
              badgeTexts={{
                first: "SECURE",
                second: "PAY",
                third: "CONFIRM",
                fourth: "DONE",
              }}
              buttonTexts={{
                first: "Payment",
                second: "Gateway",
              }}
              title="Secure Payment & Confirmation Process"
              lightColor="#ff8c47"
            />
          </div>
        </div>
      </section>

      {/* Luxury Results Section */}

      {/* Luxury CTA Section */}
    </div>
  );
};

interface LuxuryInfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const LuxuryInfoCard = ({
  icon: Icon,
  title,
  description,
}: LuxuryInfoCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-orange-500/20 rounded-2xl p-8 text-center hover:border-orange-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden relative backdrop-blur-sm group">
      <GlowingEffect
        disabled={false}
        glow={true}
        proximity={100}
        spread={35}
        variant="default"
        blur={2}
        className="rounded-2xl"
      />
      <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-10 h-10 text-orange-500" />
      </div>
      <h4 className="text-xl font-bold text-[#afa18f] mb-4">{title}</h4>
      <p className="text-[#afa18f]/70 leading-relaxed">{description}</p>

      {/* Decorative corner element */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500/50 rounded-full"></div>
    </div>
  );
};

export default Process;
