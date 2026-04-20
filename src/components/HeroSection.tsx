import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nature.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5491168344165?text=Hola%2C%20quiero%20empezar%20a%20sentirme%20mejor.%20Me%20gustar%C3%ADa%20contarte%20lo%20que%20me%20est%C3%A1%20pasando.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Paisaje natural sereno"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      {/* Velo sutil bordó → acento dorado → bordó oscuro (la foto sigue visible) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#3d1a22]/38 via-amber-900/10 to-[#1a0a0e]/58"
        aria-hidden
      />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-body text-sm tracking-[0.25em] uppercase text-white mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]"
      >
        Acompañamiento integral cuerpo–emoción
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
      >
        Tu cuerpo no está fallando, te está hablando
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-body text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
      >
        Te acompaño a entender qué hay detrás de lo que sentís y a aliviarlo desde la raíz a través de la Medicina Tradicional China y la escucha terapéutica.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          variant="heroOutline"
          size="lg"
          className="border-white text-white hover:bg-white/15 hover:border-white hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Escribime por WhatsApp
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
