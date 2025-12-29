import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-sm text-gray-600">2026 - All rights reserved</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}