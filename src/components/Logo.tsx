import Image from "next/image";

/*
  Mente Fria lockup (enso isotipo + MENTE FRIA wordmark, no tagline).
  Pure black on light surfaces, pure white on dark surfaces — never recolored.
  SVGs served unoptimized (vector, first-party brand asset).
*/

export function Logo({
  variant = "black",
  className,
}: {
  variant?: "black" | "white";
  className?: string;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-white.svg" : "/brand/logo-black.svg"}
      alt="Mente Fria"
      width={132}
      height={60}
      priority
      unoptimized
      className={className}
    />
  );
}
