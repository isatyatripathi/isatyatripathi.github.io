import { Icon } from "@/components/Icon";
import type { ExpertiseGroup } from "@/types/portfolio";

type CoreExpertiseProps = {
  groups: ExpertiseGroup[];
};

export function CoreExpertise({ groups }: CoreExpertiseProps) {
  return (
    <div className="expertise-grid">
      {groups.map((group) => (
        <article className="expertise-card" key={group.title}>
          <div className="expertise-title-row">
            <span className="card-icon">
              <Icon name={group.icon} />
            </span>
            <h3>{group.title}</h3>
          </div>
          <p>{group.description}</p>
          <div className="expertise-tags">
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
