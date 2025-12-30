import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      <header className="p-4">
        <Link href="/workers" className="text-2xl font-bold">
          OpenBase
        </Link>
      </header>
    </main>
  );
}