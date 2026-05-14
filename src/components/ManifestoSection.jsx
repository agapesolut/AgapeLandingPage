import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// TEXTO DO MANIFESTO (Altere o texto entre aspas aqui)
const MANIFESTO = "Não apenas criamos software. Projetamos o amanhã digital. Sistemas robustos, seguros e infinitamente escaláveis. Nossa missão é redefinir a fronteira entre dados e decisões inteligentes. Este é o novo padrão Ágape de engenharia de elite.".split(' ');

export default function ManifestoSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'start -30%'],
  });

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-48 relative overflow-hidden bg-transparent"
      id="about"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-primary mb-4">Manifesto Ágape</span>
          <div className="h-[2px] w-24 bg-primary" />
        </motion.div>

        <p className="font-heading font-black text-[8vw] sm:text-[6vw] md:text-[3.5vw] leading-[0.95] tracking-tighter text-[var(--text-color)] max-w-5xl flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
          {MANIFESTO.map((word, i) => {
            const start = i / MANIFESTO.length;
            const end = (i + 5) / MANIFESTO.length;
            return (
              <WordReveal
                key={i}
                word={word}
                scrollYProgress={scrollYProgress}
                start={Math.min(start, 0.9)}
                end={Math.min(end, 1.0)}
              />
            );
          })}
        </p>
      </div>

      {/* Decorative background element */}
      <div className="absolute -right-20 top-0 text-[40vw] md:text-[30vw] font-black text-primary/5 select-none pointer-events-none tracking-tighter">
        AGAPE
      </div>
    </section>
  );
}

function WordReveal({ word, scrollYProgress, start, end }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.05, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
}

