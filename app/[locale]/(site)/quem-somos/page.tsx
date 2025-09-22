import { AboutHero } from "@/components/sections/about/AboutHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { MissionVisionSection } from "@/components/sections/about/MissionVisionSection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <main className="container mx-auto px-4 md:px-6">
        <StorySection />
        <MissionVisionSection />
        <TimelineSection />
        <TeamSection />
        <AboutCTA />
      </main>
    </>
  );
}