import data from "../../placeholders.json";

export default function Contact() {
  const cleanLinkedin = data.meta.linkedin.replace("https://", "");
  const cleanGithub = data.meta.github.replace("https://", "");

  return (
    <>
      <section className="py-xl px-md lg:px-offset-col reveal mb-xl" id="contact">
        <div className="max-w-2xl">
          <h2 className="font-code-md text-lg sm:text-headline-sm break-words text-primary mb-lg">
            {data.labels.contactLabel}
          </h2>
          <div className="space-y-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-md md:gap-xl">
              <a
                className="font-code-md text-code-md text-on-surface-variant hover:text-secondary transition-all"
                href={`mailto:${data.meta.email}`}
              >
                {data.labels.emailPrefix}{data.meta.email}
              </a>
              <a
                className="font-code-md text-code-md text-on-surface-variant hover:text-secondary transition-all"
                href={data.meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.labels.linkedinPrefix}{cleanLinkedin}
              </a>
              <a
                className="font-code-md text-code-md text-on-surface-variant hover:text-secondary transition-all"
                href={data.meta.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.labels.githubPrefix}{cleanGithub}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-xl border-t border-outline-variant/20 px-md lg:px-offset-col bg-surface">
        <div className="flex flex-col md:flex-row gap-md items-start justify-between w-full">
          <div className="flex flex-col gap-xs">
            <span className="font-code-md text-code-md text-primary">
              {data.labels.footerBrand}
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              © 2024 {data.meta.name.toUpperCase()}{data.labels.footerCopyrightSuffix}
            </span>
          </div>
          <div className="flex gap-lg">
            <a
              className="font-code-sm text-code-sm text-on-primary-container hover:text-secondary transition-colors"
              href={data.meta.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.labels.footerGithub}
            </a>
            <a
              className="font-code-sm text-code-sm text-on-primary-container hover:text-secondary transition-colors"
              href={data.meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.labels.footerLinkedin}
            </a>
            <a
              className="font-code-sm text-code-sm text-on-primary-container hover:text-secondary transition-colors"
              href="#"
            >
              {data.labels.footerDocumentation}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
