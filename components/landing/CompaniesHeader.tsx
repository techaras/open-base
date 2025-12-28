import Link from "next/link";

export function CompaniesHeader() {
  return (
    <header className="border-b p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/companies" className="text-2xl font-bold">
          OpenBase
        </Link>
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">Request Data</button>
        </div>
      </div>
    </header>
  );
}