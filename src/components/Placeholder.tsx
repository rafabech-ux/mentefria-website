import { cn } from "@/lib/utils";

/*
  Neutral media placeholder. Stands in for the photography / video that the
  original layout uses, without reproducing any third-party assets. Renders a
  soft tonal gradient with an optional centered label, at a fixed aspect ratio.
*/

type Tone = "warm" | "cool" | "ink" | "blue";

const TONES: Record<Tone, string> = {
  warm: "from-[#efece9] to-[#dfd9d3] text-black/40",
  cool: "from-[#eef0f4] to-[#d7dbe2] text-black/40",
  ink: "from-[#2a2a2e] to-[#0c0c0e] text-white/40",
  blue: "from-[#dfe6ff] to-[#b9c7f5] text-black/40",
};

export function Placeholder({
  label = "Media placeholder",
  tone = "cool",
  className,
  rounded = "rounded-3xl",
  children,
}: {
  label?: string;
  tone?: Tone;
  className?: string;
  rounded?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-br",
        TONES[tone],
        rounded,
        className,
      )}
      role="img"
      aria-label={label}
    >
      {/* subtle texture grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {children ?? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
