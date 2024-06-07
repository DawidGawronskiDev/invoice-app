import clsx from "clsx";
import { Invoice } from "./invoices-list-item";

export default function Status({ invoice }: { invoice: Invoice }) {
  return (
    <div
      className={clsx(
        "rounded-md p-2 flex items-center justify-center item gap-2 w-full font-bold flex-1",
        {
          "bg-emerald-500/10 text-green-500": invoice.status === "paid",
          "bg-orange-500/10 text-orange-500": invoice.status === "pending",
          "bg-gray-500/10 text-gray-500": invoice.status === "draft",
        }
      )}
    >
      <div className="w-2 aspect-square bg-current rounded-full"></div>
      <span className="capitalize">{invoice.status}</span>
    </div>
  );
}
