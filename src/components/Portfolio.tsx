import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import portfolioImage from "@/assets/portfolio-mockup.jpg";

const portfolioItems = [
  {
    title: "Plataforma E-commerce",
    category: "Loja Online",
    description: "Solução moderna de e-commerce com experiência de checkout perfeita"
  },
  {
    title: "Site Corporativo",
    category: "Empresarial",
    description: "Site corporativo profissional com integração de CMS personalizada"
  },
  {
    title: "Rede de Restaurantes",
    category: "Alimentação",
    description: "Site de rede de restaurantes com sistema de pedidos online"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Nossos Trabalhos Recentes
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
            Dê uma olhada em alguns dos nossos projetos mais recentes e veja como ajudamos empresas a ter sucesso online
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portfolio Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={portfolioImage} 
              alt="Portfolio showcase" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Portfolio Items */}
          <div className="order-1 lg:order-2 space-y-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-neutral-dark">{item.title}</h3>
                        <span className="px-3 py-1 bg-blue-light text-blue-primary text-sm rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-neutral-medium leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-blue-primary hover:text-blue-dark">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;