import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Car, 
  Snowflake, 
  Settings, 
  Zap, 
  Gavel 
} from "lucide-react";

const services = [
  {
    icon: <Gavel className="text-2xl" />,
    title: "Mantenimiento Preventivo",
    description: "Cambio de aceite, filtros, revisión general y mantenimiento por kilometraje para alargar la vida útil de tu vehículo.",
    features: [
      "Cambio de aceite y filtros",
      "Revisión mecánica general", 
      "Sincronización de motor"
    ]
  },
  {
    icon: <Car className="text-2xl" />,
    title: "Sistema de Frenos",
    description: "Inspección y reparación completa del sistema de frenos, garantizando tu seguridad en la carretera.",
    features: [
      "Pastillas y discos de freno",
      "Tambores y zapatas",
      "Líquido de frenos"
    ]
  },
  {
    icon: <Snowflake className="text-2xl" />,
    title: "Aire Acondicionado",
    description: "Diagnóstico y reparación completa del sistema de climatización de tu vehículo.",
    features: [
      "Recarga de gas refrigerante",
      "Reparación de compresor",
      "Cambio de filtro polen"
    ]
  },
  {
    icon: <Settings className="text-2xl" />,
    title: "Suspensión y Dirección",
    description: "Reparación de amortiguadores, dirección hidráulica y sistema de suspensión completo.",
    features: [
      "Amortiguadores y resortes",
      "Dirección hidráulica",
      "Alineación y balanceo"
    ]
  },
  {
    icon: <Zap className="text-2xl" />,
    title: "Sistema Eléctrico",
    description: "Diagnóstico con scanner y reparación del sistema eléctrico automotriz.",
    features: [
      "Diagnóstico con scanner",
      "Reparación eléctrica",
      "Baterías y alternador"
    ]
  },
  {
    icon: <Wrench className="text-2xl" />,
    title: "Reparaciones Generales",
    description: "Kit de embrague, correa de distribución, latonería y pintura.",
    features: [
      "Kit de embrague (clutch)",
      "Correa de distribución",
      "Latonería y pintura"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-primary mb-6 automotive-title">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales de mantenimiento y reparación automotriz con tecnología de punta y técnicos certificados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="automotive-light border border-gray-200 hover:shadow-automotive transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="automotive-secondary text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-automotive-primary mb-3 automotive-subtitle">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
