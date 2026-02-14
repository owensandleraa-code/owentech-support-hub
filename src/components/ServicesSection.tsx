import { motion } from "framer-motion";
import { Monitor, ShieldCheck, Wifi, HardDrive, ScreenShare, Wrench } from "lucide-react";

const services = [
  { icon: Monitor, title: "PC & Mac Support", desc: "Hardware diagnostics, OS troubleshooting, and performance optimization for all platforms." },
  { icon: ShieldCheck, title: "Virus & Malware Removal", desc: "Complete threat elimination and security hardening to keep your data safe." },
  { icon: Wifi, title: "WiFi & Network Setup", desc: "Router configuration, dead-zone elimination, and secure network architecture." },
  { icon: HardDrive, title: "Data Recovery", desc: "Recover lost files from damaged drives, corrupted storage, or accidental deletion." },
  { icon: ScreenShare, title: "Remote Assistance", desc: "Instant screen-sharing support — we fix your issues without leaving your desk." },
  { icon: Wrench, title: "Custom IT Solutions", desc: "Tailored tech setups for small businesses including email, cloud, and backups." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Expert Support for Every Tech Problem</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-xl p-7 hover:border-primary/40 transition-all duration-300 hover:glow-box"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
