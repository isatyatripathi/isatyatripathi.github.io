import { Icon } from "@/components/Icon";
import type { Metric } from "@/types/portfolio";

type MetricStripProps = {
  metrics: Metric[];
};

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <section className="metric-strip" aria-label="Selected career metrics">
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-item" key={metric.label}>
            <Icon name={metric.icon} className="metric-icon" />
            <div>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.detail}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
