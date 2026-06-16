"use client";
import {
  useInitialize,
  useVisitorCode,
  useFeatureFlag,
  useData,
  CustomData,
} from "@kameleoon/react-sdk";
import { useEffect, useCallback } from "react";

export function DarkMode({
  visitorCode,
  featureKey,
}: {
  visitorCode: string;
  featureKey: string;
}): null {
  // const { initialize } = useInitialize();
  // const { getVisitorCode } = useVisitorCode();
  const { isFeatureFlagActive, getEngineTrackingCode } = useFeatureFlag();
  const { addData, flush } = useData();

  const init = useCallback(async () => {
    // // 1. initialize SDK
    // await initialize(); // wait for this first
    // const visitorCode = getVisitorCode();

    // 2. Set your custom data via SDK - dark mode?
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const customData = new CustomData(4, String(isDarkMode));
    addData(visitorCode, customData);

    // 3. Flush pushes it to the engine so targeting rules can see it
    await flush(visitorCode);

    // 4. NOW evaluate — the SDK has all the data it needs
    const isDark = isFeatureFlagActive({
      visitorCode,
      featureKey,
    });
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );

    // Send tracking code to Engine | activatedInVisit
    const trackingCode = getEngineTrackingCode(visitorCode);
    const script = document.createElement("script");
    script.text = trackingCode;
    document.head.appendChild(script);
  }, [isFeatureFlagActive, getEngineTrackingCode]);

  useEffect(() => {
    init();
  }, [init]);

  return null;
}
