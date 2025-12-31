import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function AuthCallback() {
  const isAdmin = await checkRole('admin')
  
  if (isAdmin) {
    redirect('/admin')
  }
  
  redirect('/dashboard')
}