"use client";

import { SequenceProvider } from "./components/terminal";
import About from "./sections/about/about";
import Footer from "./sections/footer";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <SequenceProvider>
      <div className="flex flex-col min-h-screen">
        {/* Title Bar */}
        <div className="h-10 bg-[#141416] border-b border-white/[0.03] flex items-center px-4 sticky top-0 z-50">
          <div className="flex items-center gap-[7px]">
            <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-[11px] text-[#444] pr-[60px] select-none tracking-wide">
            raghav — ~/site
          </span>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 pb-24">
          <Hero />
          <About />
        </div>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </SequenceProvider>
  );
}
