import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";

export default async function AdminProfilesPage() {
  if (!(await checkRole("admin"))) {
    redirect("/dashboard");
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Profiles</h1>
    </div>
  );
}