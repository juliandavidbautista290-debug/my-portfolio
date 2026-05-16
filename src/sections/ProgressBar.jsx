import { useEffect, useState, useRef } from "react";

function ProgressBar({ label, percentage, icon: Icon, color }) {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const hasPlayedSound = useRef(false);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    if (!start) return;

    let current = 0;

    const timer = setInterval(() => {
      current += (percentage - current) * 0.08;

      if (percentage - current < 0.5) {
        current = percentage;
        clearInterval(timer);
      }

      setProgress(current);


      if (
        Math.round(current) === percentage &&
        !hasPlayedSound.current
      ) {
        hasPlayedSound.current = true;

        const audio = new Audio("/sounds/complete.mp3");
        audio.volume = 0.4;
        audio.play().catch(() => {});
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, percentage]);

  return (
    <div className="progress-item" ref={ref}>
      <div className="progress-label">
        <div className="label-left">
          <Icon style={{ color }} />
          <span>{label}</span>
        </div>


        <span>{Math.round(progress)}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${color}, orange)`
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;