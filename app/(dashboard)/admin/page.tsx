import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";

export default async function AdminPage() {
  if (!(await checkRole("admin"))) {
    redirect("/");
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
    </div>
  );
}