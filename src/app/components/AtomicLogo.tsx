export default function AtomicLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Teal orbits */}
      <ellipse
        cx="120"
        cy="90"
        rx="90"
        ry="35"
        fill="none"
        stroke="#5a9a95"
        strokeWidth="4"
        opacity="0.7"
        transform="rotate(-25 120 90)"
      />
      <ellipse
        cx="120"
        cy="90"
        rx="95"
        ry="38"
        fill="none"
        stroke="#4d8882"
        strokeWidth="3.5"
        opacity="0.6"
        transform="rotate(-20 120 90)"
      />

      {/* Gold/Yellow orbits */}
      <ellipse
        cx="120"
        cy="90"
        rx="88"
        ry="36"
        fill="none"
        stroke="#c4a35a"
        strokeWidth="4.5"
        opacity="0.75"
        transform="rotate(15 120 90)"
      />
      <ellipse
        cx="120"
        cy="90"
        rx="92"
        ry="39"
        fill="none"
        stroke="#b8964d"
        strokeWidth="3.5"
        opacity="0.65"
        transform="rotate(20 120 90)"
      />

      {/* Orange orbits */}
      <ellipse
        cx="120"
        cy="90"
        rx="85"
        ry="33"
        fill="none"
        stroke="#d47d49"
        strokeWidth="4"
        opacity="0.7"
        transform="rotate(55 120 90)"
      />
      <ellipse
        cx="120"
        cy="90"
        rx="90"
        ry="37"
        fill="none"
        stroke="#c87042"
        strokeWidth="3.5"
        opacity="0.6"
        transform="rotate(60 120 90)"
      />

      {/* Additional teal accent orbits */}
      <ellipse
        cx="120"
        cy="90"
        rx="87"
        ry="34"
        fill="none"
        stroke="#6ba8a0"
        strokeWidth="3.5"
        opacity="0.65"
        transform="rotate(-35 120 90)"
      />
      <ellipse
        cx="120"
        cy="90"
        rx="93"
        ry="40"
        fill="none"
        stroke="#7ab5ac"
        strokeWidth="3"
        opacity="0.55"
        transform="rotate(-30 120 90)"
      />

      {/* Center nucleus */}
      <circle cx="120" cy="90" r="5" fill="#2d3e4f" opacity="0.8" />
    </svg>
  );
}
