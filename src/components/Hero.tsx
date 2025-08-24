import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Web design workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 to-blue-dark/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Sites Lindos
            <br />
            <span className="text-blue-light">Que Convertem</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-light/90 max-w-3xl mx-auto leading-relaxed">
            Criamos sites impressionantes e responsivos que ajudam seu negócio a crescer. 
            Do conceito ao lançamento, entregamos experiências digitais que cativam seu público.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Comece Hoje
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              Ver Nosso Trabalho
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Code className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Código Limpo</h3>
              <p className="text-blue-light/80 text-sm">Código moderno e sustentável seguindo melhores práticas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Palette className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Design Personalizado</h3>
              <p className="text-blue-light/80 text-sm">Designs únicos feitos sob medida para sua marca</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Performance Rápida</h3>
              <p className="text-blue-light/80 text-sm">Velocidades de carregamento ultrarrápidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;