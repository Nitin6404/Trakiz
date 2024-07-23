import SideBar from "@/components/component/SideBar"
import { redirect } from 'next/navigation'

export default async function Page() {
  return (
    <div className="w-full h-full ">
      <SideBar />
    </div>
  )
} 