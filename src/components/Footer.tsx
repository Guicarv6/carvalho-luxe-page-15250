import { Heart, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import daniellyImage from "@/assets/danielly-portrait-new.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-40" />
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 h-80 md:h-96 bg-secondary/15 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main content */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-14 md:mb-16">
              {/* About */}
              <div className="md:col-span-2 space-y-5 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={daniellyImage}
                    alt="Danielly Carvalho"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-secondary/40 shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold">
                      Danielly Carvalho
                    </h3>
                    <p className="text-secondary font-semibold text-sm md:text-base">
                      Especialista em Extensão de Cílios
                    </p>
                  </div>
                </div>
                
                <p className="text-white/85 leading-relaxed text-base md:text-lg italic">
                  "Beleza que transcende o espelho."
                </p>
                
                <div className="space-y-2">
                  <p className="text-white/75 leading-relaxed text-sm md:text-base">
                    Minha missão é ajudar mulheres a conquistarem sua independência financeira com segurança e leveza.
                  </p>
                  <p className="text-white/75 text-xs md:text-sm flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <a href="https://www.instagram.com/lashdaniellycarvalho/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                      @lashdaniellycarvalho
                    </a>
                  </p>
                  <p className="text-white/75 text-xs md:text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Aparecida de Goiânia – GO
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-5 md:space-y-6">
                <h4 className="text-lg md:text-xl font-heading font-bold mb-4">
                  Links Rápidos
                </h4>
                <nav className="space-y-2 md:space-y-3">
                  <a href="#sobre" className="block text-sm md:text-base text-white/75 hover:text-secondary transition-colors">
                    Sobre o Método
                  </a>
                  <a href="#depoimentos" className="block text-sm md:text-base text-white/75 hover:text-secondary transition-colors">
                    Depoimentos
                  </a>
                  <a href="#curso" className="block text-sm md:text-base text-white/75 hover:text-secondary transition-colors">
                    O Curso
                  </a>
                  <a href="#faq" className="block text-sm md:text-base text-white/75 hover:text-secondary transition-colors">
                    Perguntas Frequentes
                  </a>
                </nav>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-white/15">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">WhatsApp</p>
                  <a href="https://wa.me/5562991109018" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-secondary transition-colors text-xs md:text-sm">
                    (62) 99110-9018
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">Instagram</p>
                  <a href="https://www.instagram.com/lashdaniellycarvalho/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-secondary transition-colors text-xs md:text-sm">
                    @lashdaniellycarvalho
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">Localização</p>
                  <p className="text-white/75 text-xs md:text-sm">Aparecida de Goiânia – GO</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12">
              <a
                href="https://wa.me/5562991109018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-secondary/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/lashdaniellycarvalho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-secondary/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:contato@daniellycarvalho.com.br"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-secondary/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-3 md:space-y-4 text-xs md:text-sm text-white/65">
              <p>
                © {currentYear} Danielly Carvalho – Todos os direitos reservados
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <a href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  Termos de Uso
                </a>
              </div>
              <p className="flex items-center justify-center gap-2 pt-3 md:pt-4">
                Feito com <Heart className="w-3 h-3 md:w-4 md:h-4 text-secondary fill-secondary" /> e dedicação
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5562991109018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50 group"
        aria-label="Conversar no WhatsApp"
        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
};

export default Footer;
