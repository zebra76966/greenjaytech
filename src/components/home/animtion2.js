export default function FluidBackground() {
  return (
    <div style={styles.wrapper}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Noise */}
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4">
              <animate attributeName="baseFrequency" dur="30s" values="0.01;0.018;0.01" repeatCount="indefinite" />
            </feTurbulence>

            <feDisplacementMap in="SourceGraphic" scale="120">
              <animate attributeName="scale" dur="12s" values="40;100;40" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          {/* Higher Density Ripple Pattern */}
          <pattern id="lines" width="110" height="110" patternUnits="userSpaceOnUse">
            <g>
              {[20, 32, 44, 56, 68].map((r, i) => (
                <circle key={i} cx="55" cy="55" r={r} fill="none" stroke="var(--primary-color)" strokeWidth="1.15" opacity="0.9">
                  <animate attributeName="r" dur="18s" values={`${r - 8};${r + 18};${r - 8}`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#lines)" filter="url(#distort)" />
      </svg>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minWidth: "100dvw",
    height: "100vh",
    background: "#000",
    overflow: "hidden",
  },
};
