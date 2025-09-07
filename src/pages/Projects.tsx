import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import zapdelivery from "@/assets/zapdelivery.png";

const allProjects = [
  {
    id: 1,
    title: "Cardápio digital para restaurantes.",
    category: "Alimentação",
    description: "Cardápio digital q envia a comanda direto para o WhatsApp",
    image: zapdelivery,
    link: "https://zapdelivery.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Todos os Projetos
              </h1>
              <p className="text-white/70 mt-2">
                Confira nossa coleção completa de trabalhos realizados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-primary text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-light transition-colors">
                    {project.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-primary hover:text-blue-light hover:bg-white/10"
                    onClick={() => window.open(project.link, "_blank")}
                    title="Ver projeto"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-white/70 leading-relaxed mb-4">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
