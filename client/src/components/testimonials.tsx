import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    initials: "CM",
    review: "Excelente servicio, muy profesionales y honestos. Llevé mi carro por problemas de frenos y quedó perfecto. Los recomiendo 100%."
  },
  {
    name: "María González", 
    initials: "MG",
    review: "Muy buen taller, me arreglaron el aire acondicionado y quedó funcionando perfecto. Precios justos y trabajo garantizado."
  },
  {
    name: "Jorge Ramírez",
    initials: "JR", 
    review: "Llevo años siendo cliente de A&C, siempre me han dado un servicio excelente. Son confiables y muy técnicos."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-primary mb-6 automotive-title">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 leading-relaxed">La satisfacción de nuestros clientes es nuestra mejor carta de presentación</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="automotive-neutral shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 automotive-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-automotive-primary">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
