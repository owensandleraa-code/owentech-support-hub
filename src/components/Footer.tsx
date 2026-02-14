import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="/" className="text-lg font-bold">
            <span className="text-gradient">Owen</span>
            <span className="text-foreground">Tech</span>
          </a>
          <p className="text-xs text-muted-foreground mt-1">Professional IT support for everyone.</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+18005551234" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone size={14} /> (800) 555-1234
          </a>
          <a href="mailto:support@owentech.dev" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail size={14} /> support@owentech.dev
          </a>
        </div>

        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} OwenTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
