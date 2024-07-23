import SideBar from "@/components/component/SideBar"
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }
  return (
    <div className="w-full h-full ">
      <SideBar userData={data} />
    </div>
  )
} 