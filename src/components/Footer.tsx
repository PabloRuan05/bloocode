import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="WebDesign Pro Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">BlooCode</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Criamos sites impressionantes e responsivos que ajudam empresas a
              crescer. Do conceito ao lançamento, entregamos experiências
              digitais que cativam seu público.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-blue-primary transition-colors"
                >
                  SEO
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} BlooCode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
