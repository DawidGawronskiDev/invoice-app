import clsx from "clsx";

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
          <div>
            <span>#</span>
            <span>{invoice.id}</span>
          </div>
          <div>
            <span>{invoice.paymentDue}</span>
          </div>
          <div>
            <span>{invoice.clientName}</span>
          </div>
          <div>
            <span>
              £ {new Intl.NumberFormat("en-GB").format(invoice.total)}
            </span>
          </div>
          <div>
            <div
              className={clsx(
                "rounded-md p-2 flex items-center justify-center gap-2 w-full",
                {
                  "bg-emerald-500/10 text-green-500": invoice.status === "paid",
                  "bg-orange-500/10 text-orange-500":
                    invoice.status === "pending",
                  "bg-gray-500/10 text-gray-500": invoice.status === "draft",
                }
              )}
            >
              <div className="w-2 aspect-square bg-current rounded-full"></div>
              <span className="capitalize">{invoice.status}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
