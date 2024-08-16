

const project={
    name: 'project',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontend will require a slug to be set to be able to show the project',
            options: {
                source: 'title'            
            }
        },
        {
            name:'image',
            type:'image',
            title:'Image',
            option:{
                hotspot: true,
            },
            fields:[
                {
                name:'alt',
                title:'Alt',
                type:'string'
            }
            ]
        },
        {
            name:'url',
            type:'url',
            title:'URL'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[{type:'block'}]
        }
    ]
}

export default project;