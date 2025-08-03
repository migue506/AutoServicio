import { Badge, Shield, Wrench } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-20 automotive-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 automotive-title">¿Por qué elegir A&C Taller Automotriz?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Somos una empresa especializada en mantenimiento y reparación de vehículos automotores, 
              comprometidos con la excelencia y la satisfacción de nuestros clientes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Badge className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 automotive-subtitle">Técnicos Certificados</h3>
                  <p className="text-gray-300">Personal altamente capacitado con experiencia en todas las marcas de vehículos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Wrench className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 automotive-subtitle">Equipos Especializados</h3>
                  <p className="text-gray-300">Tecnología de punta para diagnósticos precisos y reparaciones de calidad.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 automotive-subtitle">Garantía Total</h3>
                  <p className="text-gray-300">Cobertura completa en mano de obra y repuestos utilizados.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Equipo de diagnóstico automotriz moderno" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-automotive-secondary">15+</div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-automotive-secondary">2000+</div>
                <div className="text-sm text-gray-300">Clientes Satisfechos</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-automotive-secondary">24/7</div>
                <div className="text-sm text-gray-300">Atención Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
