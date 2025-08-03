import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <div className="h-96 bg-gradient-to-br from-[#1B365D] to-[#34495E] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4 text-[#E67E22]">📍</div>
          <h3 className="text-2xl font-bold mb-2">Nuestra Ubicación</h3>
          <p className="text-lg">Carrera 52 #12 Sur-58, Medellín</p>
          <p className="text-sm text-gray-300 mt-2">Google Maps integrado próximamente</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
