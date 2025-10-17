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
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <HelpCircle className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Perguntas Frequentes</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Tire Suas{" "}
              <span className="text-gradient">Dúvidas</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Respostas para as perguntas mais comuns sobre o curso e atendimentos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-primary/20 rounded-2xl px-6 shadow-soft hover:shadow-premium transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 animate-fade-in">
            <p className="text-lg mb-6">
              Ainda tem dúvidas? Fale comigo diretamente no WhatsApp!
            </p>
            <a
              href="https://wa.me/5562991109018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <span>Falar com Danielly</span>
              <HelpCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
