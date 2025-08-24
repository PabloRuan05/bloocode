import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, ShoppingCart, Search, Wrench, Rocket } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description: "Designs personalizados de sites que refletem sua marca e envolvem seu público com estética moderna e profissional."
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Responsivo",
    description: "Desenvolvimento mobile-first garantindo que seu site fique perfeito em todos os dispositivos e tamanhos de tela."
  },
  {
    icon: ShoppingCart,
    title: "Soluções E-commerce",
    description: "Desenvolvimento completo de loja online com processamento seguro de pagamentos e gestão de estoque."
  },
  {
    icon: Search,
    title: "Otimização SEO",
    description: "Otimização para mecanismos de busca para melhorar a visibilidade do seu site e gerar tráfego orgânico."
  },
  {
    icon: Wrench,
    title: "Manutenção de Sites",
    description: "Suporte e manutenção contínuos para manter seu site seguro, atualizado e com performance otimizada."
  },
  {
    icon: Rocket,
    title: "Otimização de Performance",
    description: "Otimização de velocidade e ajustes de performance para garantir tempos de carregamento ultrarrápidos."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
            Soluções web abrangentes para ajudar seu negócio a ter sucesso online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-light rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-primary" />
                </div>
                <CardTitle className="text-xl text-neutral-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-medium text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;