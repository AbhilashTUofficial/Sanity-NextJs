
const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const config = {
    projectId: projectId,
    dataset: dataset,
    apiVersion: '2021-03-25',
}