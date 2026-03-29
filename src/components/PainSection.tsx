import { motion } from "framer-motion";

const painPoints = [
  "Sentís la cabeza acelerada todo el tiempo",
  "Te cuesta descansar aunque estés cansada/o",
  "El cuerpo duele, pero no sabés bien por qué",
  "Te sentís sobrepasada/o emocionalmente",
  "Intuís que lo que te pasa no es solo físico",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const PainSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4"
      >
        ¿Te sentís así?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-16 h-px bg-primary mx-auto mb-12"
      />
      <ul className="space-y-5 text-left max-w-xl mx-auto mb-12">
        {painPoints.map((point, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex items-start gap-4 font-body text-lg text-foreground/85"
          >
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="font-heading text-2xl md:text-3xl text-primary font-semibold italic"
      >
        No estás sola/o. Y no es solo físico.
      </motion.p>
    </div>
  </section>
);

export default PainSection;
