import data from "../../placeholders.json";

export default function About() {
  const allSkills = Object.values(data.about.skills).flat();

  return (
    <section className="py-xl px-md lg:px-offset-col reveal" id="about">
      <div className="flex flex-col md:flex-row gap-xl">
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase">
              {data.labels.aboutLabel}
            </span>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="font-headline-sm text-headline-sm text-on-surface mb-lg max-w-2xl leading-relaxed">
            {data.about.bio}
          </p>
          <div className="flex flex-wrap gap-xs">
            {allSkills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-surface-container px-sm py-xs text-code-sm font-code-sm text-on-tertiary-container rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
