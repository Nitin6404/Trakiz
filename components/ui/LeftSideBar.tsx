import {
    Search,
    LayoutGrid,
    ListChecks,
    ChevronsUp,
    Goal,
    AlarmClockCheck,
    LineChart,
    Lock,
    ArrowRight,
    CircleUserRound,
    MessageCircleQuestion
} from "lucide-react"
import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import Link from 'next/link';
import TrakizIcon from "@/components/icons/TrakizIcon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {
    Avatar,
} from '@radix-ui/react-avatar';
import TrakizAiIcon from "@/components/ui/trakiz-ai-icon"
import Chat from "@/components/component/Chat"
import { useDisclosure } from '@chakra-ui/hooks'
import React from 'react';
import { useRef } from 'react';
import { User } from "@supabase/supabase-js";

export default function LeftSideBar({ user }: { user: User }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | null>(null);
    return (
        <div className="flex flex-col h-full items-center p-4 font-poppins">
            <div className="w-full flex justify-between items-center ">
                <div className="flex justify-center items-center space-x-1">
                    <TrakizIcon />
                    <span className="font-semibold font-roboto text-sm">Trakiz</span>
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
            <div className='w-full'>
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
                            <ChevronsUp color="#939090" width={20} height={20} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className="text-[#939090]">Next Week</p>
                        </div>
                        <div>
                            <Lock color="#939090" width={20} height={20} />
                        </div>
                    </Link>
                    <Link
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className='flex space-x-3 cursor-not-allowed' href="/dashboard">
                        <div className='flex justify-center items-center'>
                            <Goal color="#939090" width={20} height={20} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className="text-[#939090]">Goals</p>
                        </div>
                        <div>
                            <Lock color="#939090" width={20} height={20} />
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
                            <Button className='bg-transparent p-0' ref={btnRef} onClick={onOpen}>
                                <p >Trakiz AI</p>
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
                        </div>
                    </Link>
                    <Link onClick={(e) => {
                        e.preventDefault();
                    }}
                        className='flex space-x-3 cursor-not-allowed' href="/dashboard">
                        <div className='flex justify-center items-center'>
                            <AlarmClockCheck color="#939090" width={20} height={20} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className="text-[#939090]">Pomodoro Timer</p>
                        </div>
                        <div>
                            <Lock color="#939090" width={20} height={20} />
                        </div>
                    </Link>
                    <Link onClick={(e) => {
                        e.preventDefault();
                    }}
                        className='flex space-x-3 cursor-not-allowed' href="/dashboard">
                        <div className='flex justify-center items-center'>
                            <LineChart color="#939090" width={20} height={20} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className="text-[#939090]">Progress Graph</p>
                        </div>
                        <div>
                            <Lock color="#939090" width={20} height={20} />
                        </div>
                    </Link>
                </nav>
            </div>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScjfWW_XL1OQBFpyW7X9BO2XITM9JnaI50OX5-7bzXjRJw68g/viewform" target="_blank">
                <div className="bg-slate-600 flex items-center justify-center rounded-md w-52 h-10 mt-52 mb-5 space-x-2">
                    <div>
                        <MessageCircleQuestion />
                    </div>
                    <div>
                        Help us improve
                    </div>
                    <div>
                        <ArrowRight />
                    </div>
                </div>
            </Link>
            <div className=' w-full justify-center items-center'>
                <Card className='flex space-x-2 border-none'>
                    <div className='flex justify-center items-center'>
                        <Avatar>
                            <CircleUserRound width={30} height={30} />
                        </Avatar>
                    </div>
                    <div className="flex flex-col justify-center">
                        <CardTitle className='font-normal font-poppins text-sm'>
                            {user ? user.email?.split('@')[0] : 'Name'}
                        </CardTitle>
                        <CardDescription className='font-normal text-xs text-muted-foreground overflow-hidden overflow-ellipsis max-w-xs'>
                            {user ? user.email : 'Email'}
                        </CardDescription>
                    </div>
                </Card>
            </div>
        </div>
    )
}