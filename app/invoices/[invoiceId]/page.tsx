import DefaultButtonTwo from "@/app/ui/cta/button-default-two";
import DeleteButton from "@/app/ui/cta/button-delete";
import EditButton from "@/app/ui/cta/button-edit";
import { Invoice } from "@/app/ui/invoices-list-item";
import Status from "@/app/ui/status";

async function getInvoice(id: string): Promise<Invoice> {
  const response = await fetch(`http://localhost:3000/api/invoices/${id}`);

  if (!response.ok) {
    throw new Error();
  }

  const invoice = await response.json();

  return invoice;
}

export default async function Page({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoice = await getInvoice(params.invoiceId);

  console.log(invoice);

  return (
    <main>
      <div className=" w-full max-w-3xl mx-auto flex flex-col gap-4">
        <div className="p-4 bg-c-11 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center justify-start gap-4">
                <p>status</p>
                <Status invoice={invoice} />
              </div>
            </div>
            <div className="flex gap-2">
              <EditButton id={invoice.id} />
              <DeleteButton id={invoice.id} />
              <DefaultButtonTwo id={invoice.id}>Mark as Paid</DefaultButtonTwo>
            </div>
          </div>
        </div>
        <div className="p-12 bg-c-11 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="font-bold grid gap-1.5">
              <div>
                <span className="text-c-07">#</span>
                <span>{invoice.id}</span>
              </div>
              <p>{invoice.description}</p>
            </div>
            <div className="text-right">
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="grid gap-8">
              <div className="grid gap-3">
                <p>Invoice Date</p>
                <h3>{invoice.createdAt}</h3>
              </div>
              <div className="grid gap-3">
                <p>Payment Due</p>
                <h3>{invoice.paymentDue}</h3>
              </div>
            </div>
            <div>
              <div className="grid gap-3">
                <p>Bill To</p>
                <div className="grid gap-2">
                  <h3>{invoice.clientName}</h3>
                  <div>
                    <p>{invoice.clientAddress.street}</p>
                    <p>{invoice.clientAddress.city}</p>
                    <p>{invoice.clientAddress.postCode}</p>
                    <p>{invoice.clientAddress.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>Sent to</p>
                <h3>{invoice.clientEmail}</h3>
              </div>
            </div>
          </div>
          <div className="bg-c-05">Hello</div>
        </div>
      </div>
    </main>
  );
}
