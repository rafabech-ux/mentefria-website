import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/*
  Standard wrapper for inner pages: sticky liquid-glass nav + content +
  metal footer. The nav is sticky (occupies its own space), so no top
  padding is needed.
*/

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
