import { Icon } from "@/components/Icon";
import type { ImpactStory } from "@/types/portfolio";

type ImpactGridProps = {
  stories: ImpactStory[];
};

export function ImpactGrid({ stories }: ImpactGridProps) {
  return (
    <div className="impact-grid">
      {stories.map((story) => (
        <article className="impact-card" key={story.title}>
          <div className="impact-card-top">
            <span className="card-icon">
              <Icon name={story.icon} />
            </span>
            <p className="eyebrow">{story.eyebrow}</p>
          </div>
          <h3>{story.title}</h3>
          <p>{story.summary}</p>
          <p className="impact-result">{story.result}</p>
          <div className="skill-row">
            {story.capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
