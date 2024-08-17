import { getProject, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: {
        project: string
    }
}

const Project = async ({ params }: Props) => {
    const slug = params.project;
    const project = await getProject(slug);
    return (
        <div className="">
            <header className="flex justify-between items-center">

                <div className="text-5xl font-bold bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent ">{project.title}</div>
                <a className="" href={project.url} target="_blank" rel="noopener noreferrer" title='View Project' > View Project</a>
            </header>
            <div className='mt-10 text-lg text-slate-100'>
                <PortableText value={project.content} />
            </div>
            <Image className="rounded-lg border mt-10 border-white" src={project.image} alt={project.title} width={200} height={200} />

        </div>
    )
}

export default Project