import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhoWeAre from "@/components/WhoWeAre";
import InternshipCards from "@/components/InternshipCards";
import Header  from "@/components/Header";

import Footer from "@/components/Footer";



export default function HomePage() {
  return (
    <main>
       {/* <Header /> */}
      <HeroSection />
      <Feature />
      <HowItWorks />
      <WhoWeAre />
      <InternshipCards />
           {/* <Footer /> */}

    </main>
  );
}
