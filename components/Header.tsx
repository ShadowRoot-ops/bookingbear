"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Logo from "@/components/Logo";
import { LiquidButton } from "@/components/liquid-glass-button";
import { Component as RaycastBackground } from "@/components/raycast-red-blue-animated-background";

interface PerspectiveTextProps {
  label: string;
}

interface Link {
  title: string;
  href: string;
}

// Side Menu Component
const SideMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const menu: Variants = {
    open: {
      width: "min(450px, 85vw)",
      height: "min(600px, 85vh)",
      top: "-20px",
      right: "-20px",
      transition: { duration: 0.6, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "90px",
      height: "35px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.6,
        delay: 0.3,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // BookingBear navigation links
  const links: Link[] = [
    { title: "Calendar", href: "/calendar" },
    { title: "Pricing", href: "#pricing" },
    { title: "Templates", href: "#templates" },
    { title: "Analytics", href: "#analytics" },
    { title: "Contact", href: "#contact" },
  ];

  // BookingBear footer links
  const footerLinks: Link[] = [
    { title: "Instagram", href: "/" },
    { title: "Twitter", href: "/" },
    { title: "LinkedIn", href: "/" },
  ];

  // Navigation component
  const Navigation = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding:
          "clamp(60px, 15vw, 80px) clamp(20px, 8vw, 40px) clamp(30px, 8vw, 50px) clamp(20px, 8vw, 40px)",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "clamp(8px, 2vw, 12px)",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "clamp(20px, 5vw, 30px)" }}>
          <h2
            style={{
              color: "#afa18f",
              fontSize: "clamp(12px, 3vw, 14px)",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              margin: "0 0 8px 0",
            }}
          >
            BookingBear
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "clamp(10px, 2.5vw, 12px)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Instagram Ad Booking Platform
          </p>
        </div>

        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              style={{
                perspective: "120px",
                perspectiveOrigin: "bottom",
                overflow: "hidden",
              }}
            >
              <motion.div
                custom={i}
                variants={{
                  initial: {
                    opacity: 0,
                    rotateX: 90,
                    translateY: 80,
                    translateX: -20,
                  },
                  enter: {
                    opacity: 1,
                    rotateX: 0,
                    translateY: 0,
                    translateX: 0,
                    transition: {
                      duration: 0.65,
                      delay: 0.5 + i * 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                      opacity: { duration: 0.35 },
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      type: "tween",
                      ease: [0.76, 0, 0.24, 1],
                    },
                  },
                }}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a
                  href={href}
                  style={{
                    textDecoration: "none",
                    color: "#0a0a0a",
                    fontSize: "clamp(24px, 6vw, 38px)",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    display: "block",
                    lineHeight: 1.2,
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#ec4e39")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#0a0a0a")
                  }
                >
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              key={`f_${i}`}
              href={href}
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.75 + i * 0.1,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeInOut",
                  },
                },
              }}
              initial="initial"
              animate="enter"
              exit="exit"
              style={{
                width: "50%",
                marginTop: "5px",
                textDecoration: "none",
                color: "#666",
                fontSize: "clamp(11px, 3vw, 14px)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#ec4e39")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#666")
              }
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );

  // Button component with perspective text
  const PerspectiveText: React.FC<PerspectiveTextProps> = ({ label }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <p
        style={{
          margin: 0,
          transition: "all 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          pointerEvents: "none",
          textTransform: "uppercase",
          fontSize: "clamp(11px, 3vw, 13px)",
          fontWeight: "bold",
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: 0,
          position: "absolute",
          transformOrigin: "bottom center",
          transform: "rotateX(-90deg) translateY(9px)",
          opacity: 0,
          transition: "all 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          pointerEvents: "none",
          textTransform: "uppercase",
          fontSize: "clamp(11px, 3vw, 13px)",
          fontWeight: "bold",
        }}
      >
        {label}
      </p>
    </div>
  );

  const MenuButton = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "90px",
        height: "35px",
        cursor: "pointer",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.4, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ec4e39",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
          onClick={() => setIsActive(!isActive)}
          onMouseEnter={(e) => {
            const perspectiveText = (
              e.currentTarget as HTMLElement
            ).querySelector(".perspective-text") as HTMLElement;
            if (perspectiveText) {
              perspectiveText.style.transform = "rotateX(90deg)";
              const firstP = perspectiveText.querySelector(
                "p:first-child"
              ) as HTMLElement;
              const secondP = perspectiveText.querySelector(
                "p:last-child"
              ) as HTMLElement;
              if (firstP && secondP) {
                firstP.style.transform = "translateY(-100%)";
                firstP.style.opacity = "0";
                secondP.style.opacity = "1";
              }
            }
          }}
          onMouseLeave={(e) => {
            const perspectiveText = (
              e.currentTarget as HTMLElement
            ).querySelector(".perspective-text") as HTMLElement;
            if (perspectiveText) {
              perspectiveText.style.transform = "rotateX(0deg)";
              const firstP = perspectiveText.querySelector(
                "p:first-child"
              ) as HTMLElement;
              const secondP = perspectiveText.querySelector(
                "p:last-child"
              ) as HTMLElement;
              if (firstP && secondP) {
                firstP.style.transform = "translateY(0)";
                firstP.style.opacity = "1";
                secondP.style.opacity = "0";
              }
            }
          }}
        >
          <div className="perspective-text">
            <PerspectiveText label="Menu" />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ec4e39",
          }}
          onClick={() => setIsActive(!isActive)}
          onMouseEnter={(e) => {
            const perspectiveText = (
              e.currentTarget as HTMLElement
            ).querySelector(".perspective-text") as HTMLElement;
            if (perspectiveText) {
              perspectiveText.style.transform = "rotateX(90deg)";
              const firstP = perspectiveText.querySelector(
                "p:first-child"
              ) as HTMLElement;
              const secondP = perspectiveText.querySelector(
                "p:last-child"
              ) as HTMLElement;
              if (firstP && secondP) {
                firstP.style.transform = "translateY(-100%)";
                firstP.style.opacity = "0";
                secondP.style.opacity = "1";
              }
            }
          }}
          onMouseLeave={(e) => {
            const perspectiveText = (
              e.currentTarget as HTMLElement
            ).querySelector(".perspective-text") as HTMLElement;
            if (perspectiveText) {
              perspectiveText.style.transform = "rotateX(0deg)";
              const firstP = perspectiveText.querySelector(
                "p:first-child"
              ) as HTMLElement;
              const secondP = perspectiveText.querySelector(
                "p:last-child"
              ) as HTMLElement;
              if (firstP && secondP) {
                firstP.style.transform = "translateY(0)";
                firstP.style.opacity = "1";
                secondP.style.opacity = "0";
              }
            }
          }}
        >
          <div className="perspective-text">
            <PerspectiveText label="Close" />
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(15px, 4vw, 25px)",
        top: "clamp(15px, 4vw, 25px)",
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: "450px",
          height: "600px",
          backgroundColor: "#afa18f",
          borderRadius: "20px",
          position: "relative",
          border: "2px solid #ec4e39",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && <Navigation />}
      </motion.div>
      <MenuButton />
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navigation colors
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Side Menu */}
      <SideMenu />

      {/* Fixed Header - Transparent */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Logo variant="icon" />
            </div>

            {/* Desktop Navigation - Simplified */}
            <nav className="hidden lg:flex items-center space-x-12">
              <motion.a
                href="/calendar"
                className={`text-sm font-light tracking-wider transition-colors duration-300 relative group ${
                  isScrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                CALENDAR
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </motion.a>
              <motion.a
                href="#pricing"
                className={`text-sm font-light tracking-wider transition-colors duration-300 relative group ${
                  isScrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                PRICING
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </motion.a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - BOOKING BEAR Layout */}
      <section className="min-h-screen text-white flex flex-col justify-center relative overflow-hidden">
        {/* UnicornStudio Raycast Background - Fixed to this section only */}
        <div className="absolute inset-0 z-0">
          <RaycastBackground />
        </div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>

        {/* Container for all content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* First Line - BOOKING (comes from above AFTER lines) */}
          <div className="flex items-center justify-start mb-8 lg:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tight leading-none drop-shadow-2xl"
              style={{
                fontFamily: "Arial Black, sans-serif",
                color: "#f5f5f5",
              }}
            >
              BOOKING
            </motion.h1>
          </div>

          {/* Second Line - BEAR (comes from below AFTER lines) */}
          <div className="flex items-center justify-end mb-8 lg:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tight leading-none drop-shadow-2xl"
              style={{
                fontFamily: "Arial Black, sans-serif",
                color: "transparent",
                WebkitTextStroke: "2px #f5f5f5",
              }}
            >
              BEAR
            </motion.h1>
          </div>
        </div>

        {/* Subtitle and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="container mx-auto px-6 lg:px-12 relative z-10"
        >
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <p className="text-sm lg:text-base text-gray-200 leading-relaxed mb-8 drop-shadow-lg">
              Premium Instagram ad booking platform for digital agencies and
              content creators. Book your slot today.
            </p>
            <div className="flex justify-center lg:justify-start">
              <LiquidButton
                className="text-white border rounded-full"
                size={"xl"}
              >
                Book Ad Slot
              </LiquidButton>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>
    </>
  );
};

export default Header;
