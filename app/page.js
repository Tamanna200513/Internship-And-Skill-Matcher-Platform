
import HeroSection  from "@/components/Home/HeroSection";
import Feature from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Feature />
      <HowItWorks />
      <>
      {/* <CompanyCards /> */}

      <div style={{ marginTop: "80px" }}></div> {/* 👈 gap */}

      <WhoWeAre />
    </>

    </main>
  );
}




