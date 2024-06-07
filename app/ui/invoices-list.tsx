import Item, { Invoice } from "./invoices-list-item";

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

  return (
    <ul className="flex flex-col gap-4">
      {invoices.map((invoice: Invoice) => (
        <Item key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
