"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { WarpBlock } from "../components/terminal";

const socials = [
  { label: "github", href: "https://github.com/raghavpillai", icon: <FaGithub size={14} /> },
  { label: "twitter", href: "https://twitter.com/rag_pil", icon: <FaXTwitter size={14} /> },
  { label: "linkedin", href: "https://www.linkedin.com/in/raghav-pillai/", icon: <FaLinkedin size={14} /> },
];

export default function HeroSection() {
  return (
    <>
      {/* Block 0 */}
      <WarpBlock blockIndex={0} prompt="~ ~/site  (0.032s)" command="whoami">
        <div className="text-[#ebebed] text-2xl md:text-4xl font-bold tracking-tight">
          raghav pillai
        </div>
      </WarpBlock>

      {/* Block 1 */}
      <WarpBlock blockIndex={1} prompt="~ ~/site  (0.015s)" command="cat /etc/motd">
        <div className="text-sm text-[#c0c0c4] leading-relaxed">
          building in the cyber defense industry.
        </div>
        <div className="text-sm text-[#6a6a78] leading-relaxed mt-1">
          previously the co-founder and ceo of{" "}
          <a
            href="https://speck.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9653fb] font-semibold hover:text-[#b07cff] transition-colors"
          >
            speck
          </a>
          {" "}(acquired early 2026). yc alum (w24).
        </div>
      </WarpBlock>

      {/* Block 2 */}
      <WarpBlock blockIndex={2} prompt="~ ~/site  (0.008s)" command="cat ~/.social">
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#444] hover:text-[#9653fb] transition-colors"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </WarpBlock>
    </>
  );
}
