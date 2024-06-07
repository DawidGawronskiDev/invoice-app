import { Invoice } from "@/app/ui/invoices-list-item";
import { NextResponse } from "next/server";

async function getInvoices(): Promise<Invoice[]> {
  const response = await fetch("http://localhost:3000/data.json");

  if (!response.ok) {
    return {
      message: response.statusText || "Failed to fetch invoices",
      status: response.status,
    };
  }

  const invoices = await response.json();

  return invoices;
}

export async function GET(
  request: Request,
  { params }: { params: { invoiceId: string } }
) {
  try {
    const invoices = await getInvoices();

    const invoice = invoices.find((invoice) => invoice.id === params.invoiceId);

    if (!invoice) {
      return NextResponse.json({
        message: "Invoice does not exist",
        status: 404,
      });
    }

    return NextResponse.json(invoice);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to fetch invoices",
      status: 500,
    });
  }

  return NextResponse.json(invoices);
}
