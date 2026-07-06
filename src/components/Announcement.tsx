import { announcement } from "@/lib/content";

/*
  Top announcement band — brand metal: near-black graphite strip with a
  hairline chrome sheen and a single ice-blue spark. Sits in flow above
  the sticky liquid-glass nav.
*/

export function Announcement() {
  return (
    <div
      className="relative flex h-10 items-center justify-center px-4 text-center"
      style={{
        background: "linear-gradient(180deg, #16191d 0%, #08090b 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)",
      }}
    >
      <span
        aria-hidden
        className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--accent-ice, #5b9bd5)", boxShadow: "0 0 8px var(--m-blue-glow)" }}
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-xs">
        {announcement}
      </p>
    </div>
  );
}
