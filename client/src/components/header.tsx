import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wrench, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavItems = () => (
    <>
      <button 
        onClick={() => scrollToSection('inicio')}
        className="text-automotive-primary hover:text-automotive-secondary transition-colors font-medium"
      >
        Inicio
      </button>
      <button 
        onClick={() => scrollToSection('servicios')}
        className="text-automotive-primary hover:text-automotive-secondary transition-colors font-medium"
      >
        Servicios
      </button>
      <button 
        onClick={() => scrollToSection('nosotros')}
        className="text-automotive-primary hover:text-automotive-secondary transition-colors font-medium"
      >
        Nosotros
      </button>
      <button 
        onClick={() => scrollToSection('contacto')}
        className="text-automotive-primary hover:text-automotive-secondary transition-colors font-medium"
      >
        Contacto
      </button>
    </>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="automotive-primary text-white p-3 rounded-lg">
              <Wrench className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-automotive-primary">A&C Taller Automotriz</h1>
              <p className="text-sm text-gray-600">Servicio Profesional</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavItems />
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:3126470525" 
              className="hidden md:flex items-center text-automotive-secondary font-semibold hover:text-orange-600 transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              312 647 0525
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-automotive-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="automotive-primary text-white p-2 rounded-lg">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-automotive-primary">A&C Taller</h2>
                      <p className="text-sm text-gray-600">Automotriz</p>
                    </div>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <NavItems />
                  </nav>
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:3126470525" 
                      className="flex items-center text-automotive-secondary font-semibold"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      312 647 0525
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
