import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const page = async ({ params }: Props) => {
    const page = await getPage(params.slug);
    return (
        <div >
            <h1 className="text-5xl font-bold bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {page.title}
            </h1>
            <div className='mt-10 text-lg text-slate-100'>
                <PortableText value={page.content} />
            </div>
        </div>
    )
}

export default page