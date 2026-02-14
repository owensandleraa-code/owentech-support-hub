import { motion } from "framer-motion";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Reach Out", desc: "Call, chat, or fill out our contact form to describe your issue." },
  { icon: Search, num: "02", title: "We Diagnose", desc: "Our certified tech connects remotely or schedules an on-site visit." },
  { icon: CheckCircle, num: "03", title: "Problem Solved", desc: "We fix the issue fast and follow up to make sure everything stays running." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t border-dashed border-primary/30" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Icon size={30} className="text-primary" />
              </div>
              <span className="text-xs font-mono text-primary font-bold">{num}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
