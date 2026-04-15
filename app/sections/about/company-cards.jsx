"use client";

import { WarpBlock } from "../../components/terminal";

const experiences = [
  {
    company: "speck",
    role: "co-founder & ceo",
    detail: "ai for sales enablement",
    period: "dec 2023 — jan 2026",
    location: "san francisco, ca",
    logo: "https://speck.sh/_next/image?url=%2Flogos%2Fbg%2Fspeck-square-shadow-512.webp&w=64&q=75",
  },
  {
    company: "anduril",
    role: "software engineer intern",
    detail: "anduril imaging",
    period: "may 2023 — sept 2023",
    location: "boston, ma",
    logo: "/companies/anduril.png",
  },
  {
    company: "ut dallas",
    role: "researcher",
    detail: "applied systems lab · autonomous vehicles",
    period: "aug 2021 — jan 2023",
    location: "dallas, tx",
    logo: "/companies/utd.svg",
  },
  {
    company: "amazon",
    role: "software engineer intern",
    detail: "amazon astro",
    period: "may 2022 — aug 2022",
    location: "san francisco, ca",
    logo: "/companies/amazon.webp",
  },
];

export default function CompanyCards() {
  return (
    <WarpBlock blockIndex={3} prompt="~ ~/site  (0.089s)" command="cat /var/log/career.log">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group flex items-center gap-4 py-3 px-2 border-b border-white/[0.02] last:border-b-0 hover:bg-white/[0.015] transition-colors"
          >
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-[22px] h-[22px] object-contain grayscale brightness-[0.5] opacity-40 group-hover:grayscale-[0.2] group-hover:brightness-100 group-hover:opacity-90 transition-all duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-[13px]">
                  <span className="text-[#d0d0d4] font-semibold">{exp.company}</span>
                  <span className="text-[#6a6a78]"> · {exp.role}</span>
                </span>
                <span className="text-[11px] text-[#3a3a44]">{exp.period}</span>
              </div>
              <div className="text-[11px] text-[#3a3a44] mt-0.5">
                {exp.detail} · {exp.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </WarpBlock>
  );
}
