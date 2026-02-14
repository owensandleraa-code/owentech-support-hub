import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

const badges = [
  { icon: Shield, text: "Trusted by 2,000+ clients" },
  { icon: Zap, text: "Average 15-min response" },
  { icon: Clock, text: "24/7 availability" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden section-padding min-h-[85vh] flex items-center">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(210 100% 55% / 0.15) 0%, transparent 50%), 
                          radial-gradient(circle at 80% 20%, hsl(210 100% 55% / 0.1) 0%, transparent 40%),
                          radial-gradient(circle at 50% 80%, hsl(195 100% 60% / 0.08) 0%, transparent 50%)`,
      }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1.5">
                <Icon size={12} />
                {text}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Fast, Reliable{" "}
            <span className="text-gradient">Tech Support</span>{" "}
            When You Need It
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            From virus removal to network setup, our certified technicians resolve your IT issues quickly — remotely or on-site. No fix, no fee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-bold hover:bg-primary/90 transition-all glow-box hover:glow-box-strong"
            >
              Get Help Now
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary/80 transition-colors border border-border"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
