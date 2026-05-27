"use client";
import {
  Environment,
  KameleoonProviderSSR,
  useInitialize,
  useVisitorCode,
  useFeatureFlag,
} from "@kameleoon/react-sdk";
import { useEffect, useCallback } from "react";
import { SITECODE } from "./sitecode";

function KameleoonInit() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { isFeatureFlagActive } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize(); // wait for this first

    const visitorCode = getVisitorCode();
    // only THEN check the flag
    const isDark = isFeatureFlagActive({
      visitorCode,
      featureKey: "dark_mode",
    });

    document.documentElement.setAttribute("data-theme", "dark");
    // document.documentElement.setAttribute(
    //   "data-theme",
    //   isDark ? "dark" : "light",
    // );
  }, [initialize, getVisitorCode, isFeatureFlagActive]);

  useEffect(() => {
    init();
  }, [init]);

  return null;
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
      <KameleoonInit />
      {children}
    </KameleoonProviderSSR>
  );
}
