import { motion } from "framer-motion";

const iconClass = "size-11 shrink-0 text-primary";

/** Agujas minimalistas */
function IconAcupuncture() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="8" y1="6" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="4" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="1.25" fill="currentColor" />
      <circle cx="12" cy="3" r="1.25" fill="currentColor" />
      <circle cx="16" cy="5" r="1.25" fill="currentColor" />
    </svg>
  );
}

/** Habano de moxa con humo */
function IconMoxa() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect
        x="9.25"
        y="14.5"
        width="5.5"
        height="8.25"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 14.5C9.5 12 9 8 10.5 4.5 11 3 11.5 2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M12 14.2c2.5-2 3-5.5 1.5-8.5-.5-1-1-2.2-1.8-3"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M12 14.2c-.8-1.8-.5-4 .8-6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Copa de ventosa */
function IconCupping() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <ellipse cx="12" cy="9" rx="5.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 9v2.5c0 4 2.2 7.5 5.5 7.5s5.5-3.5 5.5-7.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Diálogo / escucha: círculos que se solapan */
function IconListening() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="9.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const services = [
  {
    name: "Acupuntura",
    desc: "Estímulo de puntos específicos para restablecer el flujo energético y aliviar síntomas desde la raíz.",
    Icon: IconAcupuncture,
  },
  {
    name: "Moxibustión",
    desc: "Calor terapéutico que nutre, calienta y moviliza la energía en zonas de bloqueo.",
    Icon: IconMoxa,
  },
  {
    name: "Ventosas",
    desc: "Liberación de tensiones profundas acumuladas en el cuerpo.",
    Icon: IconCupping,
  },
  {
    name: "Espacio de escucha terapéutica",
    desc: "Un lugar seguro para explorar lo que sentís, sin juicio, con presencia.",
    Icon: IconListening,
  },
] as const;

const ServicesSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6"
        >
          Qué ofrezco
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground"
        >
          No es solo una técnica. Es un abordaje integral.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <div className="flex gap-4 items-start">
              <div className="shrink-0 pt-0.5">
                <s.Icon />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-semibold text-foreground leading-snug mb-3">{s.name}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
