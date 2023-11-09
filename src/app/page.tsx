import React from "react";
import AboutMe from "../components/about-me";
import { aboutMe, skills, professionalData } from "../components/page-data";
import ProfessionalExperience from "../components/professional-experience";

export default function Home() {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
}
