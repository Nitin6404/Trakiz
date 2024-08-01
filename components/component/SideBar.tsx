"use client"
// import ReminderSlip from "@/components/component/ReminderSlip";
import { Separator } from "@/components/ui/separator"
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { KanbanTodoBoard } from "@/components/component/KanbanTodoBoard"
import React from 'react';
import LeftSideBar from "@/components/ui/LeftSideBar";
import { OnboardingMessage } from "@/components/RightSideBarComponents/OnboaringMessage"
import { HeaderAvatar } from "../RightSideBarComponents/HeaderAvatar"
import useAuth from "@/hooks/useAuth";

const SideBar = () => {
  const user = useAuth();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="border"
    >
      <ResizablePanel defaultSize={17}>
        {user && <LeftSideBar user={user} />}
      </ResizablePanel>
      <Separator orientation="vertical" />
      <ResizablePanel defaultSize={83}>
        {/* <ReminderSlip /> */}
        <div className="flex flex-col h-full p-4 font-poppins">
          <header className='flex justify-end'>
            <HeaderAvatar />
          </header>
          <OnboardingMessage />
          <div className='mt-4'>
            <KanbanTodoBoard />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default SideBar