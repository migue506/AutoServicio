import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  vehiculo: z.string().min(2, "Por favor ingresa la marca y modelo del vehículo"),
  servicio: z.string().min(1, "Por favor selecciona un servicio"),
  mensaje: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      vehiculo: "",
      servicio: "",
      mensaje: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-20 automotive-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
            <p className="text-xl mb-8 text-gray-200">
              Estamos ubicados en el corazón de Medellín, listos para atender tu vehículo con la mejor calidad y servicio.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                  <p className="text-gray-300">Carrera 52 #12 Sur-58<br />Medellín, Antioquia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                  <p className="text-gray-300">312 647 0525</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Clock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horarios</h3>
                  <p className="text-gray-300">
                    Lunes a Viernes: 7:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 4:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="automotive-secondary p-3 rounded-lg">
                  <Instagram className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
                  <a 
                    href="https://www.instagram.com/taller_automotrizayc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-automotive-secondary hover:text-orange-300 transition-colors"
                  >
                    @taller_automotrizayc
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-automotive-primary mb-6">Solicita tu Cotización</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-automotive-primary font-semibold">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu nombre completo" 
                          className="focus:ring-2 focus:ring-automotive-secondary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-automotive-primary font-semibold">Teléfono</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu número de teléfono" 
                          className="focus:ring-2 focus:ring-automotive-secondary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="vehiculo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-automotive-primary font-semibold">Marca y Modelo del Vehículo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ej: Toyota Corolla 2018" 
                          className="focus:ring-2 focus:ring-automotive-secondary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="servicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-automotive-primary font-semibold">Servicio Requerido</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-automotive-secondary">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mantenimiento">Mantenimiento Preventivo</SelectItem>
                          <SelectItem value="frenos">Sistema de Frenos</SelectItem>
                          <SelectItem value="aire">Aire Acondicionado</SelectItem>
                          <SelectItem value="suspension">Suspensión y Dirección</SelectItem>
                          <SelectItem value="electrico">Sistema Eléctrico</SelectItem>
                          <SelectItem value="general">Reparaciones Generales</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-automotive-primary font-semibold">Descripción del Problema</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe el problema o servicio que necesitas" 
                          className="focus:ring-2 focus:ring-automotive-secondary"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full automotive-secondary hover:bg-orange-600 text-white py-3 font-semibold transition-colors"
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
