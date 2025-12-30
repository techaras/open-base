import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="p-4">
        <Link href="/workers" className="text-2xl font-bold">
          OpenBase
        </Link>
      </header>

      <div className="flex items-center justify-center px-4 py-12">
        <ApplicationForm />
      </div>
    </main>
  );
}