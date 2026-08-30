import Image from "next/image";
import { CoreExpertise } from "@/components/CoreExpertise";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { ImpactGrid } from "@/components/ImpactGrid";
import { MetricStrip } from "@/components/MetricStrip";
import { Reveal } from "@/components/Reveal";
import { ResumeCard } from "@/components/ResumeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${portfolio.person.website}/#person`,
      name: portfolio.person.name,
      url: portfolio.person.website,
      image: `${portfolio.person.website}/images/satya-profile.jpg`,
      jobTitle: "Senior Staff Engineer",
      email: `mailto:${portfolio.person.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/in/isatyatripathi/",
        "https://github.com/isatyatripathi",
      ],
      knowsAbout: [
        "Engineering Leadership",
        "Solution Architecture",
        "Distributed Systems",
        ".NET",
        "AWS",
        "Microsoft Azure",
        "Cloud Modernization",
        "AI-Assisted Engineering",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${portfolio.person.website}/#profile`,
      url: portfolio.person.website,
      name: "Satya Tripathi — Engineering Leadership Portfolio",
      mainEntity: { "@id": `${portfolio.person.website}/#person` },
      isPartOf: { "@id": `${portfolio.person.website}/#website` },
    },
    {
      "@type": "WebSite",
      "@id": `${portfolio.person.website}/#website`,
      url: portfolio.person.website,
      name: "Satya Tripathi Portfolio",
      inLanguage: "en-IN",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero-section relative overflow-hidden" id="home" aria-labelledby="hero-title">
          <div className="hero-motif" aria-hidden="true" />
          <div className="site-shell hero-grid relative z-10">
            <div className="hero-copy">
              <div className="role-pill">
                <span aria-hidden="true" />
                {portfolio.person.role}
              </div>
              <h1 id="hero-title">
                Building scalable systems.
                <br />
                Leading <span>high‑impact</span> teams.
              </h1>
              <p className="hero-description">
                Senior Staff Engineer at Experian with 10 years of experience designing and delivering
                mission-critical platforms across .NET, AWS, and Azure. I lead distributed teams, drive
                cloud modernization, and build the engineering practices behind dependable delivery.
              </p>

              <div className="hero-actions flex flex-wrap items-center gap-3">
                <a className="button button-primary" href={portfolio.resume.path} download={portfolio.resume.filename}>
                  <Icon name="fa-solid fa-download" />
                  Download résumé
                </a>
                <a className="button button-secondary" href="#experience">
                  View experience
                  <Icon name="fa-solid fa-arrow-down" />
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/isatyatripathi/"
                  aria-label="Connect on LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <Icon name="fa-brands fa-linkedin-in" />
                </a>
              </div>

              <div className="hero-social-row flex flex-wrap items-center">
                <div className="social-buttons" aria-label="Professional profiles">
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
                </div>
                <p>
                  <Icon name="fa-solid fa-location-dot" />
                  {portfolio.person.location}
                </p>
                <p>
                  <Icon name="fa-solid fa-briefcase" />
                  {portfolio.person.availability}
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-label="Portrait of Satya Tripathi">
              <div className="portrait-glow" aria-hidden="true" />
              <Image
                src={portfolio.person.portrait}
                alt={portfolio.person.portraitAlt}
                width={936}
                height={1050}
                className="portrait-image"
                priority
                sizes="(max-width: 900px) 80vw, 42vw"
              />
              <aside className="recognition-note">
                <Icon name="fa-solid fa-star" />
                <div>
                  <strong>Recognized by senior leadership</strong>
                  <span>Multiple technical leadership and delivery awards</span>
                </div>
              </aside>
            </div>
          </div>
          <div className="site-shell">
            <MetricStrip metrics={portfolio.metrics} />
          </div>
        </section>

        <section className="section section-about" id="about" aria-labelledby="about-title">
          <div className="site-shell about-grid">
            <Reveal>
              <SectionHeading id="about-title" eyebrow="About me" title="Engineering solutions. Empowering people." />
            </Reveal>
            <Reveal className="about-copy">
              <div>
                {portfolio.person.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="about-capabilities" aria-label="Primary focus areas">
                <span><Icon name="fa-solid fa-sitemap" /> Solution architecture</span>
                <span><Icon name="fa-solid fa-cloud" /> Cloud modernization</span>
                <span><Icon name="fa-solid fa-wand-magic-sparkles" /> AI-assisted engineering</span>
                <span><Icon name="fa-solid fa-people-group" /> Engineering leadership</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                id="experience-title"
                eyebrow="Experience"
                title="Career journey"
                description="A progression from hands-on full-stack delivery to staff-level architecture, cloud modernization, and people leadership."
              />
            </Reveal>
            <Reveal>
              <ExperienceTimeline experience={portfolio.experience.slice(0, 3)} />
              <div className="earlier-career" aria-label="Earlier experience">
                <p className="eyebrow">Earlier experience</p>
                <div className="earlier-career-grid">
                  {portfolio.experience.slice(3).map((item) => (
                    <article key={`${item.company}-${item.role}`}>
                      <div>
                        <p className="company-name">{item.company}</p>
                        <h3>{item.role}</h3>
                        <span>{item.start} – {item.end} · {item.location}</span>
                      </div>
                      <p>{item.summary}</p>
                      <div className="skill-row">
                        {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-tinted" id="impact" aria-labelledby="impact-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                id="impact-title"
                eyebrow="Selected impact"
                title="Technical depth connected to measurable outcomes"
                description="Internal platform names are intentionally generalized; the outcomes below are drawn from verified résumé metrics."
              />
            </Reveal>
            <Reveal>
              <ImpactGrid stories={portfolio.impacts} />
            </Reveal>
          </div>
        </section>

        <section className="section" id="expertise" aria-labelledby="expertise-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                id="expertise-title"
                eyebrow="Core expertise"
                title="The capabilities I bring to complex engineering organizations"
                description="A practical combination of architecture, delivery, cloud engineering, modern .NET, responsible AI adoption, and team leadership."
              />
            </Reveal>
            <Reveal>
              <CoreExpertise groups={portfolio.expertise} />
            </Reveal>
          </div>
        </section>

        <section className="section section-tinted" id="leadership" aria-labelledby="leadership-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                id="leadership-title"
                eyebrow="Engineering leadership"
                title="How I lead"
                description="Principles shaped by architecture ownership, line management, mentoring, and mission-critical delivery."
              />
            </Reveal>
            <Reveal>
              <div className="principles-grid">
                {portfolio.leadershipPrinciples.map((principle) => (
                  <article className="principle-card" key={principle.title}>
                    <span className="card-icon"><Icon name={principle.icon} /></span>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="recognition-title">
          <div className="site-shell credentials-grid">
            <Reveal>
              <div>
                <SectionHeading id="recognition-title" eyebrow="Recognition" title="Awards and professional credibility" />
                <div className="recognition-grid">
                  {portfolio.recognition.map((item) => (
                    <article className="recognition-card" key={item.title}>
                      <Icon name={item.icon} />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="credentials-card">
                <p className="eyebrow">Education & credentials</p>
                <h3>{portfolio.education.degree}</h3>
                <p>{portfolio.education.specialization}</p>
                <p>{portfolio.education.institution} · {portfolio.education.years}</p>
                <hr />
                <h4>Certifications</h4>
                <ul>
                  {portfolio.certifications.map((certification) => (
                    <li key={certification}><Icon name="fa-solid fa-certificate" /> {certification}</li>
                  ))}
                </ul>
                <hr />
                <h4>Publication</h4>
                <p className="publication-title">“{portfolio.publication.title}”</p>
                <p>{portfolio.publication.publisher}</p>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="section section-resume" id="resume" aria-label="Résumé">
          <div className="site-shell">
            <Reveal><ResumeCard /></Reveal>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <Reveal>
              <SectionHeading
                id="contact-title"
                eyebrow="Contact"
                title="Let’s discuss the next complex engineering challenge"
                description="For engineering leadership, senior technical roles, architecture collaboration, or professional networking, email and LinkedIn are the fastest ways to reach me."
              />
            </Reveal>
            <Reveal>
              <div className="contact-card">
                <a className="contact-line" href={`mailto:${portfolio.person.email}`}>
                  <span className="card-icon"><Icon name="fa-regular fa-envelope" /></span>
                  <span><small>Email</small><strong>{portfolio.person.email}</strong></span>
                  <Icon name="fa-solid fa-arrow-right" />
                </a>
                <a className="contact-line" href="https://www.linkedin.com/in/isatyatripathi/" target="_blank" rel="noreferrer">
                  <span className="card-icon"><Icon name="fa-brands fa-linkedin-in" /></span>
                  <span><small>LinkedIn</small><strong>linkedin.com/in/isatyatripathi</strong></span>
                  <Icon name="fa-solid fa-arrow-up-right-from-square" />
                </a>
                <a className="contact-line" href="https://github.com/isatyatripathi" target="_blank" rel="noreferrer">
                  <span className="card-icon"><Icon name="fa-brands fa-github" /></span>
                  <span><small>GitHub</small><strong>github.com/isatyatripathi</strong></span>
                  <Icon name="fa-solid fa-arrow-up-right-from-square" />
                </a>
                <p className="privacy-note"><Icon name="fa-solid fa-lock" /> No phone number or third-party contact form is published.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
