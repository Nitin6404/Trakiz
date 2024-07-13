"use client"

import Link from 'next/link';
import Image from "next/image"
import { 
  BellIcon,
  Bell,
  CircleHelp, 
  AlignLeft, 
  Search, 
  LayoutGrid, 
  ListChecks, 
  ChevronsUp, 
  Goal, 
  AlarmClockCheck, 
  LineChart, 
  Users, 
  CircleUserRound } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { 
  Avatar,
  AvatarImage,
  AvatarFallback
 } from '@radix-ui/react-avatar';
 import { KanbanTodoBoard } from "@/components/component/KanbanTodoBoard"
  
const SideBar = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="border"
      >
        <ResizablePanel defaultSize={16}>
          <div className="flex flex-col h-full items-center p-4 font-poppins">
            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-center items-center space-x-1">
                <TrakizIcon />
                <span className="font-semibold font-roboto text-sm">Trakiz</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <BellIcon width={16} height={16} />
                <AlignLeft width={16} height={16} />
              </div>
            </div>
            <div className="mt-5 w-full relative">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8"
              />
            </div>
            <div className='w-full overflow-scroll scroll-m-2'>
              <nav className='mt-8 w-full flex flex-col space-y-3 px-3 font-poppins font-normal text-base'>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <LayoutGrid width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Dashboard</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <ListChecks width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Today Task</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <ChevronsUp width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Next Week</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <Goal width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Goals</p>
                  </div>
                </Link>
              </nav>
              <nav className='mt-12 w-full flex flex-col space-y-3 px-3 font-poppins font-normal text-base'>
                <span className='font-semibold text-base font-poppins'>Tools</span>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <TrakizAiIcon width={24} height={24} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Trakiz AI</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <AlarmClockCheck width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Pomodoro Timer</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <LineChart width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Progress Graph</p>
                  </div>
                </Link>
              </nav>
              <nav className='mt-12 w-full flex flex-col space-y-3 px-3 font-poppins font-normal text-base'>
                <span className='font-semibold text-base font-poppins'>Manage</span>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <Users width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Team</p>
                  </div>
                </Link>
                <Link className='flex space-x-3' href="/dashboard">
                  <div className='flex justify-center items-center'>
                    <CircleUserRound width={20} height={20} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <p>Profile</p>
                  </div>
                </Link>
              </nav>
            </div>
            <div className='mt-5 w-full justify-center items-center'>
              <Card className='flex  space-x-2 border-none'>
                <div className='flex justify-center items-center'>
                  <Avatar>
                    <AvatarImage width={35} height={35} className='rounded-full' src="https://avatars.githubusercontent.com/u/104624489?v=4" alt="@nitin6404" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <CardTitle className='font-normal font-poppins text-sm'>
                    Name
                  </CardTitle>
                  <CardDescription className='font-normal text-xs text-muted-foreground'>
                    email@domain.com
                  </CardDescription>
                </div>
              </Card>
            </div>
          </div>
        </ResizablePanel>
        <Separator orientation="vertical" />
        <ResizablePanel defaultSize={84}>
        <div className="flex flex-col h-full p-4 font-poppins">
          <header className='flex justify-end'>
            <div className='flex justify-center items-center space-x-5'>
              <div className='flex justify-center items-center'>
                <BellIcon width={20} height={20} />
              </div>
              <div className='flex justify-center items-center'>
                <CircleHelp width={20} height={20} />
              </div>
              <Avatar>
                <AvatarImage width={30} height={30} className='rounded-full' src="https://avatars.githubusercontent.com/u/104624489?v=4" alt="@nitin6404" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className='mt-5 '>
            <p className='text-4xl leading-10 font-bold font-montserrat'>Welcome back, Nitin</p>
          </div>
          <div className='mt-4 w-full flex justify-between items-center'>
            <div>
              <p className='text-xl leading-5 font-bold text-[#BDC1CA]'>You have 9 tasks to complete</p>
            </div>
            <div className='flex pr-16 space-x-5'>
              <TrakizAiIcon width={27} height={27} />
              <AlarmClockCheck />
            </div>
          </div>
          <div className='mt-4'>
            <KanbanTodoBoard />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function TrakizIcon() {
  return (
    <Image src="/logooftrakiz.png" alt="Trakiz Logo" width={35} height={35} />
  );
}
interface trakizAiIconProps {
  width: number;
  height: number;
}

