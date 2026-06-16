"use client";
import {
  Environment,
  KameleoonProviderSSR,
  useInitialize,
  useVisitorCode,
  useFeatureFlag,
  useData,
  CustomData,
} from "@kameleoon/react-sdk";
import { useEffect, useCallback, useState } from "react";
import { SITECODE } from "./sitecode";
import { AvailabilityBanner } from "@/components/KameleoonFlags/AvailabilityBanner";
import { AvailabilityProvider } from "./context/AvailabilityContext";

function KameleoonInit() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { isFeatureFlagActive, getEngineTrackingCode } = useFeatureFlag();
  const { addData, flush, getRemoteVisitorData } = useData();
  const [visitorCode, setVisitorCode] = useState<string | null>(null);

  const init = useCallback(async () => {
    // 1. initialize SDK
    await initialize();
    const vc = getVisitorCode();

    // 2. Set custom data
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    addData(vc, new CustomData(4, String(isDarkMode)));

    // 3. Flush so targeting rules see the data before evaluation
    await flush(vc);

    // 4. Evaluate flags — SDK is ready
    const isDark = isFeatureFlagActive({
      visitorCode: vc,
      featureKey: "dark_mode",
    });
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );

    const trackingCode = getEngineTrackingCode(vc);
    const script = document.createElement("script");
    script.text = trackingCode;
    document.head.appendChild(script);

    // 5. Fetch visitor's stored data from server (custom data set by other experiments/sources)
    await getRemoteVisitorData({ visitorCode: vc });

    // 6. Signal that init is done — flag components mount after this
    setVisitorCode(vc);
  }, [
    initialize,
    getVisitorCode,
    isFeatureFlagActive,
    getEngineTrackingCode,
    addData,
    flush,
    getRemoteVisitorData,
  ]);

  useEffect(() => {
    init();
  }, [init]);

  if (!visitorCode) return null;

  return (
    <AvailabilityBanner
      visitorCode={visitorCode}
      featureKey="availability_banner"
    />
  );
}

export default function KameleoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(">> KameleoonProvider rendered: ", process.env.NODE_ENV);

  return (
    <KameleoonProviderSSR
      sdkParameters={{
        siteCode: SITECODE,
        configuration: {
          updateInterval: 20,
          environment:
            process.env.NODE_ENV === "production"
              ? Environment.Production
              : Environment.Development,
        },
      }}
    >
      <AvailabilityProvider>
        <KameleoonInit />
        {children}
      </AvailabilityProvider>
    </KameleoonProviderSSR>
  );
}
