import { redirect } from 'next/navigation'
import { checkRole } from '@/utils/roles'

export default async function AdminDashboard() {
  if (!(await checkRole('admin'))) {
    redirect('/')
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Your new admin functionality here */}
    </div>
  )
}