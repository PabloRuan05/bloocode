import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, ShoppingCart, Search, Wrench, Rocket } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description: "Custom website designs that reflect your brand and engage your audience with modern, professional aesthetics."
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description: "Mobile-first development ensuring your website looks perfect on all devices and screen sizes."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment processing and inventory management."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility and drive organic traffic."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally."
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Speed optimization and performance tuning to ensure lightning-fast loading times."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
            Comprehensive web solutions to help your business succeed online
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