import React, { useState, useEffect } from "react";


const LINES = [
  { prompt: "$", text: "cat about.md" },

  {
    prompt: "",
    text: "Soy desarrollador web enfocado en backend con Laravel y PHP,",
    dim: true,
  },

  {
    prompt: "",
    text: "aunque también me gusta trabajar con React para crear",
    dim: true,
  },

  {
    prompt: "",
    text: "interfaces modernas.",
    dim: true,
  },

  { prompt: "", text: "", dim: true },

  {
    prompt: "",
    text: "Disfruto desarrollar aplicaciones funcionales,",
    dim: true,
  },

  {
    prompt: "",
    text: "aprender nuevas tecnologías y seguir mejorando",
    dim: true,
  },

  {
    prompt: "",
    text: "en el desarrollo de software.",
    accent: true,
  },
];
function useTypedLines(lines, speed = 22, lineDelay = 260) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let current = [];

    function tick() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const line = lines[lineIndex];
      charIndex++;
      const partial = line.text.slice(0, charIndex);
      const next = [...current.slice(0, lineIndex), { ...line, text: partial }];
      setRendered(next);

      if (charIndex >= line.text.length) {
        current = next;
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, lineDelay);
      } else {
        setTimeout(tick, speed);
      }
    }
    const start = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rendered, done };
}

const AboutTerminal = () => {
  const { rendered, done } = useTypedLines(LINES);

  return (
    <div className="about-terminal">
      <div className="about-terminal-bar">
        <div className="about-terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="about-terminal-title">angel@portfolio: ~</span>
      </div>
      <div className="about-terminal-body">
        {rendered.map((l, i) => (
          <div
            key={i}
            className={
              "about-terminal-line" +
              (l.dim ? " dim" : "") +
              (l.accent ? " accent" : "")
            }
          >
            <span className="about-terminal-prompt">{l.prompt}</span> {l.text}
          </div>
        ))}
        <div className="about-terminal-line">
          <span className="about-terminal-prompt">$</span>
          <span className={"about-cursor" + (done ? " blink" : "")}> </span>
        </div>
      </div>
    </div>
  );
};

export default AboutTerminal;