import { motion } from "framer-motion";
import { Heart, Moon, Brain, Leaf, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Sentirte más tranquila/o internamente" },
  { icon: Moon, text: "Dormir mejor" },
  { icon: Brain, text: "Bajar la intensidad mental" },
  { icon: Leaf, text: "Aliviar tensiones físicas" },
  { icon: Sparkles, text: "Reconectar con vos misma/o" },
  {
    icon: TrendingUp,
    text: "Mejoras significativas en la problemática que traes como motivo de consulta",
  },
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4"
      >
        Qué podés empezar a sentir
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-16 h-px bg-primary mx-auto mb-16"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-body text-foreground font-medium">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
