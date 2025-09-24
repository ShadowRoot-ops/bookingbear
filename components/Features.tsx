"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, type MouseEvent } from "react";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const size = hoveredFeature !== null ? 300 : 30;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) observer.observe(sectionNode);

    return () => {
      if (sectionNode) observer.unobserve(sectionNode);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && isInViewport) {
      const rect = containerRef.current.getBoundingClientRect();
      setLocalMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredFeature(null);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLocalMousePos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  const features = [
    {
      id: 1,
      title: "INTERACTIVE BOOKING CALENDAR",
      description:
        "Click any date to check real-time availability for your Instagram ad campaigns",
    },
    {
      id: 2,
      title: "THREE FLEXIBLE PLANS",
      description:
        "₹299 for standard placement, ₹599 for boost, ₹999 for premium package",
    },
    {
      id: 3,
      title: "EASY CONTENT UPLOAD",
      description:
        "Upload photos, videos, or music directly through our secure platform",
    },
    {
      id: 4,
      title: "SECURE CHECKOUT SYSTEM",
      description:
        "Complete payment integration with instant transaction confirmation",
    },
    {
      id: 5,
      title: "INSTAGRAM AD PLACEMENT",
      description:
        "Reach thousands of engaged followers through strategic ad placements",
    },
    {
      id: 6,
      title: "PERFORMANCE TRACKING",
      description:
        "Track your ad performance with detailed analytics and insights",
    },
  ];

  const getHoverText = () => {
    if (hoveredFeature) {
      const feature = features.find((f) => f.id === hoveredFeature);
      return feature
        ? `${feature.title}\n\n${feature.description}`
        : "BookingBear - Instagram Ad Booking Made Simple";
    }
    return "BookingBear - Instagram Ad Booking Made Simple";
  };

  return (
    <>
      <style jsx>{`
        .mask-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ec4e39;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='black'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='black'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: ${size}px;
          mask-size: ${size}px;
          -webkit-mask-position: ${localMousePos.x - size / 2}px
            ${localMousePos.y - size / 2}px;
          mask-position: ${localMousePos.x - size / 2}px
            ${localMousePos.y - size / 2}px;
          transition: -webkit-mask-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1),
            mask-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
          opacity: ${isInViewport ? 1 : 0};
          pointer-events: none;
          z-index: 50;
        }
      `}</style>

      <div
        className="min-h-screen bg-[#0a0a0a] relative overflow-hidden"
        ref={sectionRef}
      >
        {/* Cursor Mask Layer */}
        <div className="mask-layer">
          <div className="flex flex-col justify-center min-h-screen px-8 lg:px-24 py-16">
            <motion.div
              className="mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm font-bold letter-spacing-[0.3em] uppercase text-black mb-4">
                BookingBear Features
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                INSTAGRAM AD BOOKING
                <br />
                MADE SIMPLE
              </h2>
            </motion.div>

            <div className="flex-1 max-w-6xl">
              <p className="text-xl lg:text-2xl text-black leading-relaxed max-w-4xl whitespace-pre-line">
                {getHoverText()}
              </p>
            </div>
          </div>
        </div>

        {/* Stats - Right Side */}
        {/* <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex flex-col gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-2xl font-bold text-[#ec4e39] mb-2">
              ₹299 - ₹999
            </div>
            <div className="text-xs text-[#666] uppercase tracking-wider">
              Flexible Pricing
            </div>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-2xl font-bold text-[#ec4e39] mb-2">10K+</div>
            <div className="text-xs text-[#666] uppercase tracking-wider">
              Active Followers
            </div>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-2xl font-bold text-[#ec4e39] mb-2">24/7</div>
            <div className="text-xs text-[#666] uppercase tracking-wider">
              Booking Available
            </div>
          </motion.div>
        </motion.div> */}

        {/* Main Content */}
        <div
          className="flex flex-col justify-center min-h-screen px-8 lg:px-24 py-16 relative z-20"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Section Header */}
          <motion.div
            className="mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-bold letter-spacing-[0.3em] uppercase text-[#afa18f] mb-4">
              BookingBear Features
            </p>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#afa18f] leading-tight">
              INSTAGRAM AD <span className="text-[#ec4e39]">BOOKING</span>
              <br />
              MADE SIMPLE
            </h2>
          </motion.div>

          {/* Features List */}
          <div className="flex-1 max-w-6xl">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Divider Line */}
                {index > 0 && <div className="h-px bg-[#222] w-full mb-1" />}

                {/* Feature Row */}
                <div
                  className="relative py-6 lg:py-8 cursor-pointer group"
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Background Highlight Bar */}
                  <AnimatePresence>
                    {hoveredFeature === feature.id && (
                      <motion.div
                        className="absolute inset-0 bg-[#ec4e39] rounded-none"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        layoutId="highlight"
                      />
                    )}
                  </AnimatePresence>

                  {/* Content Container */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Left Side - Title Only */}
                    <div className="flex items-center flex-1">
                      <h3
                        className={`text-2xl lg:text-4xl xl:text-5xl font-bold transition-all duration-300 ${
                          hoveredFeature === feature.id
                            ? "opacity-0"
                            : "text-[#afa18f]"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    {/* Right Side - Description */}
                    <AnimatePresence>
                      {hoveredFeature === feature.id && (
                        <motion.div
                          className="flex-1 max-w-md ml-8 hidden lg:block"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-[#0a0a0a] font-medium text-lg leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Description */}
                  <AnimatePresence>
                    {hoveredFeature === feature.id && (
                      <motion.div
                        className="lg:hidden mt-4 relative z-10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-[#0a0a0a] font-medium text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
