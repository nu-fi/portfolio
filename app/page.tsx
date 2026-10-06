import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/hero/Hero";
import MakerProfile from "@/components/profile/MakerProfile";
import ProjectBasket from "@/components/projects/ProjectBasket";
import Toolbox from "@/components/toolbox/Toolbox";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import StitchDivider from "@/components/craft-ui/StitchDivider";

export default function Home() {
  return (
    <main className="px-6 md:px-12 pt-8 overflow-x-hidden flex flex-col min-h-screen relative">
      <Navigation />
      
      {/* Added top padding to account for the fixed navigation */}
      <div className="">
        <Hero />
      </div>
      
      <StitchDivider />
      <MakerProfile />
      <StitchDivider />
      <ProjectBasket />
      <StitchDivider />
      <Toolbox />
      
      <div className="mt-auto">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}