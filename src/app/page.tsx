import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { EditorialMoments } from "@/components/sections/EditorialMoments";
import { ExpertiseStory } from "@/components/sections/ExpertiseStory";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Registration } from "@/components/sections/Registration";
import { Schedule } from "@/components/sections/Schedule";
import { Tracks } from "@/components/sections/Tracks";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <About />
      <Tracks />
      <ExpertiseStory />
      <Community />
      <Manifesto />
      <EditorialMoments />
      <Schedule />
      <Faq />
      <Registration />
      <SiteFooter />
    </main>
  );
}
