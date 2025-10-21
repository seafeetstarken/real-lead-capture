import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Properties from "@/components/Properties";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Properties />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Index;
