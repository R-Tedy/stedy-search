// import { title } from "process";

const schema = {
  name: 'resourcePlaylist',
  title: 'ResourcePlaylist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validaiton: (Rule: any) => Rule.required()
    },
    {
      name: 'resource',
      title: 'Resource',
      type: 'array',
      of: [{
        type: 'reference', to: [{type: 'resource'}]
      }]
    }
  ]
}

export default schema