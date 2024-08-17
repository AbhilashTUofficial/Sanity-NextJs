import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!;

 const config = defineConfig({
    basePath: '/admin',
    projectId: projectId,
    dataset: dataset,
    title: 'Sanity Studio',
    apiVersion: '2021-03-25',
    cdn: 'https://cdn.sanity.io',

    plugins: [deskTool()],

    schema: {
        types:schemas
    }

})

export default config;