import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Divider from "@/components/Divider";
import Properties from "@/components/Properties";
import LeadForm from "@/components/LeadForm";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
      <Ecosystem />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
