"use client";

import CompanyCards from "./company-cards";
import HackathonCards from "./hackathon-cards";
import OssProjects from "./oss-projects";

export default function About() {
  return (
    <>
      <CompanyCards />
      <OssProjects />
      <HackathonCards />
    </>
  );
}
