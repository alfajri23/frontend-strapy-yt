import React from 'react'
import Image from "next/image";

function About({data}) {
  return (
    <>
    <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image 
                            // src={'http://localhost:1337' + data.Image.url} 
                            src={process.env.STRAPI_MEDIA + data.Image.url}
                            className="rounded-[15px] dark:block"
                            alt="image-about-us" 
                            width={1207} height={929} />    
                        </div>
                    </div>
    
                    <div className="relative space-y-5">
                        <h2 className="relative z-10 max-w-xl text-3xl lg:text-4xl">{data.Title}</h2>
                            <p className="text-neutral-700">
                            {data.Subtitle}
                            </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About