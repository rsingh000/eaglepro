export default {
    name: 'services',
    title: 'Services', 
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string'
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        }
    ]
}