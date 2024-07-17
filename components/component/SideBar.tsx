"use client"

import Link from 'next/link';
import Image from "next/image"
import {
  X,
  BellIcon,
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
  CircleUserRound,
  CrossIcon
} from "lucide-react"
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@radix-ui/react-avatar';
import TrakizAiIcon from "@/components/ui/trakiz-ai-icon"
import Chat from "@/components/component/Chat"
import { KanbanTodoBoard } from "@/components/component/KanbanTodoBoard"
import { Dialog, DialogClose, DialogContent, DialogTrigger, DialogOverlay, DialogPortal, DialogDescription, DialogTitle } from '../ui/dialog';

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
              {/* <Drawer direction='right'>
                <DrawerTrigger>
                  <TrakizAiIcon width={27} height={27} />
                </DrawerTrigger>
                <DialogPortal>
                  <DrawerContent className="fixed right-0 top-0 h-full w-1/5 bg-gray-900 shadow-lg">
                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
                      <span className="text-white">AI Chat</span>
                      <DrawerClose>
                        <X className="text-white cursor-pointer" />
                      </DrawerClose>
                    </div>
                    <Chat />
                  </DrawerContent>
                </DialogPortal>
              </Drawer> */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    <TrakizAiIcon width={27} height={27} />
                  </button>
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay className="bg-blackA6 fixed inset-0" />
                  <DialogContent className="fixed top-0 right-0 h-full w-[20%] bg-white shadow-lg focus:outline-none overflow-y-auto">
                    <Chat />
                    <DialogClose asChild>
                      <button
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                      >
                        <CrossIcon />
                      </button>
                    </DialogClose>
                  </DialogContent>
                </DialogPortal>
              </Dialog>

            <AlarmClockCheck />
          </div>
        </div>
        <div className='mt-4'>
          <KanbanTodoBoard />
        </div>
      </div>
    </ResizablePanel>
    </ResizablePanelGroup >
  )
}

function TrakizIcon() {
  return (
    <Image src="/logooftrakiz.png" alt="Trakiz Logo" width={35} height={35} />
  );
}

export default SideBar