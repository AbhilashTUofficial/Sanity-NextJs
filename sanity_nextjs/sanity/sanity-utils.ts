import { createClient, groq, PortableTextBlock } from "next-sanity";
import { config } from "./config/client-config";

type Project = {
    _id: string,
    _createdAt: string,
    title: string,
    slug: string,
    image: string,
    url: string,
    content: PortableTextBlock[]
  }
type Page = {
    _id: string,
    _createdAt: string,
    title: string,
    slug: string,
    content: PortableTextBlock[]
}
export async function getProjects(): Promise<Project[]> {

    return createClient(config).fetch(
        groq`*[_type=="project"]{
            _id,
            title,
            _createdAt,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(config).fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            title,
            _createdAt,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content 
        }`,
        { slug }
    );
}



export async function getPages(): Promise<Page[]> {
    return createClient(config).fetch(
        groq`*[_type=="page"]{
            _id,
            title,
            _createdAt,
            "slug":slug.current
        }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(config).fetch(
        groq`*[_type=="page" && slug.current == $slug][0]{
            _id,
            title,
            _createdAt,
            "slug":slug.current,
            content
        }`,
        { slug }
    );
}