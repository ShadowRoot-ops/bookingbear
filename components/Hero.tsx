"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, type MouseEvent } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const size = isHovered ? 400 : 40;

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
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

  const handleMouseEnter = () => {
    if (isInViewport) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset mask position to center when leaving
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLocalMousePos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  const hoverText =
    "A revolutionary calendar-based booking system for Instagram ads - making it simple to schedule, upload, and launch your campaigns with just a few clicks.";

  return (
    <>
      <style>{`
        .hero-container {
          height: 100vh;
          overflow: hidden;
          background: #0a0a0a;
        }

        .mask-layer,
        .base-layer {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          color: #afa18f;
          font-size: clamp(40px, 6vw, 85px);
          line-height: 1.1;
          cursor: default;
          font-weight: 600;
          letter-spacing: -0.02em;
          padding-top: 120px;
          padding-left: 60px;
        }

        .mask-layer {
          -webkit-mask-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='black'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='black'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: ${size}px;
          mask-size: ${size}px;
          background: #ec4e39;
          position: absolute;
          color: black;
          transition: -webkit-mask-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), mask-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-mask-position: ${localMousePos.x - size / 2}px ${
        localMousePos.y - size / 2
      }px;
          mask-position: ${localMousePos.x - size / 2}px ${
        localMousePos.y - size / 2
      }px;
          opacity: ${isInViewport ? 1 : 0};
          pointer-events: ${isInViewport ? "auto" : "none"};
        }

        .hero-text {
          width: 100%;
          max-width: 1400px;
          text-align: left;
          word-spacing: 0.05em;
        }

        .content-wrapper {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .section-label {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #afa18f;
          margin-bottom: 60px;
        }

        .highlight-word {
          color: #ec4e39;
        }

        .features-container {
          position: absolute;
          bottom: 80px;
          left: 60px;
          display: flex;
          gap: 80px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-title {
          font-size: 16px;
          color: #ec4e39;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .feature-desc {
          font-size: 13px;
          color: #afa18f;
          max-width: 200px;
          line-height: 1.4;
        }

        .pricing-hint {
          position: absolute;
          bottom: 80px;
          right: 60px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .price-label {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .price-range {
          font-size: 24px;
          color: #ec4e39;
          font-weight: 700;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          right: 60px;
          writing-mode: vertical-lr;
          font-size: 12px;
          color: #666;
          letter-spacing: 0.2em;
        }

        @media (max-width: 1024px) {
          .mask-layer,
          .base-layer {
            padding-left: 40px;
            padding-top: 100px;
            font-size: clamp(32px, 8vw, 60px);
          }

          .features-container {
            left: 40px;
            bottom: 120px;
            gap: 60px;
          }

          .pricing-hint {
            right: 40px;
            bottom: 120px;
          }

          .scroll-indicator {
            right: 40px;
            bottom: 80px;
          }
        }

        @media (max-width: 768px) {
          .mask-layer,
          .base-layer {
            font-size: clamp(28px, 10vw, 45px);
            line-height: 1.2;
            font-weight: 500;
            padding-left: 20px;
            padding-top: 80px;
          }

          .section-label {
            margin-bottom: 40px;
          }

          .features-container {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 40px;
            padding-left: 20px;
            gap: 40px;
            flex-direction: column;
          }

          .pricing-hint {
            position: relative;
            bottom: auto;
            right: auto;
            align-items: flex-start;
            padding-left: 20px;
            margin-top: 20px;
          }

          .scroll-indicator {
            display: none;
          }
        }

        /* Prevent text selection issues */
        .hero-text {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>

      {/* Main Hero Section */}
      <section className="relative hero-container" ref={sectionRef}>
        {/* Background */}
        <div className="absolute inset-0"></div>

        {/* Fixed positioned content */}
        <div className="relative h-full">
          {/* Section Label */}
          <div className="absolute left-12 md:left-16 top-12 md:top-16 z-10">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Calendar Booking
            </motion.p>
          </div>

          {/* Service Info */}
          <div className="absolute right-12 md:right-16 top-12 md:top-16 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-[14px] text-[#afa18f] font-bold uppercase tracking-wider">
                Digital Agency
              </p>
              <p className="text-[12px] text-[#666] mt-1">Instagram Ads</p>
            </motion.div>
          </div>

          {/* Main content with mask effect */}
          <motion.div
            className="relative z-12 h-full content-wrapper"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30,
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Masked layer - shows different text on hover */}
            <div className="mask-layer">
              <h1
                className="hero-text"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {hoverText}
              </h1>
            </div>

            {/* Base layer - shows original text */}
            <div className="base-layer">
              <h1
                className="hero-text"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Book your Instagram ad dates through our interactive{" "}
                <span className="highlight-word">calendar</span>. Choose from
                three flexible packages and watch your content reach thousands
                of engaged followers.
              </h1>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="features-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <div className="feature-item">
              <span className="feature-title">Interactive Calendar</span>
              <span className="feature-desc">
                Click dates to check availability and book instantly
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-title">3 Package Options</span>
              <span className="feature-desc">
                Ad placement, boost, or complete package with story
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-title">Easy Upload</span>
              <span className="feature-desc">
                Upload photos, videos, or music directly through our platform
              </span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
          >
            VIEW CALENDAR
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
