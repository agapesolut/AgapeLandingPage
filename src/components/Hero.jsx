import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { NeuroBackdrop, PaperGrain, WaveField } from './ShaderPrimitives';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className={`hero-shell relative h-screen w-full flex items-center overflow-hidden ${isDark ? 'hero-shell--dark' : 'hero-shell--light'}`}>
      <NeuroBackdrop interactive={false} />
      <WaveField interactive={false} />
      <PaperGrain className="opacity-[0.18] mix-blend-soft-light" />
      <div className="hero-vignette" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 py-24 md:px-12 lg:py-12">
        <div className="hero-content">
          <motion.div
            className="hero-identity"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title">
              <span className="hero-title__row hero-title__row--first">
                <span className="hero-title__main">Ágape</span>
                <span className="hero-title__tagline">Tech for the future</span>
              </span>
              <span className="hero-title__row hero-title__row--second">
                <span className="hero-title__main">Solutions<span className="hero-title__period">.</span></span>
              </span>
            </h1>
          </motion.div>

          <div className="hero-bottom">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="hero-copy"
            >
              Transformamos visões complexas em arquiteturas de software impecáveis.
              Sistemas escaláveis, seguros e desenhados para o próximo nível do seu negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="hero-actions"
            >
              <a href="#contact" className="hero-action-link hero-action-link--primary">
                Começar projeto
              </a>
              <a href="#features" className="hero-action-link">
                Ver soluções
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  );
}
