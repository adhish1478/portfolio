import data from "../../placeholders.json";

const BG_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAEq9Rm_LuYM_DYiUU-CEAVUpnlBQwdh2JCjwMP_8BP2OcC5U0fOrFT0WEl3dXm97t3eAvWw3kcCgCotFIkLyHZ6_Rnz15prBbYqG92Cm00fcPsf5dgFurmIBnviewExGlU6-GM4bKNwOm4vJ8_-F6nWCJm4qmh8N82FaqEq7uLCxCrixwL0PGgkVSg90842tHZG30O9puPrM31XJJe-Pu_S5ZK4MRJMk5A2IFKbAw0BNzf4sLSleoPFntv1saO8kjurS6r8l299bY";

export default function Projects() {
  const featuredProject = data.projects.find((p) => p.featured);
  const otherProjects = data.projects.filter((p) => !p.featured);

  return (
    <section className="py-xl px-md lg:px-offset-col reveal" id="projects">
      <div className="mb-lg">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
          {data.labels.projectsLabel}
        </span>
      </div>
      <div className="space-y-md">
        {/* Featured Project Card */}
        {featuredProject && (
          <div className="project-card bg-white border border-outline-variant p-md md:p-lg group">
            <div className="flex flex-col md:flex-row gap-lg">
              <div className="md:w-1/2">
                <span className="font-code-sm text-code-sm text-on-tertiary-container mb-xs block">
                  {data.labels.featuredTag}
                </span>
                <h3 className="font-headline-lg font-bold text-2xl sm:text-3xl md:text-headline-lg break-words mb-sm">
                  {featuredProject.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  {featuredProject.description}
                </p>
                <div className="flex gap-sm">
                  <a
                    className="font-code-sm text-code-sm text-secondary border-b border-secondary/0 hover:border-secondary transition-all"
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.labels.viewRepository}
                  </a>
                  <a
                    className="font-code-sm text-code-sm text-secondary border-b border-secondary/0 hover:border-secondary transition-all"
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.labels.systemSpecs}
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg">
                <div className="h-64 bg-surface-container-high relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-60 hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid md:grid-cols-2 gap-md">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white border border-outline-variant p-sm md:p-md"
            >
              <h4 className="font-headline-sm font-semibold text-lg sm:text-xl md:text-headline-sm break-words mb-xs">
                {project.name}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                {project.description}
              </p>
              <div className="flex gap-sm">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-code-sm text-code-sm text-on-tertiary-container"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
