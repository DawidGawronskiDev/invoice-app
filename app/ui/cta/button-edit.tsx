import Link from "next/link";

export default function EditButton({ id }: { id: string | number }) {
  return (
    <Link href={`/invoices/${id}/edit`}>
      <button className="rounded-full px-4 py-2 font-bold bg-c-05 text-c-04">
        Edit
      </button>
    </Link>
  );
}
