export default function FluidBackgroundLite() {
  return (
    <div style={styles.wrapper}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Much cheaper noise */}
          <filter id="distortLite">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="1" seed="3">
              {/* slower = fewer repaints */}
              <animate attributeName="baseFrequency" dur="60s" values="0.006;0.01;0.006" repeatCount="indefinite" />
            </feTurbulence>

            <feDisplacementMap in="SourceGraphic" scale="50">
              <animate attributeName="scale" dur="24s" values="25;50;25" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          {/* Lower density pattern */}
          <pattern id="linesLite" width="160" height="160" patternUnits="userSpaceOnUse">
            <g>
              {[30, 60, 90].map((r, i) => (
                <circle key={i} cx="80" cy="80" r={r} fill="none" stroke="var(--primary-color)" strokeWidth="1" opacity="0.7">
                  <animate attributeName="r" dur="30s" values={`${r - 10};${r + 12};${r - 10}`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#linesLite)" filter="url(#distortLite)" />
      </svg>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    background: "#000",
    overflow: "hidden",
  },
};
