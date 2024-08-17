const page={
    name: 'page',
    type: 'document',
    title: 'Pages',
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
            description: 'Some frontend will require a slug to be set to be able to show the page',
            options: {
                source: 'title',
                maxLength: 96      
            }
        },
        {
            name:'content',
            title:'Content',
            type:'array',
            of:[{type:'block'}]
        }

    ]
}

export default page;