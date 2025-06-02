import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import DesignBasics from "@/components/DesignBasics";
import Tools from "@/components/Tools";
import CareerInfo from "@/components/CareerInfo";
import Examples from "@/components/Examples";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <Hero />
      <CareerInfo />
      <DesignBasics />
      <Tools />
      <Examples />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
