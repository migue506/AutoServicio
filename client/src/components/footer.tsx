import { Wrench, Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="automotive-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="@assets/image_1754187194921.png" 
                alt="A&C Taller Automotriz Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-bold">A&C Taller Automotriz</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas en mantenimiento y reparación automotriz con más de 15 años de experiencia en Medellín.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/taller_automotrizayc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-automotive-secondary hover:text-orange-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="tel:3126470525" 
                className="text-automotive-secondary hover:text-orange-300 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-automotive-secondary">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mantenimiento Preventivo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sistema de Frenos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Aire Acondicionado
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Suspensión y Dirección
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sistema Eléctrico
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-automotive-secondary">Información</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
              <li><span className="text-gray-400">NIT: 901677609-9</span></li>
              <li><span className="text-gray-400">SAS Constituida</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-automotive-secondary">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-automotive-secondary" /> 
                312 647 0525
              </p>
              <p className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-automotive-secondary mt-1" /> 
                <span>
                  Carrera 52 #12 Sur-58<br />
                  Medellín, Antioquia
                </span>
              </p>
              <p className="flex items-start">
                <Clock className="mr-2 h-4 w-4 text-automotive-secondary mt-1" /> 
                <span>
                  Lun-Vie: 7AM-6PM<br />
                  Sáb: 8AM-4PM
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 A&C Taller Automotriz SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
