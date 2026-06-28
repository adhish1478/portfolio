import data from "../../placeholders.json";

export default function Experience() {
  const pointerSymbol = "▸";
  const dashSymbol = "--";

  return (
    <section className="py-xl px-md lg:px-offset-col reveal" id="experience">
      <div className="mb-lg">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
          {data.labels.experienceLabel}
        </span>
      </div>
      <div className="space-y-xs border-l border-outline-variant/30 pl-md">
        {data.experience.map((exp, idx) => (
          <div key={idx} className="terminal-row group cursor-default">
            <div className="flex justify-between items-center py-xs border-b border-outline-variant/10">
              <span className="font-code-md text-code-md text-on-surface group-hover:text-secondary transition-colors">
                {pointerSymbol} {exp.role} @ {exp.company}
              </span>
              <span className="font-code-sm text-code-sm text-on-primary-container">
                {exp.period}
              </span>
            </div>
            
            <div className="details font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
              <ul className="list-none space-y-xs">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-xs">
                    <span className="text-secondary">{dashSymbol}</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
