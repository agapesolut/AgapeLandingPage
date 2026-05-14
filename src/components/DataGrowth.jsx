import { motion } from 'framer-motion';

const stats = [
  { label: 'Processamento de Dados', value: '4.2 PB/s', change: '+24%' },
  { label: 'Uptime Garantido', value: '99.99%', change: 'SLA' },
  { label: 'Cibersegurança', value: 'ISO 27001', change: 'Auditado' },
  { label: 'Presença Global', value: '45+', change: 'Países' }
];

export default function DataGrowth() {
  return (
    <section className="relative py-20 md:py-48 bg-transparent text-[var(--text-color)] overflow-hidden" id="enterprise">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-primary mb-4 md:mb-6 block">Métricas Globais</span>
            <h2 className="font-heading font-black text-5xl md:text-8xl leading-[0.85] tracking-tighter mb-8 md:mb-12">
              Resultados em <br />
              <span className="text-primary italic">Escala Real.</span>
            </h2>
            <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-lg mb-8 md:mb-12">
              Nossa infraestrutura é projetada para suportar as demandas mais críticas do mercado, garantindo eficiência máxima em cada operação.
            </p>
            
            <div className="flex gap-6 md:gap-8 border-t border-[var(--border-color)] pt-8 md:pt-12">
              <div>
                <span className="block text-3xl md:text-4xl font-black text-primary mb-2">500+</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Projetos Entregues</span>
              </div>
              <div className="border-l border-[var(--border-color)] pl-6 md:pl-8">
                <span className="block text-3xl md:text-4xl font-black text-primary mb-2">12ms</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Latência Média</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 border border-[var(--border-color)] bg-primary/5 rounded-3xl hover:border-primary transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <span className="text-[9px] md:text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">
                  {stat.label}
                </h3>
                <p className="text-2xl md:text-3xl font-black tracking-tight">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

