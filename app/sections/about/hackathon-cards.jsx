"use client";

import { FaGithub } from "react-icons/fa";
import { WarpBlock } from "../../components/terminal";

const projects = [
  {
    name: "eXpect",
    event: "𝕏AI Hackathon",
    description: "multi-agent simulation to predict realistic human reactions to tweets",
    link: "https://github.com/raghavpillai/eXpect",
    src: "/hackathons/xai.png",
  },
  {
    name: "MindTune",
    event: "HackHarvard 2023",
    description: "detecting early signs of alzheimer's with eye-tracking & cognitive tests",
    link: "https://github.com/raghavpillai/MindTune",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/633/207/datas/gallery.jpg",
  },
  {
    name: "SecondSearch",
    event: "CalHacks 2023",
    description: "vector similarity search across large lecture series",
    link: "https://github.com/KanishkGar/calhacks",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/646/084/datas/gallery.jpg",
  },
  {
    name: "Gold Mine",
    event: "HackUTD X",
    description: "crawling financial and government data to predict company performance",
    link: "https://github.com/NikhilNarvekar123/hackutdgoldman",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/659/761/datas/gallery.jpg",
  },
  {
    name: "Swift Rescue",
    event: "HackRice 13",
    description: "97% accurate flood prediction with optimized routing and real-time maps",
    link: "https://github.com/NikhilNarvekar123/SwiftRescue",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/599/133/datas/gallery.jpg",
  },
  {
    name: "InvestIQ",
    event: "HackSMU V",
    description: "stock sentiment analysis on a decentralized cartesi & gcp platform",
    link: "https://github.com/raghavpillai/InvestIQ",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/595/769/datas/gallery.jpg",
  },
  {
    name: "AAssistant",
    event: "TAMUHack 2023",
    description: "streamlining airline travel with intuitive access to core flight data",
    link: "https://github.com/raghavpillai/AAssistant",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/363/502/datas/gallery.jpg",
  },
  {
    name: "SimpliFarm",
    event: "HackTX 2022",
    description: "ml-based farming optimization for minimum resource utilization",
    link: "https://github.com/raghavpillai/Simplifarm",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/479/datas/gallery.jpg",
  },
  {
    name: "HypeInvest",
    event: "HackUTD VIII",
    description: "social media data to predict stock performance and public sentiment",
    link: "https://github.com/raghavpillai/HypeInvest",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/633/207/datas/gallery.jpg",
  },
];

export default function HackathonCards() {
  return (
    <WarpBlock blockIndex={5} prompt="~ ~/site  (0.127s)" command="ls -la ~/hackathons/">
      <div className="flex flex-col">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex items-start gap-4 py-3 px-2 border-b border-white/[0.02] last:border-b-0 hover:bg-white/[0.015] transition-colors"
          >
            <div className="w-[120px] md:w-[150px] h-[78px] md:h-[95px] flex-shrink-0 overflow-hidden border border-white/[0.04] group-hover:border-[#9653fb]/20 transition-colors duration-300">
              <img
                src={project.src}
                alt={project.name}
                className="w-full h-full object-cover saturate-[0.3] brightness-[0.45] group-hover:saturate-[0.9] group-hover:brightness-[0.95] transition-[filter] duration-400"
              />
            </div>
            <div className="flex-1 min-w-0 py-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#d0d0d4] font-semibold hover:text-[#9653fb] transition-colors"
                  >
                    {project.name}
                  </a>
                  <span className="text-[11px] text-[#3a3a44]">{project.event}</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a2a30] hover:text-[#9653fb] transition-colors flex-shrink-0"
                >
                  <FaGithub size={14} />
                </a>
              </div>
              <p className="text-[11px] text-[#555566] mt-2 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WarpBlock>
  );
}
