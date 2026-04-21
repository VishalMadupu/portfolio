import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/60 bg-white/60 py-10 backdrop-blur">
      <div className="container px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight text-slate-950">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              {siteConfig.role} focused on frontend quality, product thinking, and reliable full stack delivery.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Copyright {currentYear}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <div className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-slate-950"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href="tel:+919553852963"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
