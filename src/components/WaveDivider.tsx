interface Props {
  flip?: boolean;
  fillClass?: string;
  className?: string;
}

export default function WaveDivider({ flip = false, fillClass = "fill-card/40", className = "" }: Props) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-20 ${flip ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path
          className={fillClass}
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
