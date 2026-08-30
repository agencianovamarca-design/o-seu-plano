"use client";

export function Logo({ iconSize = 36 }: { iconSize?: number }) {
  const gap = Math.round(iconSize * 0.09);
  const cell = Math.round((iconSize - gap * 2) / 3);

  const cx = (col: number) => col * (cell + gap);
  const cy = (row: number) => row * (cell + gap);

  const titleSize = Math.round(iconSize * 0.52);
  const subSize = Math.round(iconSize * 0.23);
  const textGap = Math.round(iconSize * 0.12);
  const marginLeft = Math.round(iconSize * 0.36);

  return (
    <span className="inline-flex items-center" style={{ gap: marginLeft }}>
      {/* Icon mark — 3×3 pixel grid, diagonal ascendente */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 ${iconSize} ${iconSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Linha 0 (topo): dim dim GOLD */}
        <rect x={cx(0)} y={cy(0)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />
        <rect x={cx(1)} y={cy(0)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />
        <rect x={cx(2)} y={cy(0)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="#D4A843" />

        {/* Linha 1 (centro): dim GOLD dim */}
        <rect x={cx(0)} y={cy(1)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />
        <rect x={cx(1)} y={cy(1)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="#D4A843" />
        <rect x={cx(2)} y={cy(1)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />

        {/* Linha 2 (base): GOLD dim dim */}
        <rect x={cx(0)} y={cy(2)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="#D4A843" />
        <rect x={cx(1)} y={cy(2)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />
        <rect x={cx(2)} y={cy(2)} width={cell} height={cell} rx={Math.max(2, Math.round(cell * 0.22))} fill="white" fillOpacity="0.12" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-heading font-extrabold text-white tracking-tight"
          style={{ fontSize: titleSize }}
        >
          O SEU PLANO
        </span>
        <span
          className="font-heading font-semibold text-gold tracking-[0.18em] uppercase"
          style={{ fontSize: subSize, marginTop: textGap }}
        >
          Estratégia Digital
        </span>
      </span>
    </span>
  );
}
