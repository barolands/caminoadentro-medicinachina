import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full aspect-[3/4] rounded-3xl bg-accent flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="font-heading text-4xl text-primary">D</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">Daniela</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Sobre mí
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Soy Daniela
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Practicante de Medicina Tradicional China con un enfoque profundamente humano.
              Atiendo en Unquillo, en un espacio pensado para la calma y la escucha.
            </p>
            <p>
              Mi manera de trabajar integra lo corporal y lo emocional. Creo que los síntomas
              son mensajes, y que cuando les damos espacio, el cuerpo encuentra su camino de vuelta al equilibrio.
            </p>
            <p>
              Acompaño con presencia, sin juicio, con respeto por tus tiempos y tus procesos.
              Cada persona es única, y cada sesión también.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
