"use client"

import Link from 'next/link';
import Image from "next/image"
import { BellIcon, AlignLeft, Search, LayoutDashboard, ListChecks, ChevronsUp, Goal } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
const SideBar = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={20}>
          <div className="flex flex-col h-full items-center py-6 px-4">
            {/* Top level Trakiz Icon */}
            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-center items-center">
                <TrakizIcon />
                <span className="font-semibold font-roboto text-lg">Trakiz</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <BellIcon /> 
                <AlignLeft />
              </div>
            </div>
            <div className="mt-10 w-full flex justify-start items-center">
              <Search className="absolute left-9" width={16} height={16} />
              <Input color='#000' className='px-3 py-2 placeholder:pl-8 ' placeholder="Search" />
            </div>
            <nav className='mt-10 w-full flex flex-col space-y-3 px-3 font-inter font-normal text-base'>
              <Link className='flex space-x-3' href="/dashboard">
               <LayoutDashboard />
               <p>Dashboard</p>
              </Link>
              <Link className='flex space-x-3' href="/dashboard">
               <ListChecks />
               <p>Today Task</p>
              </Link>
              <Link className='flex space-x-3' href="/dashboard">
               <ChevronsUp />
               <p>Next Week</p>
              </Link>
              <Link className='flex space-x-3' href="/dashboard">
               <Goal />
               <p>Goals</p>
              </Link>
            </nav>
          </div>
        </ResizablePanel>
        <Separator orientation="vertical" />
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full items-center justify-center p-2">

          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
}

function TrakizIcon() {
  return (
    <Image src="/logooftrakiz.png" alt="Trakiz Logo" width={45} height={45} />
  );
}


export default SideBar