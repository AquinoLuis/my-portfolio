import Hero from "@/components/Hero";
import EditorialTitle from "@/components/EditorialTitle";
import Intro from "@/components/Intro";
import SkillsStack from "@/components/SkillsStack";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#d52727] selection:text-[#e6dcc8] mt-0">
      <Hero />
      <EditorialTitle />
      <Intro />
      <SkillsStack />
      <FeaturedProjects />
    </div>
  );
}
