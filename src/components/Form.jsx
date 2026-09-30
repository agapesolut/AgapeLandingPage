import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function Form() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // INTEGRAÇÃO COM EMAILJS (Coloque seu código de envio aqui)
    // Exemplo: emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  // CONFIGURAÇÕES DO FORMULÁRIO (Labels, Placeholders e Nomes)
  const fields = [
    { name: 'user_name', type: 'text', placeholder: 'Seu nome', label: 'Nome completo' },
    { name: 'user_email', type: 'email', placeholder: 'voce@empresa.com', label: 'E-mail corporativo' },
    { name: 'company', type: 'text', placeholder: 'Nome da empresa', label: 'Empresa' },
  ];

  // CONFIGURAÇÕES DO WHATSAPP
  const whatsappConfig = {
    phone: '5500000000000', // Substitua pelo número real (DDI + DDD + Número)
    message: 'Olá! Gostaria de iniciar uma consultoria estratégica.' // Mensagem automática inicial
  };

  const whatsappUrl = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(whatsappConfig.message)}`;

  return (
    <section id="contact" className="py-20 md:py-40 bg-transparent text-[var(--text-color)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* TEXTOS DA SEÇÃO DE CONTATO */}
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-primary mb-6 md:mb-8 block">Contato Estratégico</span>
            <h2 className="text-5xl md:text-8xl font-heading font-black leading-[0.85] tracking-tighter mb-8 md:mb-12">
              Pronto para <br />
              <span className="text-primary italic">Escalar?</span>
            </h2>
            <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-md mb-8 md:mb-12">
              Inicie uma conversa técnica sobre seu próximo grande desafio. Nossa equipe sênior está pronta para analisar sua demanda.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} md:size={24} />
                </div>
                <span className="font-bold text-base md:text-lg">Análise técnica em 24h</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} md:size={24} />
                </div>
                <span className="font-bold text-base md:text-lg">Acordo de Confidencialidade (NDA)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-card w-full max-w-xl border border-[var(--border-color)] bg-transparent p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[1.75rem] lg:ml-auto"
          >
            <div className="mb-6 border-b border-[var(--border-color)] pb-5">
              <span className="mb-2 block text-xs font-semibold text-[var(--text-color)]">Contato</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[var(--text-color)]">Envie sua mensagem</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name} className={field.name === 'company' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={`contact-${field.name}`} className="mb-2 block text-xs font-semibold text-[var(--text-color)]">
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      type={field.type}
                      name={field.name}
                      required
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm font-medium text-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)] placeholder:opacity-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-[var(--text-color)]">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full resize-y rounded-xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm font-medium text-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)] placeholder:opacity-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-4 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="group flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-color)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span aria-live="polite" aria-atomic="true">
                    {isSubmitting ? 'Enviando...' : isSuccess ? 'Mensagem enviada' : 'Enviar mensagem'}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 transition-colors group-hover:bg-white/20" aria-hidden="true">
                    {isSubmitting ? <Loader2 size={17} className="animate-spin" /> : isSuccess ? <CheckCircle2 size={17} /> : <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />}
                  </span>
                </button>

                <div className="py-2">
                  <p className="mb-4 text-center text-[9px] font-black uppercase tracking-widest text-[var(--text-color)] opacity-50">
                    Conexão imediata
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center justify-center rounded-full border border-primary/20 bg-primary/[0.03] px-8 py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-color)] transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-12 md:text-xs"
                    >
                      Falar via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
