"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowSize, mounted };
};

export const Component = () => {
  const { width, height, mounted } = useWindowSize();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-black"
        )}
      >
        {/* Optional loading placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-red-900" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center"
      )}
    >
      <UnicornScene
        production={true}
        projectId="MiiqZiDaKUOWbdlhlARE"
        width={width}
        height={height}
      />
    </div>
  );
};
