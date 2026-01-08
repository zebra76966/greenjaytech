export default function FluidBackgroundZoom() {
  return (
    <div style={styles.wrapper}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Distortion */}
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4">
              <animate attributeName="baseFrequency" dur="30s" values="0.01;0.018;0.01" repeatCount="indefinite" />
            </feTurbulence>

            <feDisplacementMap in="SourceGraphic" scale="120">
              <animate attributeName="scale" dur="14s" values="60;120;60" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          {/* Zooming Circles Pattern */}
          <pattern id="zoomPattern" width="1000" height="1000" patternUnits="userSpaceOnUse">
            <g transform="translate(500 500)">
              {[...Array(14)].map((_, i) => {
                const delay = i * 1.4;
                const startR = 40 + i * 18;

                return (
                  <circle key={i} r={startR} fill="none" stroke="var(--primary-color)" strokeWidth="1.2" opacity="0">
                    {/* Radius expansion */}
                    <animate attributeName="r" dur="18s" begin={`${delay}s`} values={`${startR};900`} repeatCount="indefinite" />

                    {/* Fade in → out */}
                    <animate attributeName="opacity" dur="18s" begin={`${delay}s`} values="0;0.9;0" repeatCount="indefinite" />
                  </circle>
                );
              })}
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#zoomPattern)" filter="url(#distort)" />
      </svg>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    background: "#000",
    overflow: "hidden",
  },
};
