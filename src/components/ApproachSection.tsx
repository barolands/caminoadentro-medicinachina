import { motion } from "framer-motion";

const ApproachSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6"
        >
          Un abordaje que integra cuerpo y emoción
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          La Medicina Tradicional China entiende el cuerpo y las emociones como un todo.
          Un sistema intergral donde los síntomas no se tapan, se escuchan.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Qi y meridianos",
            desc: "Una lectura del cuerpo como redes de energía: ver dónde se frena el flujo y orientar el tratamiento hacia el equilibrio.",
          },
          {
            title: "Regulación del sistema nervioso",
            desc: "Técnicas que ayudan a salir del estado de alerta constante y volver a la calma.",
          },
          {
            title: "Enfoque emocional",
            desc: "Escucha profunda y conciencia para entender qué hay detrás de lo que sentís.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-5">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
