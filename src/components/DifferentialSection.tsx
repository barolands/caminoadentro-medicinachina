import { motion } from "framer-motion";

const DifferentialSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background rounded-3xl p-10 md:p-16 border border-border"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-primary mx-auto mb-10"
        />
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground mb-8 leading-snug italic">
          "Un espacio para reconectar tus partes sueltas y volverlas a la unidad. La vida siempre busca la vida, sólo hay que ayudar un poquito."
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Cada sesión es una oportunidad para pausar, escucharte y empezar a comprender
          los mensajes de tu cuerpo. No se trata de tener respuestas rápidas,
          sino de abrir un camino hacia adentro para devolver al organismo su propio poder curativo.
        </p>
      </motion.div>
    </div>
  </section>
);

export default DifferentialSection;
