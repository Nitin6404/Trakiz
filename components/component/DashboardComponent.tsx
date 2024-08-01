"use client"
// import ReminderSlip from "@/components/component/ReminderSlip";
import { Separator } from "@/components/ui/separator"
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import React from 'react';
import LeftSideBar from "@/components/ui/LeftSideBar";
import useAuth from "@/hooks/useAuth";
import { RightSideBarComponents } from "@/components/RightSideBarComponents/RightSideBar";

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
        <RightSideBarComponents />
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default SideBar