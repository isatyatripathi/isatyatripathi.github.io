import { Icon } from "@/components/Icon";
import { portfolio } from "@/data/portfolio";

export function ResumeCard() {
  return (
    <div className="resume-card">
      <div className="resume-copy">
        <p className="eyebrow">Résumé</p>
        <h2>Prefer the concise version?</h2>
        <p>{portfolio.resume.description}</p>
        <ul className="resume-highlights">
          <li>10 years across hands-on engineering, architecture, and people leadership</li>
          <li>Verified delivery, reliability, customer, and team-growth outcomes</li>
          <li>Experience across .NET, AWS, Azure, distributed systems, and AI-assisted engineering</li>
        </ul>
      </div>
      <div className="resume-actions">
        <a
          className="button button-primary"
          href={portfolio.resume.path}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="fa-regular fa-file-pdf" />
          View résumé
        </a>
        <a
          className="button button-secondary"
          href={portfolio.resume.path}
          download={portfolio.resume.filename}
        >
          <Icon name="fa-solid fa-download" />
          Download PDF
        </a>
        <small>PDF · {portfolio.resume.filename}</small>
      </div>
    </div>
  );
}
