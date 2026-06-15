"use client";
import {
  Environment,
  KameleoonProviderSSR,
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
  useFeatureFlag,
} from "@kameleoon/react-sdk";
import { useCallback, useEffect, useState } from "react";
import { SITECODE } from "./sitecode";
import { DarkMode } from "@/components/KameleoonFlags/DarkMode";
import { AvailabilityBanner } from "@/components/KameleoonFlags/AvailabilityBanner";
import { AvailabilityProvider } from "@/integrations/Kameleoon/context/AvailabilityContext";

function KameleoonInit() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getRemoteVisitorData, addData, flush, getRemoteData } = useData();

  // const { isFeatureFlagActive, getEngineTrackingCode } = useFeatureFlag();
  // const [visitorCode, setVisitorCode] = useState<string | null>(null);

  useEffect(() => {
    // 1. initialize SDK
    initialize().then(async () => {
      console.log(">>>  Initializing Kameleoon SDK...");
      const visitorCode = getVisitorCode();
      console.log(
        ">>>  Initializing Kameleoon SDK... | visitorCode:",
        visitorCode,
      );
      // This is for demonstration purposes only — in a real app you would want to manage this data at a higher level and not call this on every render of the banner component
      await getRemoteVisitorData({ visitorCode });
      // console.log(">>>  Initializing Kameleoon SDK... | getRemoteVisitorData");
      // console.log(
      //   ">>>  Initializing Kameleoon SDK... | console",
      //   Kameleoon.API.CurrentVisit.customData,
      // );
      // console.log(
      //   ">>>  Initializing Kameleoon SDK... | local",
      //   Kameleoon.API.CurrentVisit.customData,
      // );
      // const jsonData = await getRemoteData(visitorCode);
      // console.log(
      //   ">>>  Initializing Kameleoon SDK... | getRemoteData",
      //   jsonData,
      // );
      // if (jsonData && typeof jsonData === "string") {
      //   const data = JSON.parse(jsonData);
      //   if (data?.Industry) {
      //     addData(visitorCode, new CustomData(2, String(data.Industry)));

      //     await flush(visitorCode);
      //   }
      // } else if (jsonData && typeof jsonData === "object") {
      //   // it may already be parsed
      //   const data = jsonData as Record<string, unknown>;
      //   if (data?.Industry) {
      //     addData(visitorCode, new CustomData(2, String(data.Industry)));

      //     await flush(visitorCode);
      //   }
      // }

      // setVisitorCode(visitorCode);
    });
  }, []);

  // if (!visitorCode) return null; // wait until ready

  // return (
  //   <>
  //     <DarkMode visitorCode={visitorCode} featureKey="dark_mode" />
  //     <AvailabilityBanner
  //       visitorCode={visitorCode}
  //       featureKey="availability_banner"
  //     />
  //   </>
  // );
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
