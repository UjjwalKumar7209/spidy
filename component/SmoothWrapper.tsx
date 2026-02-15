'use client'

import { useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothWrapper({ children }: { children: ReactNode }) {

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
