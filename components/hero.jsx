import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Image from "next/image";

function Hero({data}) {
  return (
    <>
    <div className='flex md:flex-row flex-col mx-auto md:h-screen'>
            <div className='flex-1 flex flex-col'>
                <div className='py-5 ps-5'>
                    <div className='flex justify-between flex-row px-2'>
                        <div className='flex flex-row items-center gap-3'>
                            <Avatar>
                                <AvatarImage src="https://images.unsplash.com/photo-1632719708243-24d34dba666e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className='font-medium'>Ice block</p>
                        </div>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
                <div className='grow-7 md:p-20 px-10 py-20 flex flex-col items-center justify-center'>
                    <h1 className='md:text-5xl text-4xl text-center font-normal mb-2'>{data.Title}</h1>
                    <p>{data.Subtitle}</p>
                    <Button 
                        asChild
                        className='rounded-full mt-10'
                        variant="outline" size="lg">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        Pesan
                        </a>
                    </Button>
                </div>
            </div>
            <div className='flex-1 flex justify-end'>
                <Image
                    // src={'http://localhost:1337' + data.Image.url}
                    src={process.env.STRAPI_MEDIA + data.Image.url}
                    className='object-cover h-full h-auto rounded-bl-lg'
                    height={1000}
                    width={1000}
                    alt='hero'
                />
            </div>
        </div>
    </>
  )
}

export default Hero