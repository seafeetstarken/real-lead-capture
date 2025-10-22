import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Divider from "@/components/Divider";
import Properties from "@/components/Properties";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Divider />
      <Benefits />
      <Divider />
      <Properties />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Index;
