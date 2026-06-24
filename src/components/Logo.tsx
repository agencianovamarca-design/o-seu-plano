export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="O Seu Plano"
    >
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B87333" />
          <stop offset="50%" stopColor="#FFA300" />
          <stop offset="100%" stopColor="#FFD080" />
        </linearGradient>
      </defs>
      {/* Icon - geometric squares inspired by the brand */}
      <rect x="2" y="8" width="18" height="4" rx="0.5" fill="url(#gold-grad)" />
      <rect x="2" y="8" width="4" height="18" rx="0.5" fill="url(#gold-grad)" />
      <rect x="24" y="8" width="4" height="4" rx="0.5" fill="url(#gold-grad)" />
      <rect x="14" y="20" width="6" height="6" rx="0.5" fill="#0047FF" />
      <rect x="24" y="18" width="4" height="18" rx="0.5" fill="url(#gold-grad)" />
      <rect x="10" y="32" width="18" height="4" rx="0.5" fill="url(#gold-grad)" />
      <rect x="2" y="32" width="4" height="4" rx="0.5" fill="url(#gold-grad)" />
      {/* Text */}
      <text
        x="38"
        y="20"
        fontFamily="Montserrat, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3"
        fill="url(#gold-grad)"
      >
        O SEU PLANO
      </text>
      <text
        x="38"
        y="34"
        fontFamily="Montserrat, sans-serif"
        fontSize="6"
        fontWeight="400"
        letterSpacing="1.5"
        fill="#9CA3AF"
      >
        ENTENDA O{" "}
        <tspan fill="#0047FF">JOGO</tspan>
        {" "}ANTES DE ENTRAR.
      </text>
    </svg>
  );
}