function TrakizAiIcon({width, height}: trakizAiIconProps) {
  return (
    <div className='flex justify-center items-center h-full'>
      <svg className='pt-1' width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5556 15.5556V4.44445H13.3333V15.5556H15.5556Z" fill="#D6D6D6" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.2588 15.5556L9.37828 4.44445H6.17724L3.2966 15.5556H5.59229L6.16842 13.3333H9.38704L9.96315 15.5556H12.2588ZM8.81093 11.1111H6.74455L7.77776 7.12586L8.81093 11.1111Z" fill="#D6D6D6" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6.39856 4.34776e-07H13.6014C14.4958 -1.28456e-05 15.234 -2.38046e-05 15.8354 0.0491059C16.4599 0.100134 17.034 0.20965 17.5733 0.484417C20.4096 0.910521 19.0895 1.59044 19.5156 2.42671C19.7904 2.96597 19.8999 3.54009 19.9509 4.16464C20 4.76596 20 5.50413 20 6.39853V13.6015C20 14.4959 20 15.234 19.9509 15.8354C19.8999 16.4599 19.7904 17.034 19.5156 17.5733C19.0895 20.4096 20.4096 19.0895 17.5733 19.5156C17.034 19.7904 16.4599 19.8999 15.8354 19.9509C15.234 20 14.4959 20 13.6015 20H6.39853C5.50413 20 4.76596 20 4.16464 19.9509C3.54009 19.8999 2.96597 19.7904 2.42671 19.5156C1.59044 19.0895 0.910521 20.4096 0.484417 17.5733C0.20965 17.034 0.100134 16.4599 0.0491059 15.8354C-2.38046e-05 15.234 -1.28456e-05 14.4959 4.34776e-07 13.6015V6.39854C-1.28456e-05 5.50415 -2.38046e-05 4.76596 0.0491059 4.16464C0.100134 3.54009 0.20965 2.96597 0.484417 2.42671C0.910521 1.59044 1.59044 0.910521 2.42671 0.484417C2.96597 0.20965 3.54009 0.100134 4.16464 0.0491059C4.76596 -2.38046e-05 5.50416 -1.28456e-05 6.39856 4.34776e-07ZM4.3456 2.26395C3.85847 2.30375 3.60936 2.37589 3.43558 2.46443C3.01744 2.67748 2.67748 3.01744 2.46443 3.43558C2.37589 3.60936 2.30375 3.85847 2.26395 4.3456C2.22309 4.8457 2.22222 5.49269 2.22222 6.44445V13.5556C2.22222 14.4458 2.22298 15.0694 2.25652 15.5556H2.22222L2.26247 15.6361C2.26296 15.6422 2.26345 15.6483 2.26395 15.6544C2.30375 16.1415 2.37589 16.3906 2.46443 16.5644C2.67748 16.9826 3.01744 17.3225 3.43558 17.5356C3.60936 17.6241 3.85847 17.6963 4.3456 17.7361C4.67072 17.7626 5.05792 17.7723 5.55057 17.7758L5.55556 17.7778H13.5556C14.5073 17.7778 15.1543 17.7769 15.6544 17.7361C16.1415 17.6963 16.3906 17.6241 16.5644 17.5356C16.9826 17.3225 17.3225 16.9826 17.5356 16.5644C17.6241 16.3906 17.6963 16.1415 17.7361 15.6544C17.7769 15.1543 17.7778 14.5073 17.7778 13.5556V6.44445C17.7778 5.49269 17.7769 4.8457 17.7361 4.3456C17.6963 3.85847 17.6241 3.60936 17.5356 3.43558C17.3225 3.01744 16.9826 2.67748 16.5644 2.46443C16.3906 2.37589 16.1415 2.30375 15.6544 2.26395C15.1543 2.22309 14.5073 2.22222 13.5556 2.22222H6.44445C5.49269 2.22222 4.8457 2.22309 4.3456 2.26395Z" fill="#D6D6D6" />
      </svg>
    </div>
  )
}

export default SideBar