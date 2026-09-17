import { useState, useEffect } from "react";
import data from "../../placeholders.json";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const nameToType = data.meta.name;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(nameToType.substring(0, index + 1));
      index++;
      if (index >= nameToType.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [nameToType]);

  const renderCodeLine = (line, idx) => {
    if (line.trim().startsWith("@")) {
      return (
        <span key={idx} className="text-on-tertiary-container">
          {line}
        </span>
      );
    }
    if (line.trim().startsWith("async def")) {
      const parts = line.split("def ");
      const keyword = parts[0] + "def ";
      const rest = parts[1];
      const funcName = rest.split("(")[0];
      const params = rest.substring(funcName.length);
      return (
        <span key={idx}>
          <span className="text-secondary">{keyword}</span>
          <span className="text-primary font-bold">{funcName}</span>
          <span>{params}</span>
        </span>
      );
    }

    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : "";
    const content = line.substring(indent.length);

    const words = content.split(" ");
    const parsedLine = words.map((word, wIdx) => {
      if (word === "await" || word === "return") {
        return (
          <span key={wIdx} className="text-secondary">
            {word}{wIdx === words.length - 1 ? "" : " "}
          </span>
        );
      }
      return (
        <span key={wIdx}>
          {word}{wIdx === words.length - 1 ? "" : " "}
        </span>
      );
    });

    return (
      <div key={idx}>
        <span>{indent}</span>
        {parsedLine}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center pt-xl dot-grid px-md lg:px-offset-col">
      <div className="w-full grid md:grid-cols-12 gap-xl">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="mb-sm">
            <span className="font-code-sm text-code-sm text-on-tertiary-container bg-surface-container px-xs py-base border border-outline-variant/30">
              {data.hero.annotation}
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-md">
            <span className="typewriter" id="typewriter">
              {typedName}
            </span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-lg">
            {data.hero.bio}
          </p>
          <div className="flex gap-md">
            <a
              className="px-md py-sm border border-outline font-semibold rounded-DEFAULT hover:border-primary hover:text-primary transition-all"
              href={`#${data.labels.navProjects.toLowerCase()}`}
            >
              {data.labels.projectsSub}
            </a>
            <a
              className="px-md py-sm bg-secondary text-white font-semibold rounded-DEFAULT hover:bg-secondary/90 transition-all"
              href={data.meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.labels.resumeSub}
            </a>
          </div>
        </div>
        
        {/* Right side code terminal */}
        <div className="md:col-span-5 hidden md:flex items-center justify-end">
          <div className="bg-white border border-outline-variant p-md rounded-lg shadow-sm w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform">
            <div className="flex gap-xs mb-sm">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="font-code-sm text-code-sm leading-relaxed text-on-surface-variant select-all whitespace-pre-wrap">
              {data.hero.codeSnippet.map((line, idx) => renderCodeLine(line, idx))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
