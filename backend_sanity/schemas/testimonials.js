export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string'
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string'
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'workimageurl',
            title: 'WorkImageURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
}