import Script from "next/script";

export default function KameleoonScript() {
  return (
    <>
      <Script
        id="kameleoon-engine"
        type="text/javascript"
        src="//mw3bb7k31u.kameleoon.io/engine.js"
        async={true}
        fetchPriority="high"
        strategy="beforeInteractive"
      />
    </>
  );
}
