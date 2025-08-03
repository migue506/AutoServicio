import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative automotive-primary text-white py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono tracking-tight">
            Expertos en 
            <span className="text-automotive-secondary block mt-2">Servicio Automotriz</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Más de 15 años brindando mantenimiento y reparación profesional para todas las marcas de vehículos en Medellín
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="automotive-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-colors"
            >
              Solicitar Cotización
            </Button>
            <Button 
              onClick={() => scrollToSection('servicios')}
              className="bg-white text-automotive-primary border-2 border-white hover:bg-transparent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
