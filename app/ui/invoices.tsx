import ButtonDefault from "./cta/button-default";
import InvoicesList from "./invoices-list";

export default function Invoices() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <div>
          <ButtonDefault>
            <p>New Invoice</p>
          </ButtonDefault>
        </div>
      </div>
      <InvoicesList />
    </div>
  );
}
