import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Nunca fiz nada na área da beleza, consigo aprender?",
      answer: "Sim! O curso foi feito exatamente para quem nunca teve contato com a área. É passo a passo.",
    },
    {
      question: "Preciso ter material caro?",
      answer: "Não! Eu mostro exatamente o que é essencial para começar sem gastar muito.",
    },
    {
      question: "Tenho medo de tremer a mão, e agora?",
      answer: "Temos exercícios específicos de coordenação motora para você ganhar firmeza antes de tocar na cliente.",
    },
    {
      question: "O curso tem suporte?",
      answer: "Sim, você pode mandar suas dúvidas e fotos dos treinos que eu e minha equipe vamos te ajudar.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 md:mb-18 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-secondary mb-5 md:mb-6">
              <HelpCircle className="w-6 h-6 md:w-7 md:h-7" style={{ animation: 'icon-bounce 2s ease-in-out infinite' }} />
              <span className="text-sm md:text-base font-semibold uppercase tracking-wider">Perguntas Frequentes</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 tracking-tight px-4">
              Dúvidas?{" "}
              <span className="text-gradient">Vamos resolver agora.</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-primary/15 rounded-2xl px-6 md:px-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg md:text-xl hover:text-primary transition-colors py-6 md:py-7">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pt-2 pb-6 md:pb-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/25 animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-foreground/90 leading-relaxed">
              Ainda tem dúvidas? Fale comigo diretamente no WhatsApp!
            </p>
            <a
              href="https://wa.me/5562991109018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-lg"
            >
              <span>Falar com Danielly</span>
              <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
