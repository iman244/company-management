import type { CollectionConfig } from 'payload'

export const Personnel: CollectionConfig = {
  slug: 'personnel',
  admin: {
    useAsTitle: 'full name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'node',
      type: 'relationship',
      relationTo: 'nodes',
      required: true,
    },
    {
      name: 'full name',
      type: 'text',
      required: true,
    },
    {
      name: 'national code',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
