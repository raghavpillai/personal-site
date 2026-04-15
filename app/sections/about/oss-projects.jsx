"use client";

import { FaGithub } from "react-icons/fa";
import { WarpBlock } from "../../components/terminal";

const projects = [
  {
    name: "branchlet",
    description: "a simple CLI git worktree manager",
    url: "https://github.com/raghavpillai/branchlet",
  },
  {
    name: "gen-commit",
    description: "automatically generate git commit messages",
    url: "https://github.com/raghavpillai/gen-commit",
  },
  {
    name: "fleet",
    description: "web interface for claude code sessions",
    url: "https://github.com/raghavpillai/fleet",
  },
  {
    name: "rockbed",
    description: "self-hosted bedrock api key management, usage tracking, and cost monitoring",
    url: "https://github.com/raghavpillai/rockbed",
  },
  {
    name: "mosh-buddy",
    description: "mosh connection manager",
    url: "https://github.com/raghavpillai/mosh-buddy",
  },
];

export default function OssProjects() {
  return (
    <WarpBlock blockIndex={4} prompt="~ ~/site  (0.045s)" command="gh repo list --public">
      <div className="flex flex-col">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex items-center gap-4 py-3 px-2 border-b border-white/[0.02] last:border-b-0 hover:bg-white/[0.015] transition-colors"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <FaGithub size={16} className="text-[#3a3a44] group-hover:text-[#9653fb] transition-colors" />
            </a>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#d0d0d4] font-semibold hover:text-[#9653fb] transition-colors"
                >
                  {project.name}
                </a>
              </div>
              <p className="text-[11px] text-[#555566] mt-0.5 truncate">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WarpBlock>
  );
}
