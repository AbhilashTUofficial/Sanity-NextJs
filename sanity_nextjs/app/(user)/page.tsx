import {
  getProjects

} from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const projects = await getProjects();

  return (
    <main >
      <h1 className="text-5xl font-bold bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Hello world!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {
          projects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="text-2xl border rounded-lg p-6 flex-1 flex flex-row hover:scale-105 ease-in transition-all " key={project._id}>
              <Image className="rounded-lg w-20 h-20" src={project.image} alt={project.title} width={200} height={200} />
              <h1 className="ml-4 justify-self-center align-bottom flex-1 ">{project.title}</h1>
            </Link>
          ))
        }
      </div>
    </main>
  );
}
