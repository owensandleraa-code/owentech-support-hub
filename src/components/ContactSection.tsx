import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Ready to Fix Your Tech?</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Describe your issue and we'll get back to you within 15 minutes during business hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "(800) 555-1234", href: "tel:+18005551234" },
                { icon: Mail, label: "support@owentech.dev", href: "mailto:support@owentech.dev" },
                { icon: MapPin, label: "Remote & On-Site Nationwide" },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  {href ? (
                    <a href={href} className="text-muted-foreground hover:text-foreground transition-colors">{label}</a>
                  ) : (
                    <span className="text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll reach out shortly. Check your email for updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@email.com"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Issue Type</label>
                  <select
                    required
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  >
                    <option value="">Select an issue...</option>
                    <option>PC / Mac Support</option>
                    <option>Virus / Malware</option>
                    <option>WiFi / Network</option>
                    <option>Data Recovery</option>
                    <option>Remote Assistance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Describe Your Issue</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Tell us what's going on..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors glow-box flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
