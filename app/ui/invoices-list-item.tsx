import clsx from "clsx";
import IconArrowRight from "./icons/IconArrowRight";
import Link from "next/link";
import Status from "./status";

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
              <Status invoice={invoice} />
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
