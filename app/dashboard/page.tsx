import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        <div className="text-2xl font-bold">OpenBase</div>
        <UserButton />
      </header>
      <main className="p-8 flex flex-col gap-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
        {/* Your dashboard content here */}
      </main>
    </>
  );
}