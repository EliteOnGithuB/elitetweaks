import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { ImportantNotes } from "@/components/ImportantNotes";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatsIncluded />
      <Process />
      <Pricing />
      <ImportantNotes />
      <FinalCTA />
    </div>
  );
};

export default Index;
