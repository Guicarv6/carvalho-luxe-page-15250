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
          <div className="text-center mb-12 md:mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Perguntas Frequentes</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 md:mb-6 tracking-tight px-4">
              Tire Suas{" "}
              <span className="text-gradient">Dúvidas</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Respostas para as perguntas mais comuns sobre o curso e atendimentos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-primary/15 rounded-2xl px-5 md:px-6 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-base md:text-lg hover:text-primary transition-colors py-5 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 pb-5 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10 md:mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-2xl border border-primary/20 animate-fade-in shadow-sm">
            <p className="text-base md:text-lg mb-5 md:mb-6 text-foreground/90">
              Ainda tem dúvidas? Fale comigo diretamente no WhatsApp!
            </p>
            <a
              href="https://wa.me/5562991109018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <span>Falar com Danielly</span>
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
