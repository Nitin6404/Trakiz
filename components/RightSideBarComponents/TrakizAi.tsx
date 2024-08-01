import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Button } from "@/components/ui/button"
import TrakizAiIcon from "@/components/ui/trakiz-ai-icon"
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/hooks'
import Chat from "@/components/component/Chat"

export const TrakizAi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
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
        </>
    )
}