import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import portfolioImage from "@/assets/portfolio-mockup.jpg";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Online Store",
    description: "Modern e-commerce solution with seamless checkout experience"
  },
  {
    title: "Corporate Website",
    category: "Business",
    description: "Professional corporate website with custom CMS integration"
  },
  {
    title: "Restaurant Chain",
    category: "Food & Beverage",
    description: "Multi-location restaurant website with online ordering system"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
            Take a look at some of our latest projects and see how we've helped businesses succeed online
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
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;