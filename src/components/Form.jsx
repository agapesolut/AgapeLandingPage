import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function Form() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

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

  // NOMES DOS CAMPOS (Labels e Placeholders)
  const fields = [
    { name: 'user_name', type: 'text', placeholder: 'Nome Completo', label: 'Quem é você?' },
    { name: 'user_email', type: 'email', placeholder: 'email@empresa.com', label: 'E-mail Corporativo' },
    { name: 'company', type: 'text', placeholder: 'Nome da Organização', label: 'Sua Empresa' },
  ];

  return (
    <section id="contact" className="py-20 md:py-40 bg-transparent text-[var(--text-color)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
            className="p-8 md:p-12 border border-[var(--border-color)] bg-primary/[0.02] rounded-[2rem] md:rounded-[3rem]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {fields.map((field) => (
                <div key={field.name} className="relative group">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-3 md:py-4 text-lg md:text-xl font-bold focus:outline-none focus:border-primary transition-colors placeholder:opacity-20"
                  />
                </div>
              ))}

              <div className="relative group">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Conte-nos sobre seu projeto..."
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-[var(--border-color)] py-3 md:py-4 text-lg md:text-xl font-bold focus:outline-none focus:border-primary transition-colors placeholder:opacity-20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full flex items-center justify-between px-8 md:px-10 py-5 md:py-6 bg-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                <span>
                  {isSubmitting ? 'Enviando...' : isSuccess ? 'Mensagem Enviada' : 'Iniciar Consultoria'}
                </span>
                {isSubmitting ? <Loader2 size={18} md:size={20} className="animate-spin" /> : isSuccess ? <CheckCircle2 size={18} md:size={20} /> : <ArrowRight size={18} md:size={20} />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

