import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Sentí calma desde la primera sesión. No sabía que necesitaba tanto ese espacio.",
    author: "M.L.",
  },
  {
    text: "No fue solo acupuntura, fue entenderme mejor. Daniela tiene una forma de escuchar que te hace sentir contenida.",
    author: "C.R.",
  },
  {
    text: "Llegué con dolor de espalda crónico y terminé entendiendo cosas que necesitaba ver. Mi cuerpo cambió.",
    author: "S.V.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4"
        >
          Lo que dicen quienes pasaron por el espacio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-primary mx-auto"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <p className="font-body text-foreground/85 leading-relaxed italic mb-6">
              "{t.text}"
            </p>
            <footer className="font-body text-sm text-muted-foreground">
              — {t.author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
