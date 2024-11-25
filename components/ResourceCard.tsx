import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'


interface params {
  title: string
  id: string
  image: string
  downloadNumber: number
  slug: string
}

const ResourceCard = ({title, id, image, downloadNumber, slug}:params) => {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]'>
      <Link href={`/resource/${id}`}>
        <CardHeader className='flex-col gap-2.5 !p-0'>
          <div className='h-fit w-full'>
            <Image
              src={image}
              className='h-full rounded-md object-cover'
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className='text-white font-semibold line-clamp-1 w-full text-left'>{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default ResourceCard