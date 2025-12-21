import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 20, start = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let index = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { displayed, done };
}
