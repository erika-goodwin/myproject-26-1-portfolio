import { createContext, useContext, useState } from "react";

export type AvailabilityData = {
  display: string;
  text: string;
  textWeight: string;
} | null;

const AvailabilityContext = createContext<{
  data: AvailabilityData;
  setData: (d: AvailabilityData) => void;
}>({ data: null, setData: () => {} });

export function AvailabilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<AvailabilityData>(null);
  return (
    <AvailabilityContext value={{ data, setData }}>
      {children}
    </AvailabilityContext>
  );
}

export const useAvailability = () => useContext(AvailabilityContext);
