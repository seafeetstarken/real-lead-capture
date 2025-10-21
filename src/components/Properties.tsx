import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize, BedDouble } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Apartamento Vista Mar",
    location: "Barra Sul, Balneário Camboriú",
    area: "180m²",
    bedrooms: "3 Suítes",
    description: "Luxuoso apartamento com vista panorâmica do mar, acabamento premium."
  },
  {
    image: property2,
    title: "Cobertura Duplex Premium",
    location: "Centro, Balneário Camboriú",
    area: "350m²",
    bedrooms: "4 Suítes",
    description: "Cobertura duplex com piscina privativa e terraço gourmet exclusivo."
  },
  {
    image: property3,
    title: "Penthouse Moderno",
    location: "Praia Brava, Balneário Camboriú",
    area: "220m²",
    bedrooms: "3 Suítes",
    description: "Design contemporâneo com cozinha gourmet e área de lazer completa."
  }
];

const Properties = () => {
  const whatsappNumber = "5547330843390";
  
  const handlePropertyInterest = (propertyTitle: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no imóvel: ${propertyTitle}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="imoveis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Imóveis <span className="text-secondary">Exclusivos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção especial de imóveis com localização privilegiada e alto padrão de acabamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-primary-foreground/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1 text-secondary" />
                    {property.area}
                  </div>
                  <div className="flex items-center">
                    <BedDouble className="w-4 h-4 mr-1 text-secondary" />
                    {property.bedrooms}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {property.description}
                </p>
                <Button 
                  className="w-full" 
                  variant="hero"
                  onClick={() => handlePropertyInterest(property.title)}
                >
                  Tenho Interesse
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
