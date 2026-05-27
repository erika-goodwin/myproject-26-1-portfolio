// "use client";
// import {
//   useFeatureFlag,
//   useVisitorCode,
//   useInitialize,
// } from "@kameleoon/react-sdk";
// import { useEffect } from "react";

// export default function DarkModeFlag() {
//   console.log(">>>> DarkModeFlag 🚩");
// //   const { initialize } = useInitialize();
//   const { isFeatureFlagActive } = useFeatureFlag();
//   const { getVisitorCode } = useVisitorCode();

//   useEffect(() => {
//     const visitorCode = getVisitorCode();
//     console.log(">>>> Visitor Code:", visitorCode);
//     const isDark = isFeatureFlagActive({
//       visitorCode,
//       featureKey: "dark_mode",
//     });

//     console.log(">>>>>> Dark Mode Flag Active:", isDark);

//     document.documentElement.setAttribute(
//       "data-theme",
//       isDark ? "dark" : "light",
//     );
//   }, [isFeatureFlagActive, getVisitorCode]);

//   return null;
// }

// Kameleoon.API.Data.setCustomData("4", "true");
