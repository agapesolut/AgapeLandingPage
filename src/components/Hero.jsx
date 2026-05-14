import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function WaveCanvas({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let w, h;
    const setCanvasSize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    let count = 0;
    const waves = [
      { y: 0.5, length: 0.01, amplitude: 100, speed: 0.01, opacity: 0.1 },
      { y: 0.5, length: 0.02, amplitude: 80, speed: 0.015, opacity: 0.08 },
      { y: 0.5, length: 0.005, amplitude: 120, speed: 0.008, opacity: 0.12 },
      { y: 0.6, length: 0.015, amplitude: 60, speed: 0.02, opacity: 0.05 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      count += 0.005;

      // Draw many horizontal waves to create the "Silk/Wave" effect
      // Otimização: Aumentado o gap para reduzir o número de linhas desenhadas
      const lineGap = 35; 
      const waveCount = Math.ceil(h / lineGap) + 5;

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const baseY = i * lineGap - 100;

        // Otimização: Aumentado o step de x de 10 para 25 para reduzir cálculos por frame
        for (let x = 0; x <= w; x += 25) {
          // Complex wave math for organic movement - constant flow
          const distortion = Math.sin(x * 0.002 + count + i * 0.15) * 40;
          const secondary = Math.cos(x * 0.001 - count * 0.4 + i * 0.25) * 20;
          const y = baseY + distortion + secondary;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Sempre usar estilo escuro para as ondas do Hero
        ctx.strokeStyle = `rgba(100, 210, 255, 0.12)`; 
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#000b18]">
      {/* Background sempre escuro no Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#00609b_0%,_#000b18_70%)]" />

      {/* Wave Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <WaveCanvas isDark={true} />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${isDark ? 'to-[#000b18]' : 'to-[#f8fafc]'}`} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Copy */}
          <div className="lg:col-span-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-primary">Engenharia de Elite</span>
            </motion.div>

            {/* TEXTOS PRINCIPAIS DO HERO (Sempre brancos pois o fundo é escuro) */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-[14vw] sm:text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter mb-8 md:mb-10 text-white"
            >
              ÁGAPE SOLUTIONS.<br />
              <span className="text-white/30 italic">TECH FOR THE FUTURE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans text-base md:text-xl max-w-2xl mb-10 md:mb-12 leading-tight text-white/60"
            >
              Transformamos visões complexas em arquiteturas de software impecáveis.
              Sistemas escaláveis, seguros e desenhados para o próximo nível do seu negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button
                className="w-full sm:w-auto px-10 py-5 border rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 border-white/20 text-white hover:bg-white/10"
              >
                <MousePointer2 size={18} /> VER SOLUÇÕES
              </button>
              <a
                href="#contact"
                className="group w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-primary/20"
              >
                COMEÇAR PROJETO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ESTATÍSTICAS DO HERO (Números e Legendas) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col gap-12 text-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3 className="text-primary font-black text-5xl mb-2 tracking-tighter">99.9%</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Uptime em Sistemas Críticos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h3 className="text-primary font-black text-5xl mb-2 tracking-tighter">+50</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Empresas Transformadas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="text-primary font-black text-5xl mb-2 tracking-tighter">24/7</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Monitoramento e Suporte</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00e0ff] to-transparent" />
      </motion.div>
    </section>
  );
}

