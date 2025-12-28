import Link from "next/link";

export function WorkersHeader() {
  return (
    <header className="border-b p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/workers" className="text-2xl font-bold">
          OpenBase
        </Link>
        <div className="flex gap-4">
          <button className="px-4 py-2">Apply</button>
          <button className="bg-black text-white px-4 py-2 rounded-md">Log In</button>
        </div>
      </div>
    </header>
  );
}