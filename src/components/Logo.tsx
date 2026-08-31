"use client";

export function Logo({ iconSize = 36 }: { iconSize?: number }) {
  // 4 ascending bars: heights 30%, 50%, 72%, 100% of iconSize
  const barHeightRatios = [0.3, 0.52, 0.74, 1.0];
  const gap = Math.round(iconSize * 0.14);
  const barW = Math.round((iconSize - 3 * gap) / 4);
  const svgW = 4 * barW + 3 * gap;
  const rx = Math.round(barW * 0.28);

  const titleSize = Math.round(iconSize * 0.5);
  const subSize = Math.round(iconSize * 0.21);
  const iconGap = Math.round(iconSize * 0.38);
  const subtitleTop = Math.round(iconSize * 0.07);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: iconGap,
        userSelect: "none",
      }}
    >
      {/* Icon: 4 ascending gold bars */}
      <svg
        width={svgW}
        height={iconSize}
        viewBox={`0 0 ${svgW} ${iconSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, display: "block" }}
        aria-hidden="true"
      >
        {barHeightRatios.map((ratio, i) => {
          const barH = Math.round(iconSize * ratio);
          const x = i * (barW + gap);
          const y = iconSize - barH;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx={rx}
              ry={rx}
              fill="#FFA300"
            />
          );
        })}
        {/* Accent dot on top of tallest bar */}
        <circle
          cx={3 * (barW + gap) + barW / 2}
          cy={Math.round(iconSize * 0.06)}
          r={Math.max(2, Math.round(barW * 0.22))}
          fill="#FFD080"
        />
      </svg>

      {/* Wordmark */}
      <span style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-heading, 'Montserrat', sans-serif)",
            fontSize: titleSize,
            fontWeight: 800,
            letterSpacing: "0.05em",
            color: "#F3F4F6",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          O SEU PLANO
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-heading, 'Montserrat', sans-serif)",
            fontSize: subSize,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#FFA300",
            lineHeight: 1,
            marginTop: subtitleTop,
            whiteSpace: "nowrap",
          }}
        >
          ESTRATÉGIA DIGITAL
        </span>
      </span>
    </span>
  );
}
