import { Code2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">WebDesign Pro</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              We create stunning, responsive websites that help businesses grow. 
              From concept to launch, we deliver digital experiences that captivate your audience.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-blue-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-blue-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-blue-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-blue-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-blue-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-blue-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/80 hover:text-blue-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-blue-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-blue-primary transition-colors">Web Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-primary transition-colors">Development</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-primary transition-colors">SEO</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} WebDesign Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;