import { createClient, groq } from "next-sanity";

const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!;

export async function getProjects() {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: '2021-03-25',
    });

    return client.fetch(
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