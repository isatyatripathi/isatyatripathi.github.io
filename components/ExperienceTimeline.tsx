import { Icon } from "@/components/Icon";
import type { Experience } from "@/types/portfolio";

type ExperienceTimelineProps = {
  experience: Experience[];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline-row" key={`${item.company}-${item.role}`}>
          <div className="timeline-date">
            <Icon name="fa-solid fa-circle" />
            <p>
              {item.start} – {item.end}
            </p>
            <span>{item.location}</span>
          </div>
          <div className="timeline-card">
            <div className="timeline-card-heading">
              <div>
                <p className="company-name">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              {item.current ? <span className="current-pill">Current</span> : null}
            </div>
            <p className="timeline-summary">{item.summary}</p>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="skill-row" aria-label={`Skills used as ${item.role}`}>
              {item.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
