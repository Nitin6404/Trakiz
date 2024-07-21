"use client"

import Link from 'next/link';
import Image from "next/image"
import ReminderSlip from "@/components/component/ReminderSlip";
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
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import React from 'react';
import { FocusableElement } from '@chakra-ui/utils';
import { useRef } from 'react';

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  // Assuming Button is a focusable element, explicitly type btnRef to match or use a more specific type if available
  const btnRef = useRef<HTMLButtonElement | null>(null);

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
        <ReminderSlip />
        <div className="flex flex-col h-full p-4 font-poppins">
          <header className='flex justify-end'>
            <Avatar>
              <AvatarImage width={30} height={30} className='rounded-full' src="https://avatars.githubusercontent.com/u/104624489?v=4" alt="@nitin6404" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </header>
          <div className='mt-5 '>
            <p className='text-4xl leading-10 font-bold font-montserrat'>Welcome back, Nitin</p>
          </div>
          <div className='mt-4 w-full flex justify-between items-center'>
            <div>
              <p className='text-xl leading-5 font-bold text-[#BDC1CA]'>You have 9 tasks to complete</p>
            </div>
            <div className='flex pr-16 space-x-5'>
              <Button className='bg-transparent' ref={btnRef} onClick={onOpen}>
                <TrakizAiIcon width={27} height={27} />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <div className='h-full flex justify-center items-center'>
                    <DrawerCloseButton width={30} height={30} borderRadius={20} backgroundColor='black' />
                  </div>
                  <DrawerBody display='flex' position='absolute' right={0} height='100%' width={350} className='p-0'>
                    <Chat onClose={onClose} />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              <div className='flex justify-center items-center'>
                <AlarmClockCheck />
              </div>
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