import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import portfolioImage from "@/assets/bloocodewhite.png";

const portfolioItems = [
  {
    title: "Cardápio digital para restaurantes.",
    category: "Alimentação",
    description: "Cardápio digital q envia a comanda direto para o WhatsApp",
    link: "https://zapdelivery.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Trabalhos Recentes
          </h2>
          <p className="text-lg text-white-medium max-w-2xl mx-auto">
            Dê uma olhada em alguns dos nossos projetos mais recentes e veja
            como ajudamos empresas a ter sucesso online
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
              <Card
                key={index}
                className="border-l-4 border-l-blue-primary hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-light text-white text-sm rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-white leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-primary hover:text-blue-dark"
                      onClick={() => window.open(item.link, "_blank")}
                      title="Ver projeto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* // REMOVI O BOTÃO Q LEVA PARA A PGN DE PROJETOS POIS A MSM NÃO ABRIA. */}
        {/* <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="px-8 py-4"
            onClick={() => (window.location.href = "/projetos")}
          >
            Ver Todos os Projetos
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
