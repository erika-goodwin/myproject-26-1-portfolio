"use client";
import { useAvailability } from "@/integrations/Kameleoon/context/AvailabilityContext";
import { useFeatureFlag } from "@kameleoon/react-sdk";
import { useEffect } from "react";

export function AvailabilityBanner({
  visitorCode,
  featureKey,
}: {
  visitorCode: string;
  featureKey: string;
}) {
  const { getVariation } = useFeatureFlag();
  const { setData } = useAvailability();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_AVAILABILITY_BANNER === "on") {
      // DEV: uncomment one variation to test it locally
      // "open"   → For Recruiter
      // setData({
      //   display: "block",
      //   text: "📈 Open to new opportunities",
      //   textWeight: "underline",
      // });
      // "on"     → For Developer (active)
      // setData({
      //   display: "block",
      //   text: "💼 Actively seeking employment",
      //   textWeight: "bold",
      // });
      // "hidden" → For others / skippers
      setData({
        display: "hidden",
        text: "💼 Actively seeking employment",
        textWeight: "hide",
      });
      return;
    }

    const variation = getVariation({ visitorCode, featureKey });
    setData({
      display: String(variation.variables.get("display")?.value),
      text: String(variation.variables.get("text")?.value),
      textWeight: String(variation.variables.get("text_weight")?.value),
    });
  }, [visitorCode]);

  return null;
}
