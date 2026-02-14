import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Small Business Owner", text: "OwenTech saved us after a ransomware attack. They recovered all our files and secured our network in under 24 hours. Incredible service.", rating: 5 },
  { name: "James K.", role: "Freelance Designer", text: "My Mac was crawling. They optimized everything remotely in 30 minutes. It's like having a brand-new machine. Highly recommend!", rating: 5 },
  { name: "Linda T.", role: "Homeowner", text: "Setting up our home WiFi was a nightmare until OwenTech stepped in. Fast, professional, and patient. We finally have coverage everywhere.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ name, role, text, rating }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-7 flex flex-col"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
