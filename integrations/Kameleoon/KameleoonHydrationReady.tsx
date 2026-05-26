"use client";

import { useCallback, useEffect } from "react";
import { SITECODE_SRC } from "./sitecodeSrc";

export function KameleoonHydrationReady() {
  const removeAntiflickerStyles = useCallback(() => {
    const kameleoonLoadingTimeout = 500;
    window.kameleoonQueue = window.kameleoonQueue || [];
    window.kameleoonStartLoadTime = Date.now();

    window.kameleoonDisplayPage = function (fromEngine) {
      if (!fromEngine) {
        window.kameleoonTimeout = true;
      }
      document.getElementById("kameleoonLoadingStyleSheet")?.remove();
    };

    window.kameleoonDisplayPageTimeOut = setTimeout(
      window.kameleoonDisplayPage,
      kameleoonLoadingTimeout,
    );
  }, []);

  const loadEngine = useCallback(() => {
    if (document.getElementById("kameleoon-engine")) return;

    const script = document.createElement("script");
    script.src = SITECODE_SRC;
    script.async = true;
    script.id = "kameleoon-engine";
    document.head.appendChild(script);
  }, []);

  // Execute Kameleoon after hydration
  useEffect(() => {
    removeAntiflickerStyles();
    loadEngine();
  }, [loadEngine, removeAntiflickerStyles]);

  return null;
}
