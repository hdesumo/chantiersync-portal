export default function DashboardChart() {
  const data = [35, 48, 52, 60, 66, 71, 78]; // progression mensuelle fictive
  const max = 100;
  const barW = 40;
  const gap = 24;
  const padding = 20;
  const width = padding * 2 + data.length * barW + (data.length - 1) * gap;
  const height = 180;

  return (
    <svg width={width} height={height} className="max-w-full">
      {/* Axes */}
      <line x1={padding} y1={10} x2={padding} y2={height - padding} stroke="currentColor" opacity="0.2" />
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="currentColor" opacity="0.2" />
      {/* Bars */}
      {data.map((v, i) => {
        const x = padding + i * (barW + gap);
        const h = ((height - padding * 2) * v) / max;
        const y = height - padding - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={h} rx={8} className="fill-blue-600 dark:fill-blue-400" />
            <text x={x + barW / 2} y={y - 6} textAnchor="middle" className="fill-current text-xs">
              {v}%
            </text>
          </g>
        );
      })}
      {/* Labels mois (fictifs) */}
      {["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui"].map((m, i) => {
        const x = padding + i * (barW + gap) + barW / 2;
        return (
          <text key={m} x={x} y={height - padding + 14} textAnchor="middle" className="fill-current text-xs opacity-70">
            {m}
          </text>
        );
      })}
    </svg>
  );
}
