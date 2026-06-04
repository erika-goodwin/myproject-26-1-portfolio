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
    // 2. get feature flag status
    const variation = getVariation({
      visitorCode,
      featureKey,
    });

    console.log(">>> FF variation for availability banner:", variation);

    // Kameleoon.API.CurrentVisit.customData
    // Kameleoon.API.Data.resetCustomData(2)
    // Kameleoon.API.Data.setCustomData(2,'Recruiter')
    // Kameleoon.API.Data.setCustomData(2,'Developer')
    // Kameleoon.API.Data.setCustomData(2, "Other");

    setData({
      display: String(variation.variables.get("display")?.value),
      text: String(variation.variables.get("text")?.value),
      textWeight: String(variation.variables.get("text_weight")?.value),
    });
  }, [visitorCode]);

  return null;
}
