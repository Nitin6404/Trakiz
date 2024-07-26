"use client"

// import ReminderSlip from "@/components/component/ReminderSlip";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@radix-ui/react-avatar';
import TrakizAiIcon from "@/components/ui/trakiz-ai-icon"
import { KanbanTodoBoard } from "@/components/component/KanbanTodoBoard"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import React, { useEffect } from 'react';
import { useRef } from 'react';
import Chat from "@/components/component/Chat"
import { AlarmClockCheck, CircleUserRound } from "lucide-react"
import LeftSideBar from "@/components/ui/LeftSideBar";
import useAuth from "@/hooks/useAuth"
import { User } from "@supabase/supabase-js";

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const user = useAuth();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="border"
    >
      <ResizablePanel defaultSize={16}>
        {user && <LeftSideBar user={user} />}
      </ResizablePanel>
      <Separator orientation="vertical" />
      <ResizablePanel defaultSize={84}>
        {/* <ReminderSlip /> */}
        <div className="flex flex-col h-full p-4 font-poppins">
          <header className='flex justify-end'>
            <Avatar>
              <Dialog>
                <DialogTrigger>
                  <CircleUserRound width={30} height={30} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when youre done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="Username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="Username"
                        defaultValue="abc123"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="Email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="Email"
                        defaultValue="abc@def.com"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Avatar>
          </header>
          <div className='mt-5 '>
            <p className='text-4xl leading-10 font-bold font-montserrat'>Welcome back, {user?.email?.split('@')[0]}</p>
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

export default SideBar