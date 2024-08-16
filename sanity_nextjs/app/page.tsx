import Image from "next/image";
import {
  getProjects

} from "@/sanity/sanity-utils";
export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col p-24">
      {
        projects.map((project) => (
          <div key={project._id}>
            <h1>{project.title}</h1>
          </div>
        ))
      }
    </main>
  );
}
