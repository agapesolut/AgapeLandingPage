import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// LISTA DE CASES EM DESTAQUE (Altere títulos, tags, descrições, imagens e links aqui)
const PRODUCTS = [
  {
    title: 'Nexus AI Plataform',
    tag: 'Retail & AI',
    description: 'Sistema preditivo que aumentou a conversão em 40% para grandes varejistas brasileiros através de análise comportamental em tempo real.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: 'https://nexus-ai.agapesolutions.com.br',
    features: ['Machine Learning', 'Big Data', 'Scalability']
  },
  {
    title: 'AgroScale ERP',
    tag: 'Agribusiness',
    description: 'Gestão completa de cadeias de suprimentos agroindustriais, otimizando o escoamento de safra com precisão geoespacial.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    link: 'https://agroscale.agapesolutions.com.br',
    features: ['IoT', 'Cloud ERP', 'Logistics']
  },
  {
    title: 'SecureVault API',
    tag: 'Fintech & Security',
    description: 'Camada de segurança bancária para fintechs, processando bilhões de requisições com latência zero e criptografia militar.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: 'https://securevault.agapesolutions.com.br',
    features: ['Encryption', 'Zero Latency', 'Compliance']
  }
];

export default function ProductsInUse() {
  const navigate = useNavigate();

  const handleSeeAll = (e) => {
    e.preventDefault();
    // Salva o hash na URL para que o botão "Voltar" do navegador retorne a esta seção
    window.history.replaceState(null, '', '/#products');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate('/cases');
  };
  return (
    <section className="pt-14 pb-8 md:py-28 bg-transparent text-[var(--text-color)] relative overflow-hidden" id="products">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <div className="max-w-3xl">
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-primary mb-4 md:mb-6 block">Cases de Sucesso</span>
              <h2 className="font-heading font-black text-5xl md:text-8xl leading-[0.85] tracking-tighter">
                Transformação na <br />
                <span className="text-primary italic">Prática.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-60 max-w-lg md:max-w-xs mb-2">
              Explore como nossas soluções estão redefinindo indústrias e criando novos padrões de eficiência.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product, i) => (
            <motion.a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] mb-6 md:mb-8 overflow-hidden rounded-[2rem] bg-[var(--border-color)] flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl">
                    <ArrowUpRight size={20} className="text-white group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 md:mb-6 min-h-[4.5rem] md:min-h-[7rem]">
                  <div className="flex-grow">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{product.tag}</span>
                    <h3 className="text-2xl md:text-4xl font-heading font-black tracking-tighter uppercase leading-[0.9]">{product.title}</h3>
                  </div>
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <p className="text-sm md:text-base opacity-60 leading-tight mb-8 md:mb-10 max-w-md min-h-[4rem] md:min-h-[5rem]">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {product.features.map(feature => (
                    <span key={feature} className="text-[8px] md:text-[9px] font-bold border border-[var(--border-color)] px-2 md:px-3 py-1 rounded-full uppercase tracking-wider">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-32 pt-6 md:pt-12 border-t border-[var(--border-color)] flex justify-center"
        >
          <button
            onClick={handleSeeAll}
            className="group relative px-10 py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:scale-105 transition-all duration-500 flex items-center gap-4 cursor-pointer overflow-hidden shadow-[0_0_40px_rgba(0,115,230,0.3)] hover:shadow-[0_0_60px_rgba(0,115,230,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10">Ver Todos os Cases</span>
            <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
