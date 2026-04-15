"use client";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111114] border-t border-white/[0.03]">
      <div className="flex items-center justify-between px-4 md:px-6 py-1.5 border-b border-white/[0.03] text-[11px]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="text-[#28c840]">@</span>
            <span className="text-[#555]">v1.0</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#666]">⊙</span>
            <span className="text-[#555]">~/site</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#9653fb]">⊘</span>
            <span className="text-[#555]">main</span>
          </span>
        </div>
        <span className="text-[#3a3a3a]">san francisco</span>
      </div>
      <div className="flex items-center px-4 md:px-6 py-2.5">
        <span className="text-[#9653fb] text-[13px] mr-2">$</span>
        <span className="text-[13px] text-[#444] cursor" />
      </div>
    </div>
  );
}
