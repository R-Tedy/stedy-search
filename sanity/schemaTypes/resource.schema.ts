// import { type SchemaTypeDefinition } from 'sanity'

// import { title } from "process";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }

const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document', 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any)=> Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options:{source: 'title'}
    },
    {
      name: 'downloadLink',
      title: "DownloadLink",
      type: 'url',
      require,
      validation: (Rule : any) => Rule.required(),
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialNumber:0,
    }, 
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options:{
        hotspot: true,
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options:{
        list: ['magical', 'music', 'art', 'technology', 'religion', 'all'],
      }
    }
  ]

}

export default schema