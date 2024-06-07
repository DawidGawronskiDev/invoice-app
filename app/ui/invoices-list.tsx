import Image from "next/image";
import Item, { Invoice } from "./invoices-list-item";
import IllustrationEmpty from "@/public/illustration-empty.svg";

const getInvoices = async (): Promise<Invoice[]> => {
  const response = await fetch("http://localhost:3000/data.json");

  if (!response.ok) {
    return {
      message: response.statusText || "Failed to fetch invoices",
      status: response.status,
    };
  }

  const invoices = await response.json();

  return invoices;
};

export default async function InvoicesList() {
  const invoices = await getInvoices();

  if (invoices.length < 1) {
    return (
      <div className="max-w-64 flex flex-col items-center justify-between gap-16 mx-auto mt-24">
        <Image src={IllustrationEmpty} alt="" />
        <div className="flex flex-col items-start justify-center gap-4">
          <h2>There is nothing here</h2>
          <p>
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {invoices.map((invoice: Invoice) => (
        <Item key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
