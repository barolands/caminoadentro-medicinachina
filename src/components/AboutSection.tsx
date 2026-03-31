import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-daniela.png";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5491168344165?text=Hola%2C%20quiero%20empezar%20a%20sentirme%20mejor.%20Me%20gustar%C3%ADa%20contarte%20lo%20que%20me%20est%C3%A1%20pasando.";

const AboutSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-0"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Sobre mí
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Soy Daniela Barocela
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Terapeuta en Medicina Tradicional China.
              Atiendo en Unquillo, en un espacio pensado para la calma y la escucha.
            </p>
            <p>
              Mi manera de trabajar integra lo corporal y lo emocional. Creo que los síntomas
              son mensajes, y que cuando les damos espacio, el cuerpo encuentra su camino de vuelta al equilibrio.
              También estoy formada en Compassionate Inquiry, un enfoque psicoterapéutico informado en trauma y que trabaja desde la compasión.  
            </p>
            <p>
              Acompaño con presencia, sin juicio, con respeto por tus tiempos y tus procesos.
              Cada persona es única, y cada sesión también.
            </p>
            <p>
              También soy terapeuta en Shiatsu Namikoshi, Terapeuta floral sistema Bach y Docente.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8"
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribime por WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shrink-0 w-full max-w-[220px] sm:max-w-[260px] mx-auto md:mx-0 md:pt-2"
        >
          <div className="aspect-[3/4] rounded-2xl bg-accent overflow-hidden shadow-sm">
            <img
              src={aboutPhoto}
              alt="Daniela Barocela, terapeuta en Medicina Tradicional China, en un entorno natural al aire libre."
              className="w-full h-full object-cover object-[48%_42%]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
