import { ReactNode } from "react";

export default function DefaultButtonTwo({
  id,
  children,
}: {
  id: string | number;
  children: ReactNode;
}) {
  return (
    <button className="px-4 py-2 bg-c-01 rounded-full font-bold text-c-11">
      {children}
    </button>
  );
}
