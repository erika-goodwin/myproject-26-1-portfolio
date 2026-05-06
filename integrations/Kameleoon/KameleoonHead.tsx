// ⛔ No "use client" here - must stay server-side
import { SITECODE_SRC } from "./sitecode";

const ANTIFLICKER_CSS = `
html::after {
    content: '';
    position: fixed;
    inset: 0;
    background: #fff;
    z-index: 2147483647;
}`;

export function KameleoonHead() {
  return (
    <>
      {/* Preload the engine so browser begins downloading ASAP */}
      <link
        rel="preload"
        href={SITECODE_SRC}
        as="script"
        fetchPriority="high"
      />
      {/* Anti-flicker stylesheet injected during SSR */}
      <style
        id="kameleoonLoadingStyleSheet"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: ANTIFLICKER_CSS }}
      />
    </>
  );
}
