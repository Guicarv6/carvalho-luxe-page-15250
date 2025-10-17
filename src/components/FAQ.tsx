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
      question: "Nunca fiz um curso antes, posso começar?",
      answer: "Sim! Esse curso é feito para iniciantes que querem se destacar no mercado. Começamos do zero com técnicas que te preparam para atender com excelência desde o início.",
    },
    {
      question: "Preciso ter material?",
      answer: "Não, no módulo inicial mostramos tudo que você precisa comprar e como investir certo. Você receberá uma lista completa com orientações sobre cada item necessário para começar.",
    },
    {
      question: "É online ou presencial?",
      answer: "O Lash de Sucesso 2.0 é online com acompanhamento direto da Danielly. Você aprende no seu ritmo, com mentorias ao vivo e suporte constante via WhatsApp.",
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
              Tire Suas{" "}
              <span className="text-gradient">Dúvidas</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground px-6">
              Respostas para as perguntas mais comuns sobre o curso e atendimentos
            </p>
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
