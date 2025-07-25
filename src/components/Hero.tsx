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
            Beautiful Websites
            <br />
            <span className="text-blue-light">That Convert</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-light/90 max-w-3xl mx-auto leading-relaxed">
            We create stunning, responsive websites that help your business grow. 
            From concept to launch, we deliver digital experiences that captivate your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              View Our Work
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Code className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-blue-light/80 text-sm">Modern, maintainable code following best practices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Palette className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Custom Design</h3>
              <p className="text-blue-light/80 text-sm">Unique designs tailored to your brand</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-8 h-8 text-blue-light mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Performance</h3>
              <p className="text-blue-light/80 text-sm">Lightning-fast loading speeds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;