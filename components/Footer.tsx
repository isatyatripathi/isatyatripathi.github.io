import { Icon } from "@/components/Icon";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a className="footer-name" href="#home">
            {portfolio.person.name}
          </a>
          <p>Building scalable systems and high-performing engineering teams.</p>
        </div>
        <nav aria-label="Footer navigation">
          {portfolio.navigation.slice(1).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-links">
          {portfolio.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
            >
              <Icon name={link.icon} />
            </a>
          ))}
          <a href={portfolio.resume.path} download={portfolio.resume.filename} aria-label="Download résumé">
            <Icon name="fa-solid fa-download" />
          </a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} Satya Tripathi. All rights reserved.</p>
        <p>Built with Next.js, React, TypeScript, and Tailwind CSS.</p>
        <a href="#home">Back to top <Icon name="fa-solid fa-arrow-up" /></a>
      </div>
    </footer>
  );
}
