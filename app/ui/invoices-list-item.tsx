import clsx from "clsx";
import IconArrowRight from "./icons/IconArrowRight";
import Link from "next/link";

export type Invoice = {
  id: string | number;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
};

export default function Item({ invoice }: { invoice: Invoice }) {
  return (
    <li>
      <div className="bg-c-11 rounded-lg p-4 shadow-sm">
        <div className="grid grid-cols-5 *:flex *:items-center">
          <div className="font-bold">
            <span className="text-c-07">#</span>
            <span>{invoice.id}</span>
          </div>
          <div className="font-medium text-c-07">
            <span>{invoice.paymentDue}</span>
          </div>
          <div className="font-medium text-c-07">
            <span>{invoice.clientName}</span>
          </div>
          <div className="font-bold">
            <span>
              £ {new Intl.NumberFormat("en-GB").format(invoice.total)}
            </span>
          </div>
          <div>
            <div className="flex  items-center gap-4 w-full">
              <div
                className={clsx(
                  "rounded-md p-2 flex items-center justify-center item gap-2 w-full font-bold flex-1",
                  {
                    "bg-emerald-500/10 text-green-500":
                      invoice.status === "paid",
                    "bg-orange-500/10 text-orange-500":
                      invoice.status === "pending",
                    "bg-gray-500/10 text-gray-500": invoice.status === "draft",
                  }
                )}
              >
                <div className="w-2 aspect-square bg-current rounded-full"></div>
                <span className="capitalize">{invoice.status}</span>
              </div>
              <Link href={`/invoices/${invoice.id}`}>
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
