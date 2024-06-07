import { ReactNode } from "react";
import IconPlus from "../icons/IconPlus";

export default function ButtonDefault({ children }: { children: ReactNode }) {
  return (
    <button className="bg-c-01 p-2 rounded-full flex items-center justify-between gap-2 hover:bg-c-02 hover:text-c-02">
      <div className="bg-c-11 rounded-full aspect-square w-8 flex items-center justify-center text-c-01">
        <IconPlus />
      </div>
      <div className="text-c-11">{children}</div>
    </button>
  );
}
